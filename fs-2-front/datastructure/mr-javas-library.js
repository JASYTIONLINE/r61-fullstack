//librarian’s JavaScript script should contain so Mr. Java can “take accountability” of his library. I’ll name the pieces, explain why they’re needed, and hint which language features (functions, loops, helpers, async, storage) you’ll use so the later code maps directly to the story you want.

Think of this as the spec + recipe for the script.

High-level goal

Build a single JavaScript program (or module) that lets the librarian:

keep an authoritative catalog of books (data model),

inspect and audit the collection (counts, missing items, comparisons),

transform and query the collection (search, filter, sort),

accept new arrivals (async deliveries) and process them,

persist state (so the catalog survives reloads),

expose operations the UI or other code can call (functions / callbacks),

produce logs/actions for accountability (console + export).

Core data model (what the script must contain)

Book object shape — the properties each book will have:

id (unique identifier)

title (string)

author (string)

year (number)

pages (number)

status (string; e.g., "shelf"|"checked-out"|"reserved"|"in-transit")

location / shelfIndex (number or string)

tags (array of strings — genres, keywords)

createdAt / updatedAt (timestamps)

any optional metadata (ISBN, language, condition)

Catalog container

An array catalog = [bookObj, ...]

Derived values: catalog.length (size), maps by id for quick lookup (optional)

Core helper functions (single-purpose, reusable)

(Each helper does one thing; callbacks and higher-order functions will call these.)

createBook(rawData) → validate input, normalize, return a Book object with id and timestamps.

addBook(book) → push into catalog; update indices; persist; log action.

removeBookById(id) → remove from catalog; persist; log.

updateBook(id, patch) → merge patch into book; update timestamp; persist; log.

getBookById(id) → return book object (or null).

listBooks() → return a shallow copy of catalog (for safe reads).

countBooks() → return catalog.length (or breakdown by status).

booksByAuthor(author) → return filtered list (example of filter).

titles() → return array of titles (example of map).

averagePages() → compute average pages (use reduce).

compareCatalogs(otherCatalog) → diff two arrays (find missing, extra, mismatches).

validateBook(book) → sanity checks (types, required fields).

Higher-level operations / workflows

(These combine helpers; use appropriate loops and methods.)

Audit / Inventory

Walk the shelves and produce a report: total count, counts per status, missing indices.

Use for when scanning a precise slot range (e.g., check slots 10–20).

Use for…of or .forEach() when processing every book.

Search & filter

By title substring, author, year range, tags, or status.

Return sorted results (use .filter(), .sort()).

Bulk transforms

Tagging many books, changing status for a list of ids.

Use .forEach() for side-effect updates or .map() to build transformed arrays.

Check-in / Check-out

checkoutBook(id, borrowerInfo) → change status to "checked-out", set due date.

checkinBook(id) → status to "shelf", update location.

Import / Export

Export to CSV / JSON for audits.

Import function that takes raw JSON/CSV, validates, merges or replaces (use helper createBook).

Compare catalogs

If you have an external list (e.g., shipment manifest or remote catalog), compute:

missingOnShelf = external.filter(e => !catalogById[e.id])

unexpectedOnShelf = catalog.filter(c => !externalById[c.id])

Use Map/object for O(1) lookups; iterate with for…of.

Reports

Generate per-author counts, oldest/newest book, tag cloud.

Async behavior (where for await...of fits)

Incoming deliveries

Represent deliveries as an async iterable (or an array of Promises).

for await (const arrival of incomingStream) { process arrival (createBook/addBook) }

Use await when you must wait for remote API calls (fetch manifests, download metadata).

Background sync / remote cataloging

Periodic fetch of remote catalog; reconcile differences using helpers.

UI / Event hooks (if this script is used in a page)

Event handlers:

onAddButtonClick → calls createBook + addBook.

onScanBarcode → search by ISBN then addBook or updateBook.

onFilterChange → call listBooks() then filter and render.

Use callbacks to let the UI pass actions to library logic; e.g., manageCatalog(onUpdate) where onUpdate is called after persistence.

