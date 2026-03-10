---
title: "The Region That Holds Up Much of the Internet (and Has Taken Half the World Down)"
description: "Let's talk about the region that, in practice, carries a huge portion of the internet on its back and has already left people without LoL, iFood, and even banking services at times: AWS us-east-1."
date: "Jun 24 2023"
---

Today we are going to talk about a region that, in practice, carries **a huge part of the internet on its back**, and that has already left many people without **LoL, iFood, and even banking services** at times.

It is: **AWS `us-east-1`**.

If you have never heard of this, you are probably still using something that depends on it.

## What is AWS?

**AWS (Amazon Web Services)** is Amazon's cloud computing platform.

In simple terms, it is where **many websites, apps, and services host their servers**.

Instead of buying and maintaining physical servers, companies rent infrastructure from AWS. This allows them to scale quickly, pay for usage, and run global services.

Today, **a huge part of the internet runs on AWS**.

## What are "regions"?

AWS is divided into **geographic regions**.
Each region has multiple **data centers** (called *Availability Zones*).

Examples of regions:

- `us-east-1` - Northern Virginia (USA)
- `us-east-2` - Ohio (USA)
- `eu-west-1` - Ireland
- `sa-east-1` - Sao Paulo

These regions exist to:

- reduce latency
- increase availability
- provide redundancy

In theory, applications should be distributed across regions.

In practice, that is not always what happens.

## The famous `us-east-1`

The **`us-east-1` (N. Virginia)** region is one of AWS's oldest regions.

Because of that, many companies started by hosting everything there and **never migrated or properly distributed afterward**.

Result:
an absurd number of important services depend on this single region.

## What happens when something fails there?

If an application is **100% dependent on a single region**, any failure there can cause a cascading effect.

That is exactly what has happened a few times.

When `us-east-1` had major incidents, many services became unavailable at the same time, including:

- online games
- delivery apps
- financial services
- APIs used by other systems

When central infrastructure fails, **the entire ecosystem that depends on it feels the impact**.

## But are there not other regions?

There are.

And that is exactly the point.

AWS provides multiple regions so systems can be designed with:

- **redundancy**
- **failover**
- **geographic distribution**

Still, many architectures end up concentrated in a single region due to factors like:

- initial simplicity
- cost
- technical legacy
- older architectural decisions

That creates **single points of failure**.

## The lesson here

These incidents usually remind the industry of a core distributed-systems principle:

> **If something is critical, it cannot depend on a single place.**

High availability requires:

- multiple regions
- data replication
- failover strategies
- resilience testing

Without this, a localized problem can become **a chain-reaction digital outage**.

## Conclusion

A large part of the modern internet depends on shared infrastructure.

Platforms like AWS made it possible to scale global services, but they also created **concentrated dependencies**.

And sometimes a problem at one single point is enough for millions of users to notice something simple:

the internet looks distributed,
but often **it is more centralized than we think**.
