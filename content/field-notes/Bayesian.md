---
title: "Bayesian Probability"
date: "2026-07-08"
category: "Probability and Stats"
type: "Study Work"
excerpt: "A review sheet for Bayesian on my understanding"
---

## Probability intuition sheet

**1. Prior → evidence → posterior**
Start with an estimate, receive evidence, judge its strength, then update.

**2. Evidence quality matters**
Ask whether the evidence is relevant, reliable, comparable, and independent.

**3. Probability is not impact**
A 5% chance of losing 35% of revenue combines:

$$
0.05 \times 0.35 = 1.75\%
$$

But expected loss does not fully describe the severe downside scenario.

**4. Conditional probability changes the sample space**

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}
$$

The event after the bar determines the group you focus on and therefore the denominator.

**5. Do not reverse conditions**

$$
P(A\mid B)\neq P(B\mid A)
$$

In our example:

$$
P(\text{high IRR}\mid\text{successful manager})=60\%
$$

while:

$$
P(\text{successful manager}\mid\text{high IRR})=37.5\%
$$