Persistence & state

Local options (simple):

localStorage for small catalogs (serialize JSON).

Robust options:

IndexedDB for larger data.

Remote API (POST/GET) for central server storage.

Helpers:

saveCatalog() (write to storage)

loadCatalog() (boot sequence at startup)

Ensure addBook, updateBook, removeBook call saveCatalog() or queue debounced saves.

Logging, auditing & accountability

All mutating actions should console.log() a human-readable message (Mr. Java speaking).

Keep an action log array actionLog = [{action, id, timestamp, details}, ...].

Provide exportActionLog() for audits (CSV/JSON).

Edge cases & validation (must include)

Duplicate IDs (use GUIDs or check before add).

Missing required fields.

Off-by-one errors when using indices (carefully define inclusive/exclusive bounds).

Handling failed persistence (retry strategies).

Partial deliveries / retries for for await...of streams.

Testing / examples

Unit tests for helpers (createBook, calculateAveragePages, etc.)

Integration test that simulates deliveries (an async generator yields book promises).

Console-driven demo where Mr. Java runs scripted moves and prints logs.

Which loop / pattern to use where (quick map)

Precise index range (slots 10–20) → for (let i = 10; i <= 20; i++) { ... }

Process every book value → for (const book of catalog) { ... } or catalog.forEach(...)

Transform to a new list → catalog.map(book => book.title)

Filter → catalog.filter(book => book.author === 'X')

Iterate keys of a single book → for (const key in book) { ... }

Iterate async deliveries → for await (const deliveredBook of deliveries) { ... }

Reduce / aggregate → catalog.reduce((acc, b) => acc + b.pages, 0)

Security / privacy notes

If persisting borrower data, follow privacy rules (don’t log PII to public logs).

Sanitize imported data before inserting.

Minimal runnable scenario (what the final script should demonstrate)

Boot: loadCatalog() → show starting size.

Inventory: count, list first 10 titles, average pages.

Query: list books by an author.

Update: add a new book, update an existing one, remove one.

Import: simulate receiving a delivery stream and process via for await...of.

Persist and export logs.

Developer ergonomics & code organization

Split into modules/files: model.js, persistence.js, catalog.js, reports.js, ui.js (if UI).

Keep small helper functions and compose them into higher workflows.

Use clear naming (createBook, processDelivery, generateInventoryReport) — readability matters as much as correctness.

/*******************************************************
 * Mr. Java’s Library — single-file demo implementation
 * ----------------------------------------------------
 * This script is self-contained. Paste it into a browser
 * console (Chrome/Firefox) or run under Node (v18+).
 * It demonstrates:
 *  - A book data model + catalog
 *  - Helpers (create/add/remove/update/get/list/count)
 *  - Array methods (map/filter/reduce/forEach)
 *  - Loops (for, for...of, for...in)
 *  - Async iteration (for await...of) simulating deliveries
 *  - Simple persistence (localStorage fallback → in-memory)
 *  - Accountability logging (Mr. Java voice)
 *******************************************************/

/* ===========================
   Persistence (storage layer)
   =========================== */

// Mr. Java: "First, I must decide where to keep my records. If I can, I'll file them in localStorage; otherwise, I'll keep them on my desk (in memory)."
const Storage = (() => {
  const hasLocalStorage =
    typeof window !== "undefined" && typeof window.localStorage !== "undefined";

  // Mr. Java: "When I put a ledger entry away, I label it 'mrjava.catalog' and 'mrjava.log'."
  const KEYS = {
    CATALOG: "mrjava.catalog",
    ACTIONS: "mrjava.actions",
  };

  // Mr. Java: "If I don't have a cabinet (localStorage), I'll keep a notebook here on my desk."
  const memory = { [KEYS.CATALOG]: "[]", [KEYS.ACTIONS]: "[]" };

  function read(key) {
    try {
      return hasLocalStorage ? localStorage.getItem(key) : memory[key];
    } catch {
      return memory[key];
    }
  }

  function write(key, value) {
    try {
      if (hasLocalStorage) localStorage.setItem(key, value);
      else memory[key] = value;
      return true;
    } catch {
      memory[key] = value;
      return false;
    }
  }

  return { KEYS, read, write };
})();

