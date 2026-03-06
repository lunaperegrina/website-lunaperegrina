import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const resumeTemplatePath = path.join(root, "src/lib/latex/resume.tex");
const curriculoTemplatePath = path.join(root, "src/lib/latex/curriculo.tex");
const cvDataPath = path.join(root, "src/data/cv-data.json");
const workDir = path.join(root, "src/content/work");
const educationDir = path.join(root, "src/content/education");
const leadershipDir = path.join(root, "src/content/leadership");
const skillsDir = path.join(root, "src/content/skills");
const outBaseDir = path.join(root, ".tmp/latex");

const pdfVariants = [
  {
    id: "en",
    templatePath: resumeTemplatePath,
    outputPdfPath: path.join(root, "public/luna-peregrina-cv-en.pdf"),
    dateLocale: "en-US",
    presentLabel: "Present",
    sections: {
      leadership: "Leadership Activities",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
    },
  },
  {
    id: "pt",
    templatePath: curriculoTemplatePath,
    outputPdfPath: path.join(root, "public/luna-peregrina-cv-pt.pdf"),
    dateLocale: "pt-BR",
    presentLabel: "Atual",
    sections: {
      leadership: "Atividades de Liderança",
      experience: "Experiência",
      skills: "Habilidades",
      education: "Educação",
    },
  },
];

const defaultCvSections = {
  leadership: true,
  experience: true,
  skills: true,
  education: true,
};

function hasCommand(command) {
  const result = spawnSync("sh", ["-c", `command -v ${command}`], { stdio: "pipe" });
  return result.status === 0;
}

function parseScalar(raw) {
  const value = raw.trim();
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}

function parseFrontmatter(fileContent) {
  const match = fileContent.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const lines = match[1].split("\n");
  const data = {};
  let currentArrayKey = null;

  for (const line of lines) {
    if (!line.trim()) continue;
    const arrMatch = line.match(/^\s*-\s+(.*)$/);
    if (arrMatch && currentArrayKey) {
      if (!Array.isArray(data[currentArrayKey])) data[currentArrayKey] = [];
      data[currentArrayKey].push(parseScalar(arrMatch[1]));
      continue;
    }

    const kvMatch = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (!kvMatch) continue;

    const key = kvMatch[1];
    const rawValue = kvMatch[2];
    if (rawValue === "") {
      data[key] = [];
      currentArrayKey = key;
    } else {
      data[key] = parseScalar(rawValue);
      currentArrayKey = null;
    }
  }

  return data;
}

function readCollection(dir) {
  if (!existsSync(dir)) return [];

  const walk = (currentDir, relativePrefix = "") =>
    readdirSync(currentDir, { withFileTypes: true }).flatMap((entry) => {
      const fullPath = path.join(currentDir, entry.name);
      const relativePath = relativePrefix ? path.join(relativePrefix, entry.name) : entry.name;

      if (entry.isDirectory()) {
        return walk(fullPath, relativePath);
      }

      if (!entry.name.endsWith(".md") && !entry.name.endsWith(".mdx")) {
        return [];
      }

      const content = readFileSync(fullPath, "utf8");
      return [{ file: relativePath, data: parseFrontmatter(content) }];
    });

  return walk(dir);
}

function parseDateValue(value) {
  if (!value) return null;
  const text = String(value).trim();
  if (/^current$/i.test(text) || /^present$/i.test(text) || /^atual$/i.test(text)) return null;
  const d = new Date(text);
  return Number.isNaN(d.getTime()) ? null : d;
}

function compareByStartDateDesc(a, b) {
  const aDate = parseDateValue(a.dateStart);
  const bDate = parseDateValue(b.dateStart);
  const aMs = aDate ? aDate.getTime() : 0;
  const bMs = bDate ? bDate.getTime() : 0;
  return bMs - aMs;
}

function formatMonthYear(value, variant) {
  const date = parseDateValue(value);
  if (!date) return variant.presentLabel;
  return new Intl.DateTimeFormat(variant.dateLocale, { month: "short", year: "numeric" }).format(date);
}

function formatDateRange(start, end, variant) {
  return `${formatMonthYear(start, variant)} - ${formatMonthYear(end, variant)}`;
}

function escapeLatex(value) {
  const str = String(value ?? "");
  return str
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/&/g, "\\&")
    .replace(/%/g, "\\%")
    .replace(/\$/g, "\\$")
    .replace(/#/g, "\\#")
    .replace(/_/g, "\\_")
    .replace(/{/g, "\\{")
    .replace(/}/g, "\\}")
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}");
}

function toTexorpdf(company, location) {
  return `\\subsection*{\\texorpdfstring{\n        \\textbf{${escapeLatex(company)}} \\hfill ${escapeLatex(location)}\n    }{\n        ${escapeLatex(company)} -- ${escapeLatex(location)}\n    }}`;
}

function normalizeCvSections(rawSections) {
  if (!rawSections || typeof rawSections !== "object") {
    return { ...defaultCvSections };
  }

  return {
    leadership: typeof rawSections.leadership === "boolean" ? rawSections.leadership : defaultCvSections.leadership,
    experience: typeof rawSections.experience === "boolean" ? rawSections.experience : defaultCvSections.experience,
    skills: typeof rawSections.skills === "boolean" ? rawSections.skills : defaultCvSections.skills,
    education: typeof rawSections.education === "boolean" ? rawSections.education : defaultCvSections.education,
  };
}

function getProfileFromCvDataJson(strict) {
  const fallback = {
    profile: {
      name: "Astro Lunar",
      email: "your.email@example.com",
      location: "Your City, Your Country",
      linkedin: "https://www.linkedin.com/in/yourprofile",
      github: "https://github.com/yourprofile",
    },
    cvSections: { ...defaultCvSections },
  };

  const failOrFallback = (message) => {
    if (strict) {
      throw new Error(message);
    }
    console.warn(`[resume] ${message}`);
    return fallback;
  };

  if (!existsSync(cvDataPath)) {
    return failOrFallback(`CV data file not found at ${cvDataPath}.`);
  }

  let parsed;
  try {
    parsed = JSON.parse(readFileSync(cvDataPath, "utf8"));
  } catch {
    return failOrFallback(`Invalid JSON in ${cvDataPath}.`);
  }

  const profile = parsed?.PROFILE;
  if (!profile || typeof profile !== "object") {
    return failOrFallback(`Missing PROFILE object in ${cvDataPath}.`);
  }

  const socials = profile.SOCIALS && typeof profile.SOCIALS === "object" ? profile.SOCIALS : {};
  const linkedinValue = profile.LINKEDIN ?? socials.LINKEDIN;
  const githubValue = profile.GITHUB ?? socials.GITHUB;
  const requiredFields = [
    { label: "PROFILE.NAME", value: profile.NAME },
    { label: "PROFILE.EMAIL", value: profile.EMAIL },
    { label: "PROFILE.LOCATION", value: profile.LOCATION },
    { label: "PROFILE.SOCIALS.LINKEDIN (or PROFILE.LINKEDIN)", value: linkedinValue },
    { label: "PROFILE.SOCIALS.GITHUB (or PROFILE.GITHUB)", value: githubValue },
  ];

  const missing = requiredFields.filter(({ value }) => typeof value !== "string" || value.trim() === "");

  if (missing.length > 0) {
    return failOrFallback(
      `Missing required CV_DATA fields in ${cvDataPath}: ${missing.map(({ label }) => label).join(", ")}.`,
    );
  }

  const rawSections = parsed?.CV_SECTIONS ?? parsed?.["cv-sections"] ?? parsed?.cvSections;

  return {
    profile: {
      name: profile.NAME,
      email: profile.EMAIL,
      location: profile.LOCATION,
      linkedin: linkedinValue,
      github: githubValue,
    },
    cvSections: normalizeCvSections(rawSections),
  };
}

function normalizeLeadershipEntries(entries, strict) {
  const failOrEmpty = (message) => {
    if (strict) {
      throw new Error(message);
    }
    console.warn(`[resume] ${message}`);
    return [];
  };

  const invalidIndex = entries.findIndex((entry) => {
    if (!entry || typeof entry !== "object") return true;
    const required = ["organization", "location", "role", "dateStart", "dateEnd"];
    const hasInvalidString = required.some((field) => typeof entry[field] !== "string" || entry[field].trim() === "");
    if (hasInvalidString) return true;
    if (!Array.isArray(entry.highlights) || entry.highlights.some((item) => typeof item !== "string")) return true;
    if (!parseDateValue(entry.dateStart)) return true;
    const endValue = String(entry.dateEnd).trim();
    if (!/^present$/i.test(endValue) && !/^current$/i.test(endValue) && !/^atual$/i.test(endValue) && !parseDateValue(endValue)) return true;
    return false;
  });

  if (invalidIndex !== -1) {
    return failOrEmpty(
      `Invalid leadership entry at src/content/leadership index ${invalidIndex}. Expected { organization, location, role, dateStart, dateEnd, highlights[] }.`,
    );
  }

  return entries;
}

