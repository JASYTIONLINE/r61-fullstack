@christopherbren Thanks for the great notes 🙏 — they really helped me organize the call. I did a little digging based on what you supplied, and this is what I came up with. Hope you keep posting, because it’s super helpful for the group.  


# CSS Notes  

### Getting Set Up  
You can technically write HTML and CSS in a plain text editor like **Notepad**. If you type your code there and save it with the correct file extension (`.html` for webpages, `.css` for stylesheets), it will work just fine in a browser. The catch is that Notepad doesn’t give you much help — debugging is clunky, and finding mistakes later can be a headache. That’s why developers use editors like **VS Code**. Think of VS Code as “Power Notepad”: it organizes your files, color-codes your code, and makes it much easier to come back the next day and still understand what you wrote. On top of that, it supports plugins and even AI tools that can autocomplete tags, suggest fixes, or group your code more cleanly. That means you write faster, and you spot and fix problems quicker when they come up.  

👉 One thing you’ll notice in VS Code: line numbers running down the left side. These aren’t part of your HTML or CSS files — they’re just reference markers, like the row and column headers in Excel. They help you say “check line 14” the same way you’d say “look at row 3” in a spreadsheet. But if you copied that spreadsheet into a chart, the row numbers wouldn’t show up. Same with code: line numbers live in the editor only, not in the file.  

- Download **VS Code**: [https://code.visualstudio.com/download](https://code.visualstudio.com/download).  
- Attendance and recordings are available in the Simplilearn LMS for each session.  

---

### CSS Basics  
- CSS = *Cascading Style Sheets*.  
- Styles can be written inline (on the element), inside the `<head>` of the HTML, or in an external file. Best practice: use an external stylesheet like `styles.css` and link it with:  
  ```html
  <link rel="stylesheet" href="styles.css">