/* ===========================
   Action Log (accountability)
   =========================== */

// Mr. Java: "I keep a log of every important action I take, so I can answer for my stewardship."
const ActionLog = (() => {
  let log = [];

  function load() {
    try {
      const raw = Storage.read(Storage.KEYS.ACTIONS);
      log = raw ? JSON.parse(raw) : [];
    } catch {
      log = [];
    }
  }

  function save() {
    Storage.write(Storage.KEYS.ACTIONS, JSON.stringify(log));
  }

  function add(action, details = {}) {
    const entry = {
      id: cryptoId(),
      action,
      timestamp: new Date().toISOString(),
      details,
    };
    log.push(entry);
    save();
    console.log("Mr. Java (log):", action, details);
  }

  function list() {
    return [...log];
  }

  load();
  return { add, list };
})();

/* ===========================
   Utilities
   =========================== */

function cryptoId() {
  // Mr. Java: "Each book needs a unique ID; I'll stamp it with a date and a random token."
  return (
    "b_" +
    Math.random().toString(36).slice(2, 8) +
    "_" +
    Date.now().toString(36)
  );
}

function nowIso() {
  return new Date().toISOString();
}

/* ===========================
   Catalog Model
   =========================== */

// Mr. Java: "My catalog is a collection (array) of book records (objects)."
const Catalog = (() => {
  let catalog = [];

  function load() {
    try {
      const raw = Storage.read(Storage.KEYS.CATALOG);
      catalog = raw ? JSON.parse(raw) : seedSampleCatalog();
    } catch {
      catalog = seedSampleCatalog();
    }
  }

  function save() {
    Storage.write(Storage.KEYS.CATALOG, JSON.stringify(catalog));
  }

  function seedSampleCatalog() {
    // Mr. Java: "If I have no catalog, I'll start with a shelf of sample books."
    const sample = [
      {
        id: cryptoId(),
        title: "Moby Dick",
        author: "Herman Melville",
        year: 1851,
        pages: 635,
        status: "shelf",
        location: "A-01",
        tags: ["classic", "sea"],
        createdAt: nowIso(),
        updatedAt: nowIso(),
        isbn: "9780142437247",
      },
      {
        id: cryptoId(),
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        pages: 310,
        status: "shelf",
        location: "A-02",
        tags: ["fantasy"],
        createdAt: nowIso(),
        updatedAt: nowIso(),
        isbn: "9780547928227",
      },
      {
        id: cryptoId(),
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        pages: 281,
        status: "shelf",
        location: "A-03",
        tags: ["classic", "justice"],
        createdAt: nowIso(),
        updatedAt: nowIso(),
        isbn: "9780060935467",
      },
      {
        id: cryptoId(),
        title: "Dune",
        author: "Frank Herbert",
        year: 1965,
        pages: 544,
        status: "shelf",
        location: "B-01",
        tags: ["sci-fi"],
        createdAt: nowIso(),
        updatedAt: nowIso(),
        isbn: "9780441172719",
      },
      {
        id: cryptoId(),
        title: "1984",
        author: "George Orwell",
        year: 1949,
        pages: 328,
        status: "shelf",
        location: "B-02",
        tags: ["dystopia"],
        createdAt: nowIso(),
        updatedAt: nowIso(),
        isbn: "9780451524935",
      },
    ];
    ActionLog.add("seed-catalog", { count: sample.length });
    return sample;
  }

  function list() {
    // Mr. Java: "Show me my books, but give me a copy so I don't smudge the originals."
    return [...catalog];
  }

  function getById(id) {
    return catalog.find((b) => b.id === id) || null;
  }

  function validateBook(book) {
    if (!book.title || !book.author) return false;
    if (typeof book.pages !== "number" || book.pages <= 0) return false;
    return true;
  }

  function createBook(raw) {
    const book = {
      id: cryptoId(),
      title: String(raw.title ?? "").trim(),
      author: String(raw.author ?? "").trim(),
      year: Number(raw.year ?? 0) || null,
      pages: Number(raw.pages ?? 0) || 1,
      status: raw.status || "shelf",
      location: raw.location || null,
      tags: Array.isArray(raw.tags) ? raw.tags : [],
      createdAt: nowIso(),
      updatedAt: nowIso(),
      isbn: raw.isbn || null,
    };
    if (!validateBook(book)) {
      throw new Error("Invalid book data");
    }
    return book;
  }

  function addBook(book) {
    catalog.push(book);
    save();
    ActionLog.add("add-book", { id: book.id, title: book.title });
    console.log("Mr. Java:", `Added "${book.title}" by ${book.author}.`);
    return book;
  }

  function updateBook(id, patch) {
    const idx = catalog.findIndex((b) => b.id === id);
    if (idx === -1) throw new Error("Book not found");
    catalog[idx] = { ...catalog[idx], ...patch, updatedAt: nowIso() };
    save();
    ActionLog.add("update-book", { id, patch });
    console.log(
      "Mr. Java:",
      `Updated "${catalog[idx].title}" (${id}). Patch:`,
      patch
    );
    return catalog[idx];
  }

  function removeBook(id) {
    const idx = catalog.findIndex((b) => b.id === id);
    if (idx === -1) throw new Error("Book not found");
    const [removed] = catalog.splice(idx, 1);
    save();
    ActionLog.add("remove-book", { id });
    console.log("Mr. Java:", `Removed "${removed.title}" (${id}).`);
    return removed;
  }

  function countBooks() {
    return catalog.length;
  }

  function titles() {
    // Mr. Java: "I'll make a list of titles (map)."
    return catalog.map((b) => b.title);
  }

  function booksByAuthor(author) {
    // Mr. Java: "Filter my collection to just one author."
    return catalog.filter((b) => b.author.toLowerCase() === author.toLowerCase());
  }

  function averagePages() {
    // Mr. Java: "Add all the pages together (reduce), then divide."
    if (!catalog.length) return 0;
    const total = catalog.reduce((acc, b) => acc + (b.pages || 0), 0);
    return Math.round(total / catalog.length);
  }

  function compareCatalogs(externalList) {
    // Mr. Java: "Let's see what's missing or unexpected compared to another list."
    const byId = new Map(catalog.map((b) => [b.id, b]));
    const extById = new Map(externalList.map((b) => [b.id, b]));

    const missingOnShelf = externalList.filter((e) => !byId.has(e.id));
    const unexpectedOnShelf = catalog.filter((c) => !extById.has(c.id));

    return { missingOnShelf, unexpectedOnShelf };
  }

  // initial load
  load();

  return {
    list,
    getById,
    createBook,
    addBook,
    updateBook,
    removeBook,
    countBooks,
    titles,
    booksByAuthor,
    averagePages,
    compareCatalogs,
  };
})();

