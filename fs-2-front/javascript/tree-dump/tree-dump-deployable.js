// Generate a plain‑text file tree of the current working directory.
// Output is written to "file-tree.txt" in the same directory.
// run command = node tree-dump-deployable.js
// IMPORTANT: you must have the file "tree-dump-deployable.js" in the directory you want to scan


const fs = require('fs');          // Node.js File System module
const path = require('path');      // Node.js Path utilities module

// Root directory for traversal: wherever this script is executed.
const startDir = process.cwd();

/**
 * Recursively builds a text‑based representation of a directory tree.
 * @param {string} dir - Directory to scan.
 * @param {string} prefix - Indentation string for nested levels.
 * @returns {string} - Formatted list of files and folders.
 */
function walkDirectory(dir, prefix = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const lines = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    lines.push(prefix + entry.name);

    // Recurse into subdirectories with increased indentation.
    if (entry.isDirectory()) {
      lines.push(walkDirectory(fullPath, prefix + '  '));
    }
  }

  return lines.join('\n');
}

// Define output file path and write the generated tree to disk.
const outputPath = path.join(process.cwd(), 'file-tree.txt');
const treeText = walkDirectory(startDir);
fs.writeFileSync(outputPath, treeText, 'utf8');

console.log(`File tree written to ${outputPath}`);
