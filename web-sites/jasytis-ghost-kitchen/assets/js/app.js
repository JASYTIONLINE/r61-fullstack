/****************************************************
 * app.js  —  Firebase bootstrap + helper functions *
 * ------------------------------------------------ *
 * This file does three things:
 *   1. Loads the Firebase modules from Google’s CDN.
 *   2. Initializes your Firebase app using your config.
 *   3. Exposes three small helper functions so every
 *      page (menu, cart, admin) can read/write data
 *      without rewriting boilerplate code.
 ****************************************************/

// ----------------------------------------------------
// 1. Import Firebase modules from the CDN
//    "type=module" is required in any HTML script tag
//    that imports this file.
// ----------------------------------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,     // used for addData()
  set,      // used for writeData()
  onValue   // used for readData()
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";

// ----------------------------------------------------
// 2. Firebase configuration — identifies your project
//    These values come directly from your Firebase
//    console.  Replace only if you start a new project.
// ----------------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyCz9TdP5A6giQAE22b7fATXJVtz1Qb1yLk",
  authDomain: "jasytis-ghost-kitchen.firebaseapp.com",
  databaseURL: "https://jasytis-ghost-kitchen-default-rtdb.firebaseio.com/",
  projectId: "jasytis-ghost-kitchen",
  storageBucket: "jasytis-ghost-kitchen.firebasestorage.app",
  messagingSenderId: "647203916451",
  appId: "1:647203916451:web:e8e1779548453cc4dccd16"
};

// ----------------------------------------------------
// 3. Initialize the Firebase app and database instance
// ----------------------------------------------------
const app = initializeApp(firebaseConfig);   // connects this JS to your project
const db  = getDatabase(app);                // opens a connection to Realtime DB

// ----------------------------------------------------
// 4. Helper: addData(path, data)
// ----------------------------------------------------
// Pushes a *new child* under the node at `path`.
// Firebase automatically generates a unique key.
// Example: addData("menu", { name: "Burger", price: 7.99 });
export function addData(path, data) {
  const dbRef = ref(db, path);  // points to e.g., /menu
  return push(dbRef, data);     // returns a Promise
}

// ----------------------------------------------------
// 5. Helper: writeData(path, data)
// ----------------------------------------------------
// Writes data *directly* to the path (overwrites anything there).
// Example: writeData("settings/siteName", "Ghost Kitchen");
export function writeData(path, data) {
  const dbRef = ref(db, path);
  return set(dbRef, data);      // also returns a Promise
}

// ----------------------------------------------------
// 6. Helper: readData(path, callback)
// ----------------------------------------------------
// Listens continuously for changes at the path and
// runs your callback with the new data snapshot.
// Example:
//   readData("menu", (data) => { console.log(data); });
export function readData(path, callback) {
  const dbRef = ref(db, path);
  onValue(dbRef, (snapshot) => {
    const value = snapshot.val();
    callback(value);
  });
}

// ----------------------------------------------------
// 7. Export the database itself (optional convenience)
// ----------------------------------------------------
export { db };