/* ===========================
   Circulation (check-in/out)
   =========================== */

// Mr. Java: "Sometimes a book leaves my shelf. I mark it checked-out, and when it returns, I mark it back on the shelf."
const Circulation = (() => {
  function checkoutBook(id, borrower) {
    const book = Catalog.getById(id);
    if (!book) throw new Error("Book not found");
    if (book.status !== "shelf") {
      console.warn("Mr. Java:", "Book not available for checkout.");
      return book;
    }
    const due = new Date();
    due.setDate(due.getDate() + 21); // 3 weeks
    const updated = Catalog.updateBook(id, {
      status: "checked-out",
      borrower: borrower || "Anonymous",
      dueDate: due.toISOString(),
    });
    ActionLog.add("checkout", { id, borrower: updated.borrower, due: updated.dueDate });
    console.log(
      "Mr. Java:",
      `Checked out "${updated.title}" to ${updated.borrower}. Due ${new Date(
        updated.dueDate
      ).toDateString()}`
    );
    return updated;
  }

  function checkinBook(id, location) {
    const book = Catalog.getById(id);
    if (!book) throw new Error("Book not found");
    const updated = Catalog.updateBook(id, {
      status: "shelf",
      borrower: null,
      dueDate: null,
      location: location || book.location || "Returns",
    });
    ActionLog.add("checkin", { id, location: updated.location });
    console.log("Mr. Java:", `Checked in "${updated.title}" to ${updated.location}.`);
    return updated;
  }

  return { checkoutBook, checkinBook };
})();

