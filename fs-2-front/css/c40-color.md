---
title: "CSS Notes"
description: "CSS explained in plain talk, with examples you can copy and test right away."
tags: [fullstack, css]
draft: false
date: 2025-09-25
permalink: content/classes/css/style.css.md
enableToc: true
aliases: []
cssclasses: []
h1: CSS Notes
course: fullstack
filename: style.css.md
role: article
function: kb-page
shortcode: "[doc]"
---

# CSS Notes

## Getting set up
You *can* write HTML and CSS in something as basic as Notepad. If you save the file as `index.html` or `style.css`, a browser will read it.  
But Notepad doesn’t give you much help. Debugging is painful, and coming back later to figure out what you wrote is even worse.  

That’s why most developers use **VS Code** (think of it as “power Notepad”). It color-codes your code, organizes your files, and makes it much easier to work day-to-day. You also get extensions and AI helpers that can autocomplete or catch mistakes for you.  

---

## What CSS actually is
**CSS = Cascading Style Sheets.**  
The cascade part means the browser reads rules from top to bottom, applying the “most powerful” rule last. The order of power goes like this:

- Inline style (written right on the element) → strongest  
- ID selector (e.g., `#special`)  
- Class selector (e.g., `.note`)  
- Element selector (e.g., `p`) → weakest  

You can write CSS three ways: inline, inside the `<head>` of the HTML file, or (best practice) in an external file like `style.css`.  

To link your stylesheet, you drop this into the `<head>` of your HTML page:

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
````

That’s the browser’s way of saying: “Okay, go look in style.css for instructions.”

---

## Colors in CSS

You can set colors in a few ways. All of these do the same thing — red text:

```css
p { color: red; }          /* named */
p { color: #FF0000; }      /* hex   */
p { color: rgb(255,0,0); } /* rgb   */
```

Want a lighter red? Lower the numbers:
`rgb(225,0,0)` is less intense. That’s how you fine-tune colors.

---

## Specificity in action: worked example

Let’s see how the cascade works in practice. Imagine we want four color options for text:

* Green (default for every `<p>`)
* Blue (class)
* Red (id)
* Yellow (inline)
* Black (fallback if no CSS at all)

### Step 1: Write the CSS

In **style.css** we create our rules:

```css
p { color: green; }     /* element */
.note { color: blue; }  /* class   */
#special { color: red; }/* id      */
```
- Standard Paragraphs will be colored in Green by default.
- Notations will be colored blue because we will assign the .note class to them.
- Any thing we want to scream at the reader will be identified as `#special` and render in Red.
- Notice there’s no yellow. That’s because we’re saving yellow for inline use only.

---

### Step 2: Inline style (top priority)

```html
<body>  
  <p class="note" id="special" style="color: yellow;">Hello</p>
</body>  
```

Here we’ve loaded this poor `<p>` with *everything* — element, class, id, and inline.
But inline wins. The text shows **yellow**.
<p class="note" id="special" style="color: yellow;">Hello</p>
If we just want yellow once, we don’t even need the class or id:

```html
<body>  
  <p style="color: yellow;">Hello</p>
</body>
```

Same result: <p style="color: yellow;">Hello</p>

---

### Step 3: Remove the inline
If we remove the inline rule, our next highest rule in the hierarchy, the ID Rule, takes command:
On the HTML Page (don't change style.css) we  just take out the inline style and leave the id:

```html
<body>  
  <p class="note" id="special">Hello</p>
</body>  
```

Now the text shows **red**, because `#special` in our CSS takes over.
<p style="color: red">Hello</p>
---

### Step 4: Remove the ID 
Without the ID Rule in play, the Class rule takes over:

```html
<body>  
  <p class="note">Hello</p>
</body>  
```

Now the text shows **blue**, thanks to `.note`.
<p style="color: blue;">Hello</p>

---

### Step 5: Remove the class
This results in the "element rule" taking over.  By default we want all paragraphs to render in green so we just use: `<p>paragraphe text goes here</p>`

```html
<body>
  <p>Hello</p>
</body>  
```

The browser now renders all text between the `<p>` tags in **green**.

---

### Step 6: No CSS at all
We don't have to use any styling at all and just let the browser decide in what color text on the screen is going to render.

```html
<body>  
  Hello
</body>  
```

Now it’s **black**(if that is the browsers default color.).

---
## Practice tips

* In **VS Code**, press `Shift + Alt + F` (Windows) to auto-format your file.
* Free drills: [freeCodeCamp CSS](https://www.freecodecamp.org/learn) or MDN tutorials.

---

## Quick references

* [MDN CSS Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
* [Flexbox Guide (CSS-Tricks)](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Grid Guide (CSS-Tricks)](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [MDN HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

---

Return to the [[repositories/r00-jasytionline-pmo/0-dais/01-kms/index]]

```
