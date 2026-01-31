# URLs are just strings

Ever wonder why you can paste a web address into a JavaScript variable? It's because URLs were designed from the start to be plain text strings that humans can read and computers can process.

## What is a URL?

**URL** stands for **Uniform Resource Locator**. It's an address that tells your browser exactly where to find something on the internet.

```javascript
const myUrl = "https://example.com/images/dragon.png";
```

That's it - a URL is just a string of characters. No special magic, no binary code. Just text.

## The anatomy of a URL

Let's break down a URL you might use in this project:

```text
https://raw.githubusercontent.com/student123/mad-libs-quest/main/avatar.png
```

| Part     | Example                                      | What it means               |
| -------- | -------------------------------------------- | --------------------------- |
| Protocol | `https://`                                   | How to connect (secure web) |
| Host     | `raw.githubusercontent.com`                  | Which server to ask         |
| Path     | `/student123/mad-libs-quest/main/avatar.png` | Where on that server        |

Think of it like a postal address:

- **Protocol** = How to deliver (mail, courier, email)
- **Host** = The building (123 Main Street)
- **Path** = The specific location (Apartment 4B, Room 2)

## Why text? A brief history

In 1989, Tim Berners-Lee invented the World Wide Web at CERN (a physics research lab). He needed a way to link documents together so scientists could share research.

His brilliant design decision: **make addresses human-readable text**.

Why text strings?

1. **Humans can read them** - You can look at a URL and understand where it goes
2. **Humans can type them** - No special tools needed, just a keyboard
3. **Humans can share them** - Copy, paste, write on paper, read aloud
4. **Computers can process them** - Text is the universal language of computing
5. **They work everywhere** - Any system that handles text can handle URLs

This is why, 35+ years later, you can still:

- Type a URL into any browser
- Send a URL in a text message
- Store a URL in a JavaScript variable
- Print a URL on a business card

## URLs in JavaScript

Since URLs are strings, you can do anything with them that you can do with any string:

```javascript
// Store in a variable
const imageUrl = "https://example.com/hero.png";

// Use in template literals
const message = `Check out this image: ${imageUrl}`;

// Concatenate (combine) strings
const baseUrl = "https://raw.githubusercontent.com/";
const username = "student123";
const fullUrl = baseUrl + username + "/mad-libs-quest/main/avatar.png";
```

## The raw.githubusercontent.com pattern

When you upload a file to GitHub, it gets a URL. But GitHub's regular URLs show a webpage, not just the file.

The **raw** URL gives you just the file itself - perfect for images:

```text
Regular GitHub URL (shows a webpage):
https://github.com/student123/mad-libs-quest/blob/main/avatar.png

Raw GitHub URL (just the image):
https://raw.githubusercontent.com/student123/mad-libs-quest/main/avatar.png
```

Notice the pattern:

- Change `github.com` to `raw.githubusercontent.com`
- Remove `/blob`
- Everything else stays the same

## Try it yourself

1. Go to any image on GitHub
2. Click the "Raw" button
3. Look at the URL in your browser - it's just a text string!
4. Copy that string into a JavaScript variable

```javascript
const avatarUrl =
  "https://raw.githubusercontent.com/YOUR-USERNAME/mad-libs-quest/main/YOUR-IMAGE.png";
```

## Why this matters

Understanding that URLs are strings unlocks a powerful concept:

> **Data is just text, and text can go anywhere.**

This same principle applies to:

- **Email addresses** - just strings
- **Phone numbers** - just strings (of digits)
- **Colors in CSS** - just strings like `"hsl(32, 76%, 63%)"`
- **File paths** - just strings like `"/Users/me/Documents/file.txt"`
- **API endpoints** - just strings that tell your code where to get data

When you see a URL in code, don't think of it as something mysterious. It's just a string that happens to point somewhere on the internet.

## Fun facts

1. **The first URL ever** was `http://info.cern.ch/` - Tim Berners-Lee's original web server at CERN. It still works today!

2. **URL vs URI** - Technically, URL is a type of URI (Uniform Resource Identifier). For everyday use, they mean the same thing.

3. **The longest valid URL** has no official limit, but most browsers handle up to about 2,000 characters. That's a lot of text!

4. **Emojis in URLs?** Technically possible, but they get converted to percent-encoded text like `%F0%9F%90%89` (that's the dragon emoji 🐉).

5. **Case sensitivity** - The host part (`github.com`) is NOT case-sensitive, but the path part (`/Student123/`) usually IS. Best practice: use lowercase.

## Connection to your quest

In Mad Libs Quest, when you set:

```javascript
const avatarUrl = "https://raw.githubusercontent.com/...";
```

You're storing a string. The `helpers.js` code then takes that string and tells the browser: "Hey, go fetch the image at this address."

The browser reads the text, figures out:

1. Use HTTPS (secure connection)
2. Connect to raw.githubusercontent.com
3. Ask for the specific file path

And just like that, your custom avatar appears in your quest!

It all works because Tim Berners-Lee made URLs human-readable text strings back in 1989. Good design lasts.
