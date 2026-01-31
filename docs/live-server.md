# Using Live Server in VS Code

Live Server is a VS Code extension that runs a local web server and automatically refreshes your browser when you save changes. This guide will help you get it set up.

## Why use Live Server?

When developing web pages with JavaScript, you need a web server to run your code properly. You can't just double-click the HTML file to open it - some features won't work that way.

Live Server:

- Runs a local web server for you
- Automatically refreshes the browser when you save
- Shows your changes instantly
- Works with Chrome's developer tools

## Installing Live Server

1. Open VS Code
2. Click the **Extensions** icon in the left sidebar (or press `Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Type "Live Server" in the search box
4. Find **Live Server** by Ritwick Dey
5. Click the **Install** button
6. Wait for installation to complete

If VS Code prompted you to install recommended extensions when you opened this project, you may already have it!

## Starting Live Server

### Method 1: Right-click (recommended)

1. In VS Code's file explorer, find `index.html`
2. Right-click on `index.html`
3. Select **Open with Live Server**
4. Chrome will open automatically

### Method 2: Status bar button

1. Open `index.html` in the editor
2. Look at the bottom-right of VS Code's window
3. Click **Go Live**
4. Chrome will open automatically

### Method 3: Command palette

1. Press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac)
2. Type "Live Server"
3. Select **Live Server: Open with Live Server**

## Understanding the URL

When Live Server starts, it opens a URL like:

```
http://127.0.0.1:5500/index.html
```

This means:

- `http://` - Using the HTTP protocol (like a real website)
- `127.0.0.1` - Your computer (also called "localhost")
- `5500` - The port number Live Server uses
- `/index.html` - The file being served

This is different from opening a file directly, which would show:

```
file:///C:/Users/you/project/index.html
```

The `http://` version works properly with JavaScript!

## Auto-refresh

One of Live Server's best features is auto-refresh:

1. Make a change in your code
2. Save the file (`Ctrl+S` / `Cmd+S`)
3. Your browser automatically refreshes
4. See your changes instantly!

No more manually clicking refresh!

## Stopping Live Server

### Method 1: Status bar

Look at the bottom-right of VS Code. You'll see "Port: 5500" - click it to stop the server.

### Method 2: Command palette

1. Press `Ctrl+Shift+P` / `Cmd+Shift+P`
2. Type "Live Server"
3. Select **Live Server: Stop Live Server**

## Troubleshooting

### "Port 5500 is already in use"

Another program is using that port. Either:

- Close other VS Code windows that might have Live Server running
- Or change the port in settings

### Page doesn't refresh when I save

1. Make sure you saved the file (`Ctrl+S` / `Cmd+S`)
2. Check that Live Server is still running (look for "Port: 5500" in status bar)
3. Make sure you're editing a file in the same folder as your HTML

### Browser opens but page is blank

1. Check that `index.html` exists in your project folder
2. Make sure there are no errors in your HTML (check the Console with F12)

### "Cannot GET /"

This usually means you started Live Server from the wrong folder. Make sure you:

1. Open the project folder in VS Code (File > Open Folder)
2. Right-click on `index.html` specifically

## Tips

- Keep the browser and VS Code side by side to see changes instantly
- Use Chrome for the best developer tools experience
- If something seems broken, try stopping and restarting Live Server
