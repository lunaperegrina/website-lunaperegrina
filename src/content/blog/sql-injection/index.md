---
title: "SQL Injection: por que aquela faixa no carro foi genial"
description: "Entenda como funciona SQL Injection, por que 'DROP DATABASE' não é só uma piada e como evitar essa falha básica de segurança."
date: "Jun 27 2023"
---

# Por que colocaram uma faixa estranha no carro — e por que isso foi genial?

Recentemente viralizou a imagem de um carro com uma faixa contendo a expressão **“DROP DATABASE”**. Pode parecer apenas uma piada técnica, mas existe um motivo muito específico para isso ser interessante.

Essa expressão está relacionada a uma vulnerabilidade chamada **SQL Injection** — uma falha de segurança que ainda existe em muitos sistemas.

---

## O que é SQL?

SQL significa **Structured Query Language** (Linguagem de Consulta Estruturada).
É a linguagem usada para fazer consultas em bancos de dados.

Por exemplo, quando você faz login em um site, envia:

* Email
* Senha

O sistema consulta o banco de dados para verificar se existe um registro correspondente. Algo como:

```sql
SELECT * FROM users 
WHERE email = 'email_digitado' 
AND password = 'senha_digitada';
```

Se existir um usuário com esses dados, o acesso é liberado.

---

## Onde surge o problema

Tudo depende de como o código foi implementado.

Se o desenvolvedor montar a consulta concatenando texto diretamente com os dados enviados pelo usuário, como:

```js
query = "SELECT * FROM users WHERE email = '" + email + "' AND password = '" + password + "'";
```

o sistema pode ficar vulnerável a SQL Injection.

---

## O que é SQL Injection?

SQL Injection acontece quando alguém envia um valor que, em vez de ser tratado apenas como texto, passa a ser interpretado como comando SQL.

Por exemplo, se no campo de senha alguém digitar:

```
' OR 1=1 --
```

A consulta pode se transformar em:

```sql
SELECT * FROM users 
WHERE email = 'qualquercoisa' 
AND password = '' OR 1=1 --';
```

Como `1=1` é sempre verdadeiro, a condição passa a ser válida, permitindo acesso indevido.

---

## E o comando “DROP DATABASE”?

`DROP DATABASE` é um comando SQL que apaga um banco de dados inteiro.

Agora imagine um sistema que:

* Lê automaticamente uma placa de carro.
* Usa o valor da placa em uma consulta SQL.
* Não protege contra SQL Injection.

Se alguém inserir na placa algo como:

```
ABC123'; DROP DATABASE sistema; --
```

e o sistema estiver vulnerável, o comando pode ser executado, resultando na exclusão do banco de dados.

---

## Como evitar isso

SQL Injection é prevenido com boas práticas básicas de desenvolvimento:

* Uso de **prepared statements**
* Uso de **queries parametrizadas**
* Nunca concatenar diretamente entrada do usuário em consultas SQL
* Utilizar ORMs configurados corretamente

Essas medidas impedem que dados enviados pelo usuário sejam interpretados como comandos.

---

A faixa no carro pode parecer apenas uma provocação técnica, mas serve como um lembrete claro: falhas simples de implementação podem gerar consequências graves. Segurança básica não é opcional.
