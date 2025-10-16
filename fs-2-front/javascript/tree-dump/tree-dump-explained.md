# Tree Dump Script — Full Technical Decoder

This is a **line-by-line**, **keyword-by-keyword**, and **construct-by-construct** breakdown of the file tree–dumping script.

This document is the **Level 4 instructional artifact** in your Bloom’s learning sequence.

---

## Group: Module Loading — File System

### Line: `const fs = require('fs');`

- `const` is a JavaScript **keyword** used to declare a constant.  
  - Once `fs` is assigned, it **cannot be reassigned** to another value.
  - It **can still be mutated** if it holds an object — in this case, a module namespace.

- `require('fs')` is a **Node.js-specific CommonJS function**.
  - It loads the built-in `'fs'` module — short for **File System**.
  - This module gives access to functions like `readFileSync`, `writeFileSync`, `readdirSync`, etc.
  - Returns an **object**, not a class or function — this object contains named functions.

- `fs` is the **user-defined variable name** bound to the returned object.
  - From here forward, all file system operations in the script will be accessed via this `fs` object.

#### Glossary references:
- [[glossary#const]]
- [[glossary#require]]
- [[glossary#module]]
- [[glossary#fs]]

---

## Group: Module Loading — Path Utilities

### Line: `const path = require('path');`

- Follows the same `const = require()` pattern.
- `require('path')` loads Node’s built-in **path module**, which includes OS-agnostic utilities for handling file paths.
- Functions inside include `join`, `resolve`, `basename`, `dirname`, etc.
- `path.join()` is used later in the script to safely concatenate file paths in a cross-platform way.

#### Glossary:
- [[glossary#path]]
- [[glossary#require]]
- [[glossary#join]]

---

## Group: Define Current Working Directory

### Line: `const startDir = process.cwd();`

- `process` is a global object in Node.js — no need to `require()` it.
- `.cwd()` stands for **Current Working Directory**.
  - It returns the absolute path of the folder where Node was called.
  - This is dynamically determined at runtime.
- The returned string is assigned to `startDir`, which becomes the root of the file tree walk.

#### Glossary:
- [[glossary#process]]
- [[glossary#cwd]]
- [[glossary#const]]

---

## Group: Define Recursive Directory Traversal Function

### Line: `function walkDirectory(dir, prefix = '') {`

- `function` is a keyword for declaring a reusable block of code.
- `walkDirectory` is the function name — chosen by the author.
- `(dir, prefix = '')` defines two parameters:
  - `dir`: the directory to scan
  - `prefix`: indentation to prepend on each line (defaults to empty string)
- The default parameter syntax `=` was added in ES6.

#### Glossary:
- [[glossary#function]]
- [[glossary#parameter]]
- [[glossary#default-parameter]]

---

### Line: `const entries = fs.readdirSync(dir, { withFileTypes: true });`

- `fs.readdirSync(...)` reads the contents of a folder synchronously.
- The first argument, `dir`, is a string path — passed to the function.
- `{ withFileTypes: true }` tells Node to return an array of **Dirent objects**.
  - A Dirent object contains metadata: `entry.name`, `entry.isDirectory()`, etc.
- The resulting array is stored in `entries`.

#### Glossary:
- [[glossary#readdirSync]]
- [[glossary#Dirent]]
- [[glossary#synchronous]]

---

### Line: `const lines = [];`

- Declares a local constant array named `lines`.
- Used to accumulate formatted output lines — one per file/folder.
- `lines.push(...)` will be used repeatedly inside the loop.

#### Glossary:
- [[glossary#array]]
- [[glossary#push]]

---

### Line: `for (const entry of entries) {`

- A **`for...of` loop** iterates over iterable values — in this case, the `entries` array.
- `entry` is the loop variable; each iteration is a single `Dirent` object.

#### Glossary:
- [[glossary#for-of-loop]]
- [[glossary#entry]]

---

### Line: `if (entry.name === '.git') continue;`

- Checks whether the current entry's name is `.git`.
- The comparison is strict (`===`) — both value and type must match.
- If true, `continue` skips the rest of the loop for this iteration.
- Effectively: “don’t list the `.git` folder or recurse into it.”

#### Glossary:
- [[glossary#continue]]
- [[glossary#===]]
- [[glossary#if]]

---

### Line: `const fullPath = path.join(dir, entry.name);`

- `path.join(...)` safely constructs the full path to the file or folder.
- `dir` is the current directory
- `entry.name` is the file/folder name within that directory
- This returns a string like `some/folder/file.txt` or `some/folder/images/`

---

### Line: `lines.push(prefix + entry.name);`

- Creates the output line for this file/folder
- Concatenates the current `prefix` (indentation) with the entry name
- Appends it to the `lines` array

---

### Line: `if (entry.isDirectory()) {`

- Calls `.isDirectory()` on the `Dirent` object
- Returns `true` if this item is a folder, not a file

---

### Line: `lines.push(walkDirectory(fullPath, prefix + '  '));`

- **Recursion in action**
- Calls the same function `walkDirectory()` with:
  - `fullPath`: the folder we just found
  - `prefix + '  '`: increase indentation
- The result is a string (nested tree) that gets added to `lines`

---

### Line: `return lines.join('\n');`

- Joins all strings in the `lines` array using the newline character `\n`
- Returns a complete text block representing the tree

#### Glossary:
- [[glossary#return]]
- [[glossary#join]]

---

## Group: Output Result to File

### Line: `const outputPath = path.join(process.cwd(), 'file-tree.txt');`

- Defines the full absolute path for the output file
- Uses `path.join(...)` with:
  - The current working directory (`process.cwd()`)
  - The file name `file-tree.txt`

---

### Line: `const treeText = walkDirectory(startDir);`

- Calls the function with the top-level directory
- Stores the returned file tree string in `treeText`

---

### Line: `fs.writeFileSync(outputPath, treeText, 'utf8');`

- Writes the string to disk at the given path
- `writeFileSync` is a synchronous file-write method
- `'utf8'` ensures the file is readable text, not binary

---

### Line: `console.log(\`File tree written to ${outputPath}\`);`

- Prints a success message in the terminal
- Uses a **template literal** (backticks + `${}`) to insert the file path

#### Glossary:
- [[glossary#template-literal]]
- [[glossary#console.log]]

---

Let me know when you want to move on to:

- `tree-dump-commented.md` (Level 2 learner doc)
- `00-glossary-fs.md` (linked glossary source)