function normalizeSkillsEntries(entries, strict) {
  const failOrEmpty = (message) => {
    if (strict) {
      throw new Error(message);
    }
    console.warn(`[resume] ${message}`);
    return [];
  };

  const invalidIndex = entries.findIndex((entry) => {
    if (!entry || typeof entry !== "object") return true;
    if (typeof entry.category !== "string" || entry.category.trim() === "") return true;
    if (!Array.isArray(entry.items) || entry.items.some((item) => typeof item !== "string" || item.trim() === "")) return true;
    return false;
  });

  if (invalidIndex !== -1) {
    return failOrEmpty(
      `Invalid skills entry at src/content/skills index ${invalidIndex}. Expected { category, items[] }.`,
    );
  }

  return entries;
}

function buildExperienceSection(entries, variant) {
  return entries
    .map((entry) => {
      const title = toTexorpdf(entry.company, entry.location);
      const subtitle = `\\textit{${escapeLatex(entry.role)} \\hfill ${escapeLatex(formatDateRange(entry.dateStart, entry.dateEnd, variant))}}`;
      const highlights = Array.isArray(entry.highlights) ? entry.highlights : [];
      const bullets = highlights
        .map((item) => `        \\item ${escapeLatex(item)}`)
        .join("\n");

      return `${title}\n${subtitle}\n    \\begin{itemize}\n${bullets}\n    \\end{itemize}`;
    })
    .join("\n\n");
}

function buildEducationSection(entries, variant) {
  return entries
    .map((entry) => {
      const title = toTexorpdf(entry.institution, entry.location);
      const subtitle = `\\textit{${escapeLatex(entry.degree)} \\hfill ${escapeLatex(formatDateRange(entry.dateStart, entry.dateEnd, variant))}}`;
      const highlights = Array.isArray(entry.highlights) ? entry.highlights : [];
      const bullets = highlights.length
        ? `\n    \\begin{itemize}\n${highlights.map((item) => `        \\item ${escapeLatex(item)}`).join("\n")}\n    \\end{itemize}`
        : "";

      return `${title}\n${subtitle}${bullets}`;
    })
    .join("\n\n");
}

function buildLeadershipSection(entries, variant) {
  return entries
    .map((entry) => {
      const title = toTexorpdf(entry.organization, entry.location);
      const subtitle = `\\textit{${escapeLatex(entry.role)} \\hfill ${escapeLatex(formatDateRange(entry.dateStart, entry.dateEnd, variant))}}`;
      const highlights = Array.isArray(entry.highlights) ? entry.highlights : [];
      const bullets = highlights
        .map((item) => `        \\item ${escapeLatex(item)}`)
        .join("\n");

      return `${title}\n${subtitle}\n    \\begin{itemize}\n${bullets}\n    \\end{itemize}`;
    })
    .join("\n\n");
}

function buildSkillsSection(entries) {
  if (!entries.length) return "";

  const items = entries
    .map((entry) => {
      const list = entry.items.map((value) => escapeLatex(value)).join(", ");
      const category = entry.category;
      return `    \\item \\textbf{${escapeLatex(category)}:} ${list}`;
    })
    .join("\n");

  return `\\begin{itemize}\n${items}\n\\end{itemize}`;
}

