# Emojis and character encoding

Ever wonder how your computer knows to display 🐉 instead of just the letters "dragon"? This guide explores the fascinating history of how computers learned to speak emoji.

## The journey from letters to emoji

### 1960s: ASCII - The beginning

**ASCII** (American Standard Code for Information Interchange) was one of the first character encoding systems. It used 7 bits to represent 128 characters:

- Uppercase letters: A-Z (65-90)
- Lowercase letters: a-z (97-122)
- Numbers: 0-9 (48-57)
- Punctuation and symbols: ! @ # $ % etc.
- Control characters: newline, tab, etc.

```
A = 65
B = 66
a = 97
! = 33
```

**The limitation:** ASCII was designed for English. No accents, no other alphabets, definitely no emoji.

### 1980s-90s: Extended ASCII and chaos

Different companies created their own "extended" ASCII systems to add more characters (accents, symbols, other alphabets). But your computer might display something different than your friend's computer!

This was a mess. A document written in one country might look like gibberish in another.

### 1990s-2000s: Unicode to the rescue

**Unicode** was created to include EVERY character from EVERY writing system in the world - plus symbols, and eventually, emoji.

Instead of 128 characters, Unicode can represent over 149,000 characters (and growing)!

- Latin alphabets (English, Spanish, French...)
- Cyrillic (Russian)
- Chinese, Japanese, Korean characters
- Arabic, Hebrew, Thai...
- Mathematical symbols
- Musical notation
- And yes... emoji!

### 2010s-Now: The emoji explosion

The first emoji were created in Japan in 1999 for mobile phones. When Apple added emoji to the iPhone in 2011, they went global.

Now there are over 3,600 emoji, with new ones added every year!

## How emoji work in code

Emoji are just characters, like letters. You can use them directly in JavaScript strings:

```javascript
const heroEmoji = "🧙";
const message = "The wizard 🧙 cast a spell!";
```

JavaScript treats emoji like any other character. You can:

- Store them in variables
- Include them in template literals
- Concatenate them with other strings

```javascript
const hero = "Luna";
const emoji = "⚔️";
const intro = `${emoji} ${hero} drew their sword ${emoji}`;
// Result: "⚔️ Luna drew their sword ⚔️"
```

## Finding emoji to use

### Method 1: Emoji picker (easiest)

**Windows:** Press `Win + .` (Windows key + period)
**Mac:** Press `Cmd + Ctrl + Space`

This opens an emoji picker where you can search and click to insert.

### Method 2: Copy from websites

Great emoji reference sites:

- [Emojipedia](https://emojipedia.org) - Search and copy any emoji
- [Unicode.org Emoji List](https://unicode.org/emoji/charts/full-emoji-list.html) - The official list
- [GetEmoji](https://getemoji.com) - Simple copy-paste interface

### Method 3: From other apps

Copy emoji from text messages, social media, or anywhere else you see them!

## Emoji categories for your quest

Here are some useful emoji for Mad Libs Quest:

### Heroes and characters

```
🧙 Wizard       🧝 Elf          🧛 Vampire
⚔️ Knight       🏹 Archer       🗡️ Rogue
🦸 Hero         🧚 Fairy        🤺 Fencer
👸 Princess     🤴 Prince       👑 Royalty
```

### Enemies and creatures

```
🐉 Dragon       🐺 Wolf         🦇 Bat
👹 Ogre         👻 Ghost        🧟 Zombie
🦂 Scorpion     🕷️ Spider       🐍 Snake
👿 Demon        🤖 Robot        👾 Alien
```

### Locations

```
🏰 Castle       🌲 Forest       ⛰️ Mountain
🏜️ Desert       🌊 Ocean        🌋 Volcano
🗻 Peak         🏕️ Camp         🌙 Night
☀️ Day          🌧️ Storm        ❄️ Winter
```

### Items and treasure

```
💎 Gem          💰 Gold         🗝️ Key
📜 Scroll       🧪 Potion       🛡️ Shield
🗡️ Sword        🏹 Bow          🔮 Crystal
👑 Crown        💍 Ring         📿 Amulet
```

### Status and results

```
❤️ Health       💔 Hurt         💀 Death
✅ Success      ❌ Failure      ⭐ Star
🏆 Trophy       🎉 Celebration  😵 Defeated
💪 Strong       🩹 Wounded      ✨ Magic
```

## Fun facts

1. **The first emoji** were created by Shigetaka Kurita in 1999 for a Japanese mobile carrier. The original set had only 176 emoji!

2. **Emoji means "picture character"** in Japanese (絵文字): e (絵 = picture) + moji (文字 = character)

3. **Each emoji has a code point.** For example:
   - 🐉 Dragon = U+1F409
   - ⚔️ Crossed Swords = U+2694
   - 💎 Gem = U+1F48E

4. **Emoji look different** on different devices. Apple, Google, Microsoft, and Samsung all design their own versions of each emoji.

5. **New emoji are proposed** to the Unicode Consortium. Anyone can submit a proposal! Recent additions include 🥷 ninja and 🪄 magic wand.

## Try it in your quest

In `adventure.js`, you can add emoji to make your quest more visual:

```javascript
const heroEmoji = "🧙"; // Pick your hero's emoji!
const enemyEmoji = "🐉"; // What attacks them?
const treasureEmoji = "💎"; // What do they find?
```

Then use them in your story:

```javascript
const storyText = `
${heroEmoji} ${heroName} ventured into the ${questLocation}...

${enemyEmoji} A wild ${enemyType} attacked!

${treasureEmoji} Found treasure worth ${treasureFound} gold!
`;
```

Your quest, your emoji, your story!
