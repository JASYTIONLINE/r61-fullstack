---
title: Tree Dump Script — Line-by-Line Build and Explanation
```

# Tree Dump Script — Line-by-Line Build and Explanation

This is a **Level 2 learning document** in the Bloom’s taxonomy progression.

You’ll build a working script, one step at a time, while learning **what each part does**.  
When you're ready for the deeper *how/why*, see `[[tree-dump-explained.md]]`.

---

## Step 1: Load required Node modules

We'll begin by importing two built-in modules:

```js
const fs = require('fs');
const path = require('path');
````

* `fs` is the **File System** module — lets us read/write files and folders.
* `path` helps us safely build folder paths like `folder/subfolder/file.txt`.

---

## Step 2: Define where to start scanning

We’ll start scanning in **the folder where this script is run**:

```js
const startDir = process.cwd();
```

* `process.cwd()` gives us the *current working directory* as a full path.

---

## Step 3: Create the recursive function to walk the directory

Here we define a function that will:

* Look inside a folder
* Add each file/folder name to the output
* Repeat for each subfolder

```js
function walkDirectory(dir, prefix = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const lines = [];

  for (const entry of entries) {
    if (entry.name === '.git') continue;

    const fullPath = path.join(dir, entry.name);
    lines.push(prefix + entry.name);

    if (entry.isDirectory()) {
      lines.push(walkDirectory(fullPath, prefix + '  '));
    }
  }

  return lines.join('\n');
}
```

### What this function does:

* `dir` is the folder to scan
* `prefix` is used to indent each level in the tree
* `entries` is a list of all files/folders in the current folder
* We loop through each `entry`
* If it's `.git`, we skip it
* We add the name to our output list
* If it's a folder, we recursively scan it too
* Finally, we return a full string of everything found

---

## Step 4: Write the result to a file

This block saves the result as `file-tree.txt`:

```js
const outputPath = path.join(process.cwd(), 'file-tree.txt');
const treeText = walkDirectory(startDir);
fs.writeFileSync(outputPath, treeText, 'utf8');
console.log(`File tree written to ${outputPath}`);
```

### What it does:

* Builds the full output file path using `path.join`
* Calls your `walkDirectory` function with the starting folder
* Writes the result to disk as UTF-8 text
* Prints a message showing where the file is

---

## Final Result

You now have a complete working script.

To run it:

1. Save the full code into a file called `tree-dump.js`
2. Put that file in any folder
3. Open a terminal in that folder
4. Run:

```bash
node tree-dump.js
```

You’ll get a file called `file-tree.txt` showing all contents of that folder.

---

##  Next Level

To understand every keyword and logic detail:

Open `[[tree-dump-explained.md]]`

For definitions of terms like `const`, `require`, `function`, etc.:

See: `[[glossary#const]]`, `[[glossary#require]]`, `[[glossary#function]]`, `[[glossary#return]]`

```

---