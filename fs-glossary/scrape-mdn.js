// scrape-mdn.js

const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");
const path = require("path");

const terms = JSON.parse(fs.readFileSync("terms.json"));
const definitions = fs.existsSync("definitions.json") ? JSON.parse(fs.readFileSync("definitions.json")) : {};
const notFound = [];

const BASE_URL = "https://developer.mozilla.org/en-US/docs/Glossary/";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Format a term to match MDN URL slugs (e.g. "Array" => "Array")
function slugify(term) {
  return encodeURIComponent(term.replace(/\s+/g, "_"));
}

async function fetchDefinition(term) {
  const url = BASE_URL + slugify(term);
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    // Extract first <p> inside the main article section
    const mainContent = $("article").first();
    const firstParagraph = mainContent.find("p").first().text().trim();

    if (!firstParagraph) {
      console.warn(`⚠️ No content found for "${term}"`);
      notFound.push(term);
      return;
    }

    console.log(`✅ ${term}`);
    definitions[term] = firstParagraph;

  } catch (err) {
    console.warn(`❌ Failed for "${term}": ${err.message}`);
    notFound.push(term);
  }
}

async function run() {
  console.log(`🔍 Fetching definitions for ${terms.length} terms...`);
  for (let i = 0; i < terms.length; i++) {
    const term = terms[i];
    if (definitions[term]) continue; // Skip if already defined

    await fetchDefinition(term);
    await sleep(1000); // Delay to avoid rate-limiting
  }

  // Save files
  fs.writeFileSync("definitions.json", JSON.stringify(definitions, null, 2));
  fs.writeFileSync("not-found.json", JSON.stringify(notFound, null, 2));
  console.log("\n✅ Done. Definitions written to definitions.json");
  console.log(`⚠️ ${notFound.length} terms not found. See not-found.json`);
}

run();
