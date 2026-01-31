# Mad Libs Quest

A fantasy micro-RPG where your JavaScript variables control the story!

> **📚 Complete the Learning Lab first:** [HAP JavaScript Foundations](https://hap-js-foundations.netlify.app/)

## Requirements

Before you begin, make sure you have:

- **Google Chrome** browser (required for testing)
- **VS Code** with the **Live Server** extension installed

New to Live Server? See [docs/live-server.md](docs/live-server.md) for setup instructions.

## Learning objectives

This assignment reinforces the JavaScript concepts from the HAP Learning Lab:

- Using `const` for values that don't change
- Using `let` for values that will change
- Working with strings, numbers, and booleans
- Writing template literals with `${}` interpolation
- Using arithmetic operators (`+`, `-`)
- Using comparison operators (`>`)
- Calling helper functions

## Prerequisites

Complete the [HAP JavaScript Foundations Learning Lab](https://hap-js-foundations.netlify.app/) before starting this assignment. The lab teaches all the concepts you'll need here.

## Getting started

1. Open this folder in VS Code
2. If prompted to install recommended extensions, click **Install**
3. Right-click on `index.html` and select **Open with Live Server**
4. Chrome will open showing your quest (with placeholder values)
5. Open `adventure.js` in VS Code - this is where you'll work!

**Pro tip:** Open [docs/student-checklist.md](docs/student-checklist.md) and press `Ctrl+Shift+V` (Mac: `Cmd+Shift+V`) to see it formatted. Keep it open while you work!

**Note:** You'll see red squiggly lines in VS Code until you complete all parts - that's normal! The incomplete `= ;` lines cause temporary errors that disappear as you fill them in.

## File overview

| File           | What it does              | Do you edit it? |
| -------------- | ------------------------- | --------------- |
| `adventure.js` | Your code goes here!      | **YES**         |
| `index.html`   | Displays your quest       | No              |
| `helpers.js`   | Provides helper functions | No              |
| `styles.css`   | Makes it look nice        | No              |

## Your task

Open `adventure.js` and complete each part:

### Part 1: Hero facts (5 strings to fill in)

Fill in the empty strings with your hero's details:

- `heroName` - Give your hero a name
- `heroEmoji` - Pick an emoji for your hero (e.g., "🧙" or "⚔️")
- `questItem` - What are they searching for?
- `questLocation` - Where does the quest take place?
- `enemyType` - What creature attacks them?

Want emoji ideas? See [docs/emojis-and-encoding.md](docs/emojis-and-encoding.md) for a list of suggestions and the fascinating history of how computers learned to display emoji!

### Part 2: Starting status (study this pattern!)

Observe how `let` is used for values that will change. Pay attention to the pattern `health = health - enemyDamage` - you'll need it in Part 4!

### Part 3: Random events (study these examples!)

See how the helper functions create random values. You'll use `choose()` in Parts 4 and 6:

- `randomBetween(10, 30)` - picks a random number
- `coinFlip()` - returns true or false randomly

### Part 4: The adventure (3 expressions to write)

Write the arithmetic to update your hero:

- Add `treasureFound` to `gold`
- Calculate `potionHealing` using `choose()`
- Add `potionHealing` to `health`

### Part 5: The story (8 blanks to fill)

Complete the template literal by adding the correct variables inside `${}`.

### Part 6: Survival check (2 expressions to write)

- Create the `survived` boolean (is health greater than 0?)
- Use `choose()` to set the `survivalMessage`

## Testing your work

1. Save `adventure.js` (Ctrl+S or Cmd+S)
2. Your browser will auto-refresh (thanks to Live Server!)
3. Check if your story displays correctly
4. **Always check the Console** (F12) after saving - red errors tell you exactly what's wrong and which line to fix

Need help with the Console? See [docs/chrome-console.md](docs/chrome-console.md).

## Verify your work

Before submitting, confirm:

- [ ] Your story displays without "???" or "undefined"
- [ ] Your hero's name and emoji appear correctly
- [ ] Health and gold show numbers (not NaN)
- [ ] Refresh a few times - survival message sometimes changes
- [ ] Console (F12) shows no red errors

## Understanding the code

- **How JavaScript connects to HTML:** See [docs/script-tags.md](docs/script-tags.md)
- **Emojis and character encoding:** See [docs/emojis-and-encoding.md](docs/emojis-and-encoding.md)
- **URLs are just strings:** See [docs/urls-are-strings.md](docs/urls-are-strings.md)

## Going further

Finished early? Try these stretch challenges:

1. **Add an inn rest** - Create variables for inn cost (15 gold) and inn healing (30 health). Update gold and health accordingly. Add it to the story.

2. **Add a second enemy** - Create a new enemy type and damage amount. Apply it to health and add to the story.

3. **Calculate a final score** - Create a `finalScore` variable using: `health + (gold * 2)`

4. **Add a difficulty rating** - If `enemyDamage > 20`, set a variable to "Dangerous Quest", otherwise "Easy Quest"

## Troubleshooting

| Problem                     | Solution                                                  |
| --------------------------- | --------------------------------------------------------- |
| Page shows "???" everywhere | Make sure you saved `adventure.js`                        |
| Page won't load             | Check that Live Server is running                         |
| Nothing happens when I save | Make sure you're editing `adventure.js`, not another file |
| Red errors in Console       | Check for typos, missing quotes, or syntax errors         |
| `NaN` appears               | You might be doing math with a string instead of a number |
| "true" or "false" in story  | That's correct! `foundPotion` is a boolean value          |

For detailed examples of mistakes and fixes, see [docs/common-mistakes.md](docs/common-mistakes.md).

## Submitting your work

Follow your instructor's submission guidelines. Typically:

1. Ensure your quest displays correctly
2. Commit your changes
3. Push to your repository

## Beginner's guide

If you're completely new to this:

1. **Don't panic!** - Everyone starts somewhere
2. **Read the comments** - The code has hints to help you
3. **Save often** - See your changes immediately
4. **Use the Console** - F12 shows errors that help you fix problems
5. **Ask for help** - Your instructor and classmates are here to help

## Contributing

This is a classroom assignment. If you find bugs or have suggestions, let your instructor know!

---

_Part of the HAP JavaScript Foundations curriculum_
