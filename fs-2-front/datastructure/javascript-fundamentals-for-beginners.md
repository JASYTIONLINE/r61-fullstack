---
title: "Reading Notes — Strings, Arrays, Objects, and Scope"
description: "Synthesized study notes combining conceptual clarity, code examples, exercises, and embedded teaching songs."
tags: [cmpa3302, javascript, data-structures, strings, arrays, objects, scope]
draft: false
date: "2025-10-02"
permalink: "/kb/js-data-structures/"
enableToc: true



---

# Reading Notes — Strings, Arrays, Objects, and Scope

## BLUF (Bottom Line Up Front)
JavaScript works with three primary data structures — **strings**, **arrays**, and **objects**. Each has its own rules, uses, and pitfalls. **Scope** governs them all, deciding where data can be accessed and changed. Mastery comes not only from knowing what each is, but also what they’re *not* — to avoid confusion and apply the right structure for the right job.

---

## Strings

### What They Are
- Sequences of characters tied together, like beads on a necklace.  
- Primitive data type in JS, immutable (cannot change characters directly).  
- Indexed like arrays, starting at 0.  

```javascript
let greeting = "Hello, world!";
console.log(greeting[0]); // "H"
console.log("Length:", greeting.length);
console.log("Uppercase:", greeting.toUpperCase());
console.log("Replace:", greeting.replace("world", "JavaScript"));
