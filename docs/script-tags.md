# How script tags work

This guide explains how JavaScript connects to HTML and why you need a web server (like Live Server) to run your code.

## Two ways to include JavaScript

### 1. Inline scripts

You can put JavaScript code directly inside `<script>` tags:

```html
<script>
  const message = "Hello!";
  console.log(message);
</script>
```

This is useful for small amounts of code, but gets messy for larger projects.

### 2. External files (what we use)

You can put JavaScript in separate `.js` files and link them:

```html
<script src="helpers.js"></script>
<script src="adventure.js"></script>
```

This is what Mad Libs Quest uses. It's better because:

- **Separation of concerns:** HTML for structure, JS for behavior
- **Easier to read:** Your HTML stays clean
- **Reusability:** You can use the same JS file in multiple pages
- **Caching:** Browsers can save the JS file for faster loading

## Script loading order matters

In `index.html`, you'll see:

```html
<script src="helpers.js"></script>
<script src="adventure.js"></script>
```

The order is important! `helpers.js` loads first because `adventure.js` uses functions from it.

If we loaded them in the wrong order:

```html
<!-- WRONG ORDER - would cause errors! -->
<script src="adventure.js"></script>
<script src="helpers.js"></script>
```

This would fail because `adventure.js` tries to call `randomBetween()` before it exists.

## Why you can't just double-click the HTML file

You might wonder: "Why can't I just open `index.html` directly in my browser?"

You technically can, but some things won't work correctly. Here's why:

### File protocol vs HTTP protocol

When you double-click an HTML file, the browser uses the **file protocol**:

```
file:///C:/Users/you/project/index.html
```

When you use Live Server, it uses the **HTTP protocol**:

```
http://127.0.0.1:5500/index.html
```

### Why HTTP matters

Browsers apply stricter security rules to `file://` URLs:

1. **Cross-origin restrictions:** Some JavaScript features are blocked
2. **Module loading:** ES6 modules don't work with `file://`
3. **Fetch requests:** You can't load data from other files
4. **Consistent behavior:** Real websites use HTTP, so your code should match

For Mad Libs Quest, the code will probably work with `file://`, but using Live Server ensures everything works correctly and prepares you for real web development.

## How Live Server helps

Live Server creates a small web server on your computer:

1. It serves your files over HTTP (like a real website)
2. It watches for file changes
3. It tells your browser to refresh automatically

This gives you a professional development experience while learning.

## The script tag in our project

Looking at `index.html`:

```html
<body>
  <!-- Page content here -->

  <!-- Scripts at the bottom -->
  <script src="helpers.js"></script>
  <script src="adventure.js"></script>
</body>
```

Notice the scripts are at the **bottom** of `<body>`. This is a best practice because:

1. The page content loads first
2. Users see something while JavaScript loads
3. Scripts can access all the HTML elements above them

## What happens when the page loads

1. Browser loads `index.html`
2. Browser sees `<link href="styles.css">` → loads CSS
3. Browser renders the page content
4. Browser sees `<script src="helpers.js">` → loads and runs it
5. Browser sees `<script src="adventure.js">` → loads and runs it
6. `adventure.js` calls `updateQuest()` → updates the display

All of this happens in milliseconds!

## Real websites

On real websites, files are served by web servers like:

- **Apache** - Traditional, widely used
- **Nginx** - Fast, modern
- **Node.js** - JavaScript-based servers
- **Cloud services** - AWS, Netlify, Vercel, etc.

Live Server is a development tool that simulates this environment on your computer. When you're ready to share your website with the world, you'd upload your files to a real web server.

## Summary

- JavaScript can be inline or in external files
- External files are cleaner and more professional
- Script loading order matters
- Use Live Server (HTTP) instead of double-clicking (file://)
- Scripts at the bottom of `<body>` is a best practice