/* ===========================
   Inventory, Queries, Reports
   =========================== */

// Mr. Java: "Let me define a set of common tasks a librarian needs."
const Reports = (() => {
  function inventorySummary() {
    const list = Catalog.list();
    const total = list.length;
    const byStatus = list.reduce((acc, b) => {
      acc[b.status] = (acc[b.status] || 0) + 1;
      return acc;
    }, {});
    const avgPages = Catalog.averagePages();

    console.log("Mr. Java (inventory):");
    console.log("  Size of collection:", total);
    console.log("  By status:", byStatus);
    console.log("  Average page count:", avgPages);

    return { total, byStatus, avgPages };
  }

  function listFirstNTitles(n = 10) {
    const titles = Catalog.titles().slice(0, n);
    console.log(`Mr. Java: First ${n} titles:`, titles);
    return titles;
  }

  function booksBy(author) {
    const result = Catalog.booksByAuthor(author);
    console.log(`Mr. Java: Books by ${author}:`, result.map((b) => b.title));
    return result;
  }

  function inspectBookProperties(id) {
    const book = Catalog.getById(id);
    if (!book) {
      console.log("Mr. Java:", "No such book to inspect.");
      return null;
    }
    // for...in demonstration
    console.log(`Mr. Java: Inspecting properties of "${book.title}":`);
    for (const key in book) {
      console.log("  ", key, "→", book[key]);
    }
    return book;
  }

  function preciseSlotScan(startIndex, endIndex) {
    // classic for demonstration
    const list = Catalog.list();
    const upper = Math.min(endIndex, list.length - 1);
    const found = [];
    console.log(`Mr. Java: Scanning slots ${startIndex} to ${upper}...`);
    for (let i = startIndex; i <= upper; i++) {
      const b = list[i];
      if (b) {
        console.log("  Slot", i, "→", b.title);
        found.push(b);
      }
    }
    return found;
  }

  function writeTitlesWithForEach() {
    const list = Catalog.list();
    const ledger = [];
    // forEach demonstration (side-effect)
    list.forEach((b) => ledger.push(b.title));
    console.log("Mr. Java: I wrote all titles into my ledger:", ledger);
    return ledger;
    // Note: If we wanted a returned transformation, .map() is more idiomatic.
  }

  return {
    inventorySummary,
    listFirstNTitles,
    booksBy,
    inspectBookProperties,
    preciseSlotScan,
    writeTitlesWithForEach,
  };
})();

/* ===========================
   Async deliveries (for await...of)
   =========================== */

