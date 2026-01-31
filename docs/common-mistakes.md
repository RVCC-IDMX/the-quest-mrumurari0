# Common mistakes and how to fix them

This guide shows examples of mistakes students frequently make, along with the correct versions.

## Part 1: Hero facts

### Mistake: Forgetting quotes around strings

```javascript
// WRONG - missing quotes
const heroName = Luna;

// CORRECT - strings need quotes
const heroName = "Luna";
```

**Error you'll see:** `Uncaught ReferenceError: Luna is not defined`

### Mistake: Using the wrong kind of quotes

```javascript
// WRONG - curly quotes (copied from Word or some websites)
const heroName = "Luna";

// CORRECT - straight quotes
const heroName = "Luna";
```

**Tip:** Always type quotes directly in VS Code, don't copy/paste from Word or Google Docs.

### Mistake: Leaving strings empty

```javascript
// WRONG - empty strings show nothing
const heroName = "";

// CORRECT - fill in your values
const heroName = "Luna the Brave";
```

---

## Part 4: The adventure

### Mistake: Missing the variable name in assignment

```javascript
// WRONG - incomplete statement
gold = ;

// CORRECT - add treasureFound to gold
gold = gold + treasureFound;
```

**Error you'll see:** `Uncaught SyntaxError: Unexpected token ';'`

### Mistake: Using the wrong operator

```javascript
// WRONG - this sets gold to treasureFound (loses original gold!)
gold = treasureFound;

// CORRECT - adds to existing gold
gold = gold + treasureFound;
```

### Mistake: Forgetting parentheses with choose()

```javascript
// WRONG - missing arguments
const potionHealing = choose;

// CORRECT - call the function with arguments
const potionHealing = choose(foundPotion, 25, 0);
```

**Error you'll see:** `The page shows a function definition instead of a number`

### Mistake: Wrong order of arguments in choose()

```javascript
// WRONG - condition should come first
const potionHealing = choose(25, foundPotion, 0);

// CORRECT - choose(condition, valueIfTrue, valueIfFalse)
const potionHealing = choose(foundPotion, 25, 0);
```

### Mistake: Putting quotes around numbers

```javascript
// WRONG - "25" is a string, not a number!
const potionHealing = choose(foundPotion, "25", "0");
// This causes health to become 7025 instead of 95!

// CORRECT - numbers don't need quotes
const potionHealing = choose(foundPotion, 25, 0);
```

**Why this happens:** In Part 1, you used quotes for strings like `"Luna"`. But numbers like `25` don't need quotes. If you add `"25"` to `70`, JavaScript "glues" them together as text: `"70" + "25"` = `"7025"`.

---

## Part 5: The story (template literal)

### Mistake: Forgetting the dollar sign

```javascript
// WRONG - missing $
const storyText = `{heroName} ventured forth`;

// CORRECT - need ${} for interpolation
const storyText = `${heroName} ventured forth`;
```

### Mistake: Using wrong brackets

```javascript
// WRONG - using parentheses or square brackets
const storyText = `$(heroName) ventured forth`;
const storyText = `$[heroName] ventured forth`;

// CORRECT - use curly braces
const storyText = `${heroName} ventured forth`;
```

### Mistake: Using regular quotes instead of backticks

```javascript
// WRONG - regular quotes don't support ${}
const storyText = "${heroName} ventured forth";

// CORRECT - backticks enable template literals
const storyText = `${heroName} ventured forth`;
```

**How to tell:** Look at your keyboard - the backtick ` is usually on the same key as ~ (tilde), in the top-left corner.

### Mistake: Putting the variable name in quotes

```javascript
// WRONG - this prints the literal text "heroName"
const storyText = `${"heroName"} ventured forth`;

// CORRECT - no quotes around the variable name
const storyText = `${heroName} ventured forth`;
```

---

## Part 6: Survival check

### Mistake: Using = instead of > for comparison

```javascript
// WRONG - this assigns 0 to survived
const survived = (health = 0);

// CORRECT - use > to compare
const survived = health > 0;
```

### Mistake: Returning a string instead of using choose()

```javascript
// WRONG - this always shows "Quest Complete!"
const survivalMessage = "Quest Complete!";

// CORRECT - use choose() to pick based on survived
const survivalMessage = choose(survived, "Quest Complete!", "Quest Failed...");
```

---

## General mistakes

### Mistake: Wrong capitalization (case sensitivity)

```javascript
// WRONG - lowercase 'i' in questitem
const story = `Searching for the ${questitem}`;

// CORRECT - capital 'I' in questItem
const story = `Searching for the ${questItem}`;
```

JavaScript is case-sensitive! `questItem` and `questitem` are completely different. If you see `undefined`, check your spelling AND capitalization.

### Mistake: Editing the wrong file

If you save changes but nothing updates:

1. Check you're editing `adventure.js`, not another file
2. Look at the tab in VS Code - is it `adventure.js`?

### Mistake: NaN appearing in the page

`NaN` means "Not a Number" - you're doing math with something that isn't a number.

```javascript
// WRONG - heroName is a string, not a number
health = health + heroName;

// CORRECT - only do math with numbers
health = health + potionHealing;
```

### Mistake: undefined appearing in the page

This means a variable doesn't have a value yet.

```javascript
// WRONG - variable declared but not assigned
let myValue;
console.log(myValue); // Shows: undefined

// CORRECT - assign a value
let myValue = 42;
console.log(myValue); // Shows: 42
```

---

## Quick reference: What the symbols mean

| Symbol     | Name          | Used for                                   |
| ---------- | ------------- | ------------------------------------------ |
| `"` or `'` | Quotes        | Creating strings                           |
| `` ` ``    | Backtick      | Template literals                          |
| `${}`      | Interpolation | Inserting variables into template literals |
| `=`        | Assignment    | Giving a variable a value                  |
| `+`        | Plus          | Addition or string concatenation           |
| `-`        | Minus         | Subtraction                                |
| `>`        | Greater than  | Comparison (returns true/false)            |
| `()`       | Parentheses   | Calling functions                          |

---

## Still stuck?

1. Check the Console (F12) for error messages
2. Read the error carefully - it tells you the line number
3. Compare your code to the examples above
4. Ask your instructor or a classmate for help
