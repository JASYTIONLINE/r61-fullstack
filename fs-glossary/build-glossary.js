// build-glossary.js
// Adds a definition/example to the next term in terms.json

const fs = require("fs");
const readline = require("readline");

// Utility to prompt user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

// Load files
const terms = JSON.parse(fs.readFileSync("terms.json"));
const definitions = fs.existsSync("definitions.json") ? JSON.parse(fs.readFileSync("definitions.json")) : {};
const examples = fs.existsSync("examples.json") ? JSON.parse(fs.readFileSync("examples.json")) : {};
const index = fs.existsSync("term-index.json") ? JSON.parse(fs.readFileSync("term-index.json")) : { index: 0 };

async function run() {
  const term = terms[index.index];

  if (!term) {
    console.log("🎉 All terms completed!");
    rl.close();
    return;
  }

  console.log(`\n📝 Term ${index.index + 1}/${terms.length}: ${term}`);

  const def = await ask("Enter definition: ");
  const ex = await ask("Enter example (optional): ");

  definitions[term] = def;
  if (ex.trim()) examples[term] = ex;

  // Save updated files
  fs.writeFileSync("definitions.json", JSON.stringify(definitions, null, 2));
  fs.writeFileSync("examples.json", JSON.stringify(examples, null, 2));
  fs.writeFileSync("term-index.json", JSON.stringify({ index: index.index + 1 }));

  console.log(`✅ Saved for term "${term}".`);
  rl.close();
}

run();
