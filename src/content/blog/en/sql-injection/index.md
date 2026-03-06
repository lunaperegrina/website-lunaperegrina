---
title: "SQL Injection: Why That Car Banner Was Brilliant"
description: "Understand how SQL Injection works, why 'DROP DATABASE' is more than a joke, and how to prevent this basic security flaw."
date: "Jun 27 2023"
---

An image of a car with a banner saying **"DROP DATABASE"** recently went viral. It might look like just a tech joke, but there is a very specific reason why it is interesting.

That expression is related to a vulnerability called **SQL Injection**: a security flaw that still exists in many systems.

---

## What is SQL?

SQL means **Structured Query Language**.
It is the language used to run queries against databases.

For example, when you log in to a website, you send:

* Email
* Password

The system queries the database to check whether a matching record exists. Something like:

```sql
SELECT * FROM users 
WHERE email = 'typed_email' 
AND password = 'typed_password';
```

If a user with that data exists, access is granted.

---

## Where the problem begins

Everything depends on how the code was implemented.

If the developer builds the query by directly concatenating text with user input, like:

```js
query = "SELECT * FROM users WHERE email = '" + email + "' AND password = '" + password + "'";
```

the system may become vulnerable to SQL Injection.

---

## What is SQL Injection?

SQL Injection happens when someone sends a value that, instead of being treated as plain text, gets interpreted as SQL commands.

For example, if someone enters this in the password field:

```
' OR 1=1 --
```

The query might become:

```sql
SELECT * FROM users 
WHERE email = 'anything' 
AND password = '' OR 1=1 --';
```

Since `1=1` is always true, the condition becomes valid and can allow unauthorized access.

---

## What about the "DROP DATABASE" command?

`DROP DATABASE` is an SQL command that deletes an entire database.

Now imagine a system that:

* Reads license plates automatically.
* Uses that plate value inside an SQL query.
* Does not protect against SQL Injection.

If someone uses a plate value like:

```
ABC123'; DROP DATABASE system; --
```

and the system is vulnerable, that command could run and delete the database.

---

## How to prevent it

SQL Injection is prevented by basic secure development practices:

* Use **prepared statements**
* Use **parameterized queries**
* Never concatenate user input directly into SQL queries
* Use ORMs correctly

These measures prevent user data from being interpreted as executable commands.

---

That car banner may look like a simple technical joke, but it is also a clear reminder: small implementation mistakes can cause serious damage. Basic security is not optional.
