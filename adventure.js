// =============================================
// MAD LIBS QUEST - Your Adventure Awaits!
// =============================================
// Complete each section by following the instructions.
// Run the page in your browser to see your quest unfold!

// NOTE: choose(), coinFlip(), and randomBetween() are custom helper
// functions provided in helpers.js - they're not standard JavaScript!
// See helpers.js if you're curious how they work.

// ---------------------------------------------
// PART 1: HERO FACTS (use const - these don't change)
// ---------------------------------------------
// Fill in the empty strings with your hero's details
// Tip: See docs/emojis-and-encoding.md for emoji ideas!

const heroName = "Talia";        // Your hero's name (e.g., "Luna the Brave")
const heroEmoji = "🧝‍♀️";       // Your hero's emoji (e.g., "🧙" or "⚔️")
const questItem = "a magic crystal";       // What they're seeking (e.g., "Golden Keyboard")
const questLocation = "an enchanted forest";        // Where the quest takes place (e.g., "Whispering Mountains")
const enemyType = "goblins";       // What attacks them (e.g., "Shadow Dragon")

// ---------------------------------------------
// PART 2: STARTING STATUS (study this pattern!)
// ---------------------------------------------
// No code to write here - just read and understand!
// IMPORTANT: Notice how Part 4 uses the pattern: health = health - enemyDamage
// You'll write similar code there!

let health = 100;           // Starting health points
let gold = 20;              // Starting gold coins

// ---------------------------------------------
// PART 3: RANDOM EVENTS (study these examples!)
// ---------------------------------------------
// No code to write here - just read and understand!
// These show how the helper functions work.
// You'll use choose() in Parts 4 and 6!

const enemyDamage = randomBetween(10, 30);    // Random damage 10-30
const treasureFound = randomBetween(25, 75);  // Random gold 25-75
const foundPotion = coinFlip();               // true or false randomly

// ---------------------------------------------
// PART 4: THE ADVENTURE (update health and gold)
// ---------------------------------------------
// Write expressions to update your hero's status

// The enemy attacks! Subtract enemyDamage from health
health = health - enemyDamage;

// TODO: Add treasureFound to gold
gold = gold + treasureFound;

// TODO: If foundPotion is true, add 25 to health using choose()
// Hint: choose(foundPotion, 25, 0) returns 25 if true, 0 if false
const potionHealing = choose(foundPotion, 25, 0);
health = health + potionHealing;

// =============================================
// QUICK REFERENCE - Variables you can use:
// heroName, heroEmoji, questItem, questLocation, enemyType
// enemyDamage, treasureFound, foundPotion, potionHealing
// Tip: You can use the same variable more than once!
// Tip: If you see "undefined", check Console (F12) for errors!
// =============================================

// ---------------------------------------------
// PART 5: THE STORY (template literal)
// ---------------------------------------------
// Fill in the ${} expressions to tell the story

const storyText = `
${heroEmoji} ${heroName} ventured into the ${questLocation}
searching for the ${questItem}.

A wild ${enemyType} attacked!
Damage taken: ${enemyDamage};

${heroEmoji} ${heroName} found a chest containing ${treasureFound} gold!

Found a potion: ${foundPotion} | Healed: ${potionHealing}
`;

// ---------------------------------------------
// PART 6: SURVIVAL CHECK (comparison + choose)
// ---------------------------------------------
// Did your hero survive? Health must be greater than 0

// TODO: Create a boolean - is health greater than 0?
const survived = health > 0;

// TODO: Use choose() to pick the right message
// If survived is true: "Quest Complete!"
// If survived is false: "Quest Failed..."
const survivalMessage = choose(survived, "Quest Complete!", "Quest Failed...");

// ---------------------------------------------
// SHOW THE RESULTS
// ---------------------------------------------
// This line updates the display - don't edit it!

updateQuest();