function buildDocument(strict, variant) {
  if (!existsSync(variant.templatePath)) {
    throw new Error(`LaTeX template not found at ${variant.templatePath}`);
  }

  const template = readFileSync(variant.templatePath, "utf8");
  const beginMarker = "\\begin{document}";
  const preamble = template.includes(beginMarker)
    ? template.slice(0, template.indexOf(beginMarker))
    : template;

  const { profile, cvSections } = getProfileFromCvDataJson(strict);
  const workEntries = readCollection(workDir)
    .filter((item) => item.file.startsWith(`${variant.id}/`))
    .map((item) => item.data)
    .sort(compareByStartDateDesc);
  const educationEntries = readCollection(educationDir)
    .map((item) => item.data)
    .sort(compareByStartDateDesc);
  const leadershipEntries = normalizeLeadershipEntries(
    readCollection(leadershipDir)
      .map((item) => item.data)
      .sort(compareByStartDateDesc),
    strict,
  );
  const skillsEntries = normalizeSkillsEntries(
    readCollection(skillsDir).map((item) => item.data),
    strict,
  );

  const experienceTex = buildExperienceSection(workEntries, variant);
  const educationTex = buildEducationSection(educationEntries, variant);
  const leadershipTex = buildLeadershipSection(leadershipEntries, variant);
  const skillsTex = buildSkillsSection(skillsEntries);

  const safeName = escapeLatex(profile.name);
  const safeEmail = escapeLatex(profile.email);
  const safeLinkedinUrl = escapeLatex(profile.linkedin);
  const safeGithubUrl = escapeLatex(profile.github);
  const safeLinkedinLabel = escapeLatex(profile.linkedin.replace(/^https?:\/\//, ""));
  const safeGithubLabel = escapeLatex(profile.github.replace(/^https?:\/\//, ""));

  const patchedPreamble = preamble
    .replace(/pdftitle=\{[^}]*\}/, `pdftitle={CV ${safeName}}`)
    .replace(/pdfauthor=\{[^}]*\}/, `pdfauthor={${safeName}}`);

  const renderedSections = [
    cvSections.leadership ? `\\section{${variant.sections.leadership}}\n${leadershipTex}` : "",
    cvSections.experience ? `\\section{${variant.sections.experience}}\n${experienceTex}` : "",
    cvSections.skills ? `\\section{${variant.sections.skills}}\n${skillsTex}` : "",
    cvSections.education ? `\\section{${variant.sections.education}}\n${educationTex}` : "",
  ]
    .filter(Boolean)
    .join("\n\n");

  return `${patchedPreamble}
\\begin{document}

\\begin{center}
    {\\LARGE \\textbf{${safeName}}}
    \\noindent\\rule{\\textwidth}{0.4pt}
    ${escapeLatex(profile.location)}
    {\\textbullet}
    Email: \\href{mailto:${safeEmail}}{${safeEmail}}
    {\\textbullet}
    \\href{${safeLinkedinUrl}}{${safeLinkedinLabel}}
    {\\textbullet}
    \\href{${safeGithubUrl}}{${safeGithubLabel}}
\\end{center}

${renderedSections}

\\end{document}
`;
}

function compileLatex(compiler, outDir, texPath) {
  return compiler === "pdflatex"
    ? spawnSync(
      "pdflatex",
      ["-interaction=nonstopmode", "-halt-on-error", "-output-directory", outDir, texPath],
      { stdio: "pipe", encoding: "utf8" },
    )
    : spawnSync("tectonic", ["--outdir", outDir, texPath], { stdio: "pipe", encoding: "utf8" });
}

function generateVariantPdf(variant, compiler, strict) {
  const outDir = path.join(outBaseDir, variant.id);
  const outTexPath = path.join(outDir, `${variant.id}.generated.tex`);
  const outPdfPath = path.join(outDir, `${variant.id}.generated.pdf`);

  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });

  const tex = buildDocument(strict, variant);
  writeFileSync(outTexPath, tex, "utf8");

  const compile = compileLatex(compiler, outDir, outTexPath);

  if (compile.status !== 0) {
    throw new Error(`${compiler} failed for ${variant.id}:\n${compile.stdout}\n${compile.stderr}`);
  }

  if (!existsSync(outPdfPath)) {
    throw new Error(`Expected PDF output not found at ${outPdfPath}`);
  }

  mkdirSync(path.dirname(variant.outputPdfPath), { recursive: true });
  copyFileSync(outPdfPath, variant.outputPdfPath);
  console.log(`Generated ${variant.outputPdfPath}`);
}

function main() {
  const strict = process.env.RESUME_PDF_STRICT === "1";
  const compiler = hasCommand("pdflatex") ? "pdflatex" : hasCommand("tectonic") ? "tectonic" : null;
  if (!compiler) {
    const message =
      "Missing LaTeX compiler in PATH. Install pdflatex (MacTeX/TeX Live) or tectonic to generate localized resume PDFs.";
    if (strict) {
      throw new Error(message);
    }
    console.warn(`[resume] ${message}`);
    console.warn("[resume] Skipping PDF generation (set RESUME_PDF_STRICT=1 to fail build instead).");
    return;
  }

  rmSync(outBaseDir, { recursive: true, force: true });
  mkdirSync(outBaseDir, { recursive: true });

  for (const variant of pdfVariants) {
    generateVariantPdf(variant, compiler, strict);
  }
}

main();
