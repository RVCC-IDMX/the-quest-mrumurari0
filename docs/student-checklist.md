# Mad Libs Quest checklist

Use this checklist as you work through the assignment. Check off each item to stay on track!

---

## Before you start

- [ ] Opened Chrome (required browser)
- [ ] Started Live Server (right-click index.html)
- [ ] Opened Console (F12) and kept it visible

---

## Part 1: Hero facts

- [ ] Filled in all 5 strings (no empty `""` left behind)
- [ ] Used straight quotes `"` not curly quotes `"`

---

## Parts 2-3: Don't skip these!

**No code to write here - just read and understand!**

- [ ] Studied the pattern: `health = health - enemyDamage`
- [ ] Noticed: `let` = will change, `const` = stays the same

---

## Part 4: The adventure

- [ ] `gold = gold + treasureFound` (not just `= treasureFound`)
- [ ] `potionHealing = choose(foundPotion, 25, 0)`
- [ ] `health = health + potionHealing`
- [ ] **Completed all 3 lines**

---

## Part 5: Template literal

- [ ] Capitalization matters! `questItem` not `questitem`
- [ ] You CAN reuse variables - `heroName` appears twice!
- [ ] Line 80 trap: after the emoji goes `heroName`, not `heroEmoji`
- [ ] Typed variable names inside `${}`, didn't delete the braces

---

## Part 6: Survival check

- [ ] Used `>` for comparison (not `=`)
- [ ] Copied exact message text: `"Quest Complete!"` and `"Quest Failed..."`

---

## After each save

- [ ] Browser shows your story (no `???` placeholders)
- [ ] No `undefined` or `NaN` appearing
- [ ] Console (F12) has no red errors
- [ ] Refreshed a few times - survival message changes randomly

---

## Quick reference: Available variables

| Variable        | Type    | Example value            |
| --------------- | ------- | ------------------------ |
| `heroName`      | string  | `"Luna the Brave"`       |
| `heroEmoji`     | string  | `"🧙"`                   |
| `questItem`     | string  | `"Golden Keyboard"`      |
| `questLocation` | string  | `"Whispering Mountains"` |
| `enemyType`     | string  | `"Shadow Dragon"`        |
| `health`        | number  | `100` (changes!)         |
| `gold`          | number  | `20` (changes!)          |
| `enemyDamage`   | number  | random 10-30             |
| `treasureFound` | number  | random 25-75             |
| `foundPotion`   | boolean | `true` or `false`        |
| `potionHealing` | number  | `25` or `0`              |
| `survived`      | boolean | `true` or `false`        |

---

## Stuck? Try these steps

1. **Check the Console** (F12) - red errors tell you the line number
2. **Check capitalization** - JavaScript is case-sensitive
3. **Check for typos** - compare your code to the examples
4. **Save the file** - changes won't appear until you save (Ctrl+S / Cmd+S)
5. **Ask for help** - your instructor and classmates are here for you!
