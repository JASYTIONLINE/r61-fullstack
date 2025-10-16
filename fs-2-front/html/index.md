Here is your **master class-level, two-page introduction to HTML** in `.md` format, written for a **Quartz + Obsidian + GitHub Pages** environment. This is structured as your **`index.md`** in the `html/` folder — the *portal page* of your HTML knowledge base. All key concepts are briefly introduced with **[[Wiki-style links]]** to future or existing `.md` pages inside the same folder.

---

### 📄 `index.md` (HTML Knowledge Base Portal Page)

````markdown
# HTML: The Foundation of the Web

Welcome to the portal for all things **HTML** — the language at the heart of the web. This index serves as the entry point to your growing knowledge base. It provides a concise overview and links out to deeper explorations of specific topics like [[Tags]], [[Elements]], [[Attributes]], and more.

---

## 💡 What Is HTML?

**HTML** stands for **HyperText Markup Language**. It is the standard language used to **structure content on the web**. Think of it as the *skeleton* of every web page — defining where text, images, buttons, forms, and media appear, and how they relate to one another.

- It's not a programming language — it's a **markup** language.
- HTML defines **what** something is (e.g. "this is a heading", "this is a paragraph"), not how it behaves or looks.

More on this in [[What is HTML?]].

---

## 🌐 What Is HTML Used For?

HTML is used to:

- Display content like **text**, **images**, and **links** on web pages.
- Provide **semantic meaning** to content, such as headers, lists, and navigation.
- Serve as the **foundation** upon which styling (via [[CSS]]) and interactivity (via [[JavaScript]]) are layered.

---

## 🧱 Core Building Blocks

### 🔖 [[Elements]]

**Elements** are the basic units of HTML. An element is everything from the opening tag to the closing tag, including the content in between.

```html
<p>This is a paragraph element.</p>
````

### 🏷️ [[Tags]]

**Tags** are the syntactic pieces that define elements. They are enclosed in angle brackets (`< >`) and come in pairs: an opening tag and a closing tag.

Example: `<h1>Title</h1>`

### ⚙️ [[Attributes]]

**Attributes** provide additional information about elements. They go inside the opening tag.

Example: `<img src="cat.jpg" alt="A cute cat" />`

---

## 🎨 Separation of Concerns

Modern web development is guided by a key principle: **Separation of Concerns**. Each language in the web stack has its own job:

* **HTML** defines **structure and semantics** of content.
* **[[CSS]]** defines **styling and visual presentation**.
* **[[JavaScript]]** handles **logic, behavior, and interactivity**.

This division makes code easier to read, debug, and maintain.

---

## 📄 Page Layout

A basic HTML document looks like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My First Page</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a basic HTML page.</p>
  </body>
</html>
```

See full breakdown in [[Anatomy of an HTML Document]].

---

## 📁 Where to Go Next

This index links to all major topics you’ll want to explore next:

* [[Elements]]
* [[Tags]]
* [[Attributes]]
* [[Anatomy of an HTML Document]]
* [[CSS]]
* [[JavaScript]]
* [[Semantic HTML]]
* [[HTML Forms]]
* [[HTML5 APIs]]
* [[Box Model]]
* [[Accessibility (a11y)]]

Happy building! 🛠️

```
