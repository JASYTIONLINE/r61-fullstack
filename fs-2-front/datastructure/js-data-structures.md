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
```

### What They’re For
- Representing text (names, labels, messages).  
- String methods let you slice, split, join, and transform text.  

### What They’re Not
- Not arrays (arrays are mutable, strings are immutable).  
- Not numbers (e.g. "123" is text, not an integer).  
- Not objects (strings don’t have key–value storage).  

### Common Confusions
- **Strings vs Arrays**: Both indexable, but only arrays can be changed in place.  
- **Strings vs Numbers**: `"123" + 1 = "1231"` (string concatenation).  
- **Strings vs Objects**: Strings are primitive, objects are flexible and mutable.  

### Mental Model
Beads on a string; Scrabble tiles lined up — you can read their order, but not swap them directly.

🎵 **Song: Strings**  
<audio controls>
  <source src="/assets/media/mp3/strings.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## Arrays

### What They Are
- Ordered lists of values, index starts at 0.  
- Mutable (add, remove, change items).  
- Good for sequences and bulk operations.  

```javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"

fruits.push("date");
fruits[1] = "blueberry";

for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit:", fruits[i]);
}
```

### What They’re For
- Managing ordered data: to-do lists, shopping carts, scores.  
- Looping, filtering, mapping, reducing.  

```javascript
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(n => n * 2);
let evens = numbers.filter(n => n % 2 === 0);
let sum = numbers.reduce((total, n) => total + n, 0);
```

### What They’re Not
- Not objects (don’t use keys, use index numbers).  
- Not strings (arrays are mutable).  

### Nested Arrays (Matrix Example)
```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[2][2]); // 9
```

### Applied Exercise
**Shopping List Manager**  
- Add, remove, and display items.  
- Check if an item is in the list.  

🎵 **Song: Arrays**  
<audio controls>
  <source src="/assets/media/mp3/arrays.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## Objects

### What They Are
- Collections of key–value pairs.  
- Accessed by name, not by position.  
- Values can include arrays, functions, or other objects.  

```javascript
let person = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log("Hi, I'm " + this.name);
  }
};
console.log(person.name);
person.greet();
```

### What They’re For
- Modeling real-world entities (user profiles, cars).  
- Adding methods for actions.  

```javascript
person.city = "New York";  // add
person.age = 26;           // update
delete person.city;        // remove
```

### What They’re Not
- Not arrays (arrays are ordered, objects are name-based).  
- Not JSON (JSON is just text; must be parsed to an object).  

### Common Confusions
- **Objects vs Arrays**: arrays = indexed; objects = keyed.  
- **Objects vs JSON**: JSON looks like objects but is a data format.  

### Mental Model
Like a dictionary or a filing cabinet — drawers labeled with keys, holding values.  

### Applied Exercise
**Car Inventory Manager**  
- Add new cars with properties (make, model, year, price).  
- Search or update by criteria.  

🎵 **Song: Objects**  
<audio controls>
  <source src="/assets/media/mp3/objects.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## Scope

### What It Is
- The “fence” around variables — decides where they can be seen/used.  

Types:  
- **Global scope** → available everywhere.  
- **Local/function scope** → only inside a function.  
- **Block scope** → only inside `{ }`.  

```javascript
let globalVar = "I am global";

function showVar() {
  let localVar = "I am local";
  if (true) {
    let blockVar = "I am block-scoped";
    console.log(globalVar, localVar, blockVar);
  }
}
showVar();
```

### How It Affects Data Types
- **Arrays**: live where declared. A global array is shared, a local one is private.  
- **Strings**: scope controls visibility, immutability still applies.  
- **Objects**: mutable across scope — if shared, changes propagate everywhere.  

### What It’s Not
- Scope doesn’t change the type’s rules — it only controls visibility.  

### Mental Model
Scope is the stage; arrays, strings, and objects are the actors. The fence decides who gets on stage.  

🎵 **Song: Scope**  
<audio controls>
  <source src="/assets/media/mp3/scope.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## Quick Checks
- Can I explain how strings differ from arrays?  
- Can I show that arrays are mutable but strings are not?  
- Can I add, update, and delete properties on an object?  
- Can I explain scope in plain English and show each type?  
- Can I tie scope back to arrays, strings, and objects?  

---

## References
- *JavaScript Fundamentals for Beginners*【43†source】  
- *Synthesized Reading Notes Policy*【14†source】  
- *Authorized Reference Sources Standard*【15†source】  
- *Front Matter Guide*【18†source】  

---

Return to the [[repositories/r00-jasytionline-pmo/0-dais/01-kms/index]]
