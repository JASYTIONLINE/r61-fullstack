// create-glossary.js

// STEP 1: We use the 'fs' module to interact with the file system (reading/writing files)
const fs = require("fs");

// STEP 2: This is our glossary data — a small sample to start with.
// Later we'll load this from a separate JSON file.
const glossary = {
  "Array": {
    letter: "A",
    definition: "Stores multiple values in a single variable.",
    explanation: "Like a row of mailboxes, each with a number. You open box 0 to get the first item.",
    example: "const items = ['pen', 'book', 'phone'];\nconsole.log(items[1]); // 'book'"
  },
  "Boolean": {
    letter: "B",
    definition: "A data type that can be true or false.",
    explanation: "Like a light switch — it’s either on or off.",
    example: "let isOn = true;\nconsole.log(isOn); // true"
  }
};

// STEP 3: Build the glossary markdown content line by line
let markdown = "";

// Add front matter used by markdown tools like static site generators (optional)
markdown += `---
title: Fullstack Glossary
description: A-Z glossary of HTML/CSS/JavaScript terms for beginners.
tags:
  - glossary
  - javascript
  - beginner
draft: false
date: 2025-10-01
enableToc: true
---

# Fullstack Glossary

[[#a|A]] • [[#b|B]] • [[#c|C]] • [[#d|D]] • [[#e|E]] • [[#f|F]] • [[#g|G]] • [[#h|H]] • [[#i|I]] • [[#j|J]] • [[#k|K]] • [[#l|L]] • [[#m|M]] • [[#n|N]] • [[#o|O]] • [[#p|P]] • [[#q|Q]] • [[#r|R]] • [[#s|S]] • [[#t|T]] • [[#u|U]] • [[#v|V]] • [[#w|W]] • [[#x|X]] • [[#y|Y]] • [[#z|Z]]

`;

// STEP 4: Group terms by starting letter (A-Z)
const sections = {};

for (const term in glossary) {
  const letter = glossary[term].letter.toUpperCase();
  if (!sections[letter]) sections[letter] = [];
  sections[letter].push({ term, ...glossary[term] });
}

// STEP 5: For each letter, add a markdown section
Object.keys(sections)
  .sort()
  .forEach(letter => {
    markdown += `\n## ${letter}\n[#Fullstack Glossary|Top]\n\n`;
    sections[letter].forEach(entry => {
      markdown += `### ${entry.term}\n\n`;
      markdown += `**Definition:**  \n${entry.definition}\n\n`;
      markdown += `**Real-world explanation:**  \n${entry.explanation}\n\n`;
      if (entry.example) {
        markdown += `**Example:**\n\`\`\`javascript\n${entry.example}\n\`\`\`\n`;
      }
      markdown += `\n---\n\n`;
    });
  });

// STEP 6: Write the final markdown string to a file
fs.writeFileSync("06-glossary-fs.md", markdown, "utf8");

// STEP 7: Let the user know the process is complete
console.log("✅ Glossary generated successfully: 06-glossary-fs.md");