// Mr. Java: "Books arrive from other libraries over time. I'll process them as they come in."
function simulateIncomingDeliveries() {
  // Create an async iterable of incoming "book raw data" promises.
  const arrivals = [
    new Promise((res) =>
      setTimeout(() => res({ title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", year: 1969, pages: 304, tags: ["sci-fi"] }), 400)
    ),
    new Promise((res) =>
      setTimeout(() => res({ title: "Pride and Prejudice", author: "Jane Austen", year: 1813, pages: 279, tags: ["classic"] }), 250)
    ),
    new Promise((res) =>
      setTimeout(() => res({ title: "Neuromancer", author: "William Gibson", year: 1984, pages: 271, tags: ["cyberpunk"] }), 700)
    ),
  ];

  // Make arrivals an async iterable:
  return {
    [Symbol.asyncIterator]() {
      let index = 0;
      return {
        async next() {
          if (index >= arrivals.length) return { done: true };
          const value = await arrivals[index++];
          return { value, done: false };
        },
      };
    },
  };
}

async function processDeliveries() {
  console.log("Mr. Java:", "I'm waiting at the door for incoming deliveries...");
  const stream = simulateIncomingDeliveries();
  // for await...of demonstration
  for await (const raw of stream) {
    try {
      const book = Catalog.createBook(raw);
      Catalog.addBook(book);
      console.log("Mr. Java:", `Cataloged delivered book "${book.title}".`);
    } catch (e) {
      console.warn("Mr. Java:", "Rejected an invalid delivery:", e.message);
    }
  }
  console.log("Mr. Java:", "No more deliveries today.");
}

/* ===========================
   Import/Export
   =========================== */

function exportCatalogAsJSON() {
  const data = JSON.stringify(Catalog.list(), null, 2);
  console.log("Mr. Java (export):\n", data);
  return data;
}

function importCatalogFromJSON(json, options = { mode: "merge" }) {
  try {
    const incoming = JSON.parse(json);
    if (!Array.isArray(incoming)) throw new Error("Not an array");
    const mode = options.mode || "merge";

    if (mode === "replace") {
      console.warn(
        "Mr. Java:",
        "Replace mode not implemented in this demo. (Keep it safe for now.)"
      );
      return;
    }

    // Merge mode: add any missing by isbn+title
    const existing = Catalog.list();
    const existsKey = new Set(
      existing.map((b) => `${(b.isbn || "").toLowerCase()}|${b.title.toLowerCase()}`)
    );

    incoming.forEach((raw) => {
      const key = `${(raw.isbn || "").toLowerCase()}|${String(raw.title || "").toLowerCase()}`;
      if (!existsKey.has(key)) {
        try {
          const book = Catalog.createBook(raw);
          Catalog.addBook(book);
        } catch (e) {
          console.warn("Mr. Java:", "Skipped bad import row:", e.message);
        }
      }
    });

    console.log("Mr. Java:", "Import complete (merge).");
  } catch (e) {
    console.error("Mr. Java:", "Import failed:", e.message);
  }
}

/* ===========================
   Demo runner (scripted tour)
   =========================== */

// Mr. Java: "Now I'll run through a tour of duties a librarian performs."
async function demo() {
  console.log("===== MR. JAVA LIBRARY DEMO START =====");

  // 1) Inventory summary
  Reports.inventorySummary();

  // 2) List the first 3 titles
  Reports.listFirstNTitles(3);

  // 3) Search by author
  Reports.booksBy("Herman Melville");

  // 4) Inspect a book's properties using for...in
  const firstId = Catalog.list()[0]?.id;
  if (firstId) Reports.inspectBookProperties(firstId);

  // 5) Classic for: scan a precise slot range safely (0..2)
  Reports.preciseSlotScan(0, 2);

  // 6) forEach: write all titles to my ledger
  Reports.writeTitlesWithForEach();

  // 7) Add a new book
  const newBook = Catalog.createBook({
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    year: 2007,
    pages: 662,
    tags: ["fantasy"],
    location: "B-03",
    isbn: "9780756404741",
  });
  Catalog.addBook(newBook);

  // 8) Update that book
  Catalog.updateBook(newBook.id, { status: "reserved", location: "Hold Shelf" });

  // 9) Checkout & Checkin
  Circulation.checkoutBook(newBook.id, "Reader #42");
  Circulation.checkinBook(newBook.id, "B-03");

  // 10) Export catalog (JSON preview)
  exportCatalogAsJSON();

  // 11) Async deliveries (for await...of)
  await processDeliveries();

  // 12) Final inventory summary
  Reports.inventorySummary();

  // 13) Show action log
  console.log("Mr. Java (action log):", ActionLog.list());

  console.log("===== MR. JAVA LIBRARY DEMO END =====");
}

// Auto-run the demo when pasted in a browser console.
// In Node, you may need top-level await support, so we'll call demo() explicitly:
(async () => {
  try {
    await demo();
  } catch (e) {
    console.error("Demo error:", e);
  }
})();

/* ===========================
   Notes for explorers:
   - In a browser, you can re-run `demo()` to see the flow again.
   - The catalog persists between reloads (localStorage or memory).
   - Tweak the sample data or helper functions to extend behavior.
   =========================== */
