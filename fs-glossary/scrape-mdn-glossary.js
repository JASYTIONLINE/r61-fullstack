const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");

const BASE_INDEX = "https://developer.mozilla.org/en-US/docs/Glossary";
const BASE_TERM = "https://developer.mozilla.org";

const definitions = {};
const failed = [];

async function fetchGlossaryIndex() {
  console.log("🔍 Fetching glossary index...");
  const { data } = await axios.get(BASE_INDEX);
  const $ = cheerio.load(data);
  const links = [];

  $("a[href^='/en-US/docs/Glossary/']").each((_, el) => {
    const href = $(el).attr("href");
    const title = $(el).text().trim();

    // Skip empty titles or bad links
    if (title && href && !title.startsWith("See also")) {
      links.push({ title, url: BASE_TERM + href });
    }
  });

  return links.slice(0, 500); // cap to 500 terms
}

async function fetchDefinition({ title, url }) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const definition = $("article p").first().text().trim();

    if (definition) {
      definitions[title] = definition;
      console.log(`✅ ${title}`);
    } else {
      failed.push(title);
      console.log(`⚠️ No definition found: ${title}`);
    }
  } catch (err) {
    failed.push(title);
    console.log(`❌ Failed to fetch ${title}: ${err.message}`);
  }
}

async function run() {
  const glossaryLinks = await fetchGlossaryIndex();
  console.log(`📚 Found ${glossaryLinks.length} terms...`);

  for (const link of glossaryLinks) {
    await fetchDefinition(link);
    await new Promise(res => setTimeout(res, 500)); // rate limit
  }

  fs.writeFileSync("definitions.json", JSON.stringify(definitions, null, 2));
  fs.writeFileSync("not-found.json", JSON.stringify(failed, null, 2));
  fs.writeFileSync("terms.json", JSON.stringify(Object.keys(definitions), null, 2));

  console.log("✅ Done! Saved: definitions.json, terms.json, not-found.json");
}

run();
