"use client";
import { useRef } from "react";
import { useFollowPointer } from "@/utils/use-follow-pointer";
import { motion } from "framer-motion";

export const MotionDiv = motion.div;


export function LittleBall() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return <motion.div ref={ref} className="box" style={{ x, y }} />;
}

