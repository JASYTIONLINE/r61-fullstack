/*****************************************************
 * Mr. Java’s Library Story — narrated with loops
 * Each narration step is explained with comments
 *****************************************************/

// Grab the story container <div> from HTML
const storyDiv = document.getElementById("story");

// Helper function to append a <p> with text into #story
function narrate(text) {
  const p = document.createElement("p");
  p.textContent = text;
  storyDiv.appendChild(p);
}

// Define the library: an array of book titles
const books = [
  "Moby Dick",
  "The Hobbit",
  "To Kill a Mockingbird",
  "Dune",
  "1984"
];

/********************
 * Classic FOR loop
 ********************/
// He looks at the shelves and sees the size of his collection.
// In JS, .length gives the number of items.
narrate(`Mr. Java enters his library. "The size of my collection is ${books.length} books."`);

// He decides to count his books slot by slot.
narrate("He begins to count them carefully, one slot at a time...");
for (let i = 0; i < books.length; i++) {
  narrate(`At slot ${i}, he finds "${books[i]}".`);
}

/********************
 * FOR...OF loop
 ********************/
// He ignores slots and just cares about the books themselves.
narrate("Later, he takes each book directly without worrying about slots...");
for (const book of books) {
  narrate(`He picks up a book and reads the title: "${book}".`);
}

/********************
 * forEach() method
 ********************/
// He decides to keep a ledger of titles.
// forEach lets him apply an action to each item.
narrate("Then he writes the titles into his ledger, one by one...");
const ledger = [];
books.forEach(book => {
  ledger.push(book);
  narrate(`He writes down: "${book}".`);
});

/********************
 * FOR...IN loop
 ********************/
// Inspecting the properties of a single book object
narrate("Now he inspects one book closely, noting its details.");
const bookObj = { title: "Moby Dick", author: "Herman Melville", year: 1851 };
for (const key in bookObj) {
  narrate(`He looks at the ${key}: "${bookObj[key]}".`);
}

/********************
 * FOR AWAIT...OF loop
 ********************/
// Deliveries arrive asynchronously
narrate("Later, new books arrive from other libraries...");

// Async function simulating delayed deliveries
async function deliveries() {
  const incoming = [
    new Promise(res => setTimeout(() => res("Pride and Prejudice"), 1000)),
    new Promise(res => setTimeout(() => res("Neuromancer"), 2000)),
    new Promise(res => setTimeout(() => res("The Left Hand of Darkness"), 3000))
  ];

  // for await...of waits for each promise to resolve in sequence
  for await (const newBook of incoming) {
    narrate(`A courier arrives with "${newBook}". He adds it to his shelf.`);
  }
  narrate("By evening, Mr. Java smiles. His work is complete.");
}

// Start the async story
deliveries();
