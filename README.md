# 🧟 Vanilla's Camo Zombies Tracker [BO6] 🧟

A comprehensive, browser-based progress tracker for unlocking camos in **Call of Duty: Black Ops 6 Zombies** mode. Track your progress across all 67 weapons and 1,005 total camos with an intuitive, color-coded interface.

[![GitHub Or Local Usage](https://img.shields.io/badge/Offline%20Usage%20or-%20Online%20Usage-4ecca3?style=for-the-badge)](https://vanillachan6571.github.io/VanillaCamoZombieTracker/)
[![License](https://img.shields.io/badge/License-MIT-e94560?style=for-the-badge)](LICENSE)

---

## ✨ Features

- **🎯 Complete Weapon Coverage**: Track all 67 weapons across 10 categories
- **📊 Real-time Progress Tracking**: Live updates showing completed camos and weapons
- **💾 Persistent Storage**: Your progress is automatically saved to browser localStorage
- **📤 Export/Import**: Backup and restore your progress with JSON files
- **🎨 Beautiful UI**: Dark-themed, color-coded interface with smooth animations
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **⚡ No Dependencies**: Pure vanilla JavaScript - no frameworks or build process required
- **🔒 Privacy First**: All data stored locally in your browser - no server, no tracking

---

## 🚀 Live GitHub Page

**[Use it now!](https://vanillachan6571.github.io/VanillaCamoZombieTracker/)**

---

## 📋 Camo Structure

Each weapon has **15 total camos** to unlock:

### Military Camos (9)
- Slate (100 Critical Kills)
- Desert (200 Critical Kills)
- Evergreen (300 Critical Kills)
- Rugged (400 Critical Kills)
- Grim (600 Critical Kills)
- Moss (800 Critical Kills)
- Sahara (1000 Critical Kills)
- Tigris (1500 Critical Kills)
- Stripe (2000 Critical Kills)

### Special Camos (2)
Unique challenges per weapon (varies by weapon type)

### Mastery Camos (4)
- **Mystic Gold** - Unlock all Special camos for the weapon
- **Opal** - Unlock Mystic Gold on all weapons in the category
- **Afterlife** - Unlock Opal on all weapon categories
- **Nebula** - Unlock Afterlife on all weapons

---

## 🎮 Weapon Categories

The tracker includes all 10 weapon categories:

| Category | Weapons |
|----------|---------|
| 🔫 Assault Rifles | 8 weapons |
| 🔫 SMGs | 8 weapons |
| 🔫 Shotguns | 4 weapons |
| 🔫 LMGs | 4 weapons |
| 🔫 Marksman Rifles | 6 weapons |
| 🔫 Sniper Rifles | 5 weapons |
| 🔫 Pistols | 6 weapons |
| 🚀 Launchers | 3 weapons |
| ⚡ Specials | 14 weapons |
| 🔪 Melee | 9 weapons |

**Total: 67 weapons × 15 camos = 1,005 camos**

---

## 💡 How to Use

### Basic Usage

1. **Select a Category**: Click any weapon category tab at the top
2. **Check Off Camos**: Click checkboxes as you complete challenges
3. **Track Progress**: View your overall progress at the top of the page
4. **Quick Complete**: Use the "Complete" button to mark all camos for a weapon
5. **Collapse Weapons**: Click weapon names to expand/collapse for easier navigation

### Progress Tracking

- **Overall Progress**: Displays total camos completed (X / 1005)
- **Weapon Progress**: Shows how many weapons are fully complete (X / 67)
- **Color Indicators**:
  - ✅ Completed weapons show in green
  - Completed camos are struck through

### Export & Import

**Export Your Progress:**
1. Scroll to the bottom of the page
2. Click "Export Progress"
3. A JSON file will download with format: `bo6-camo-backup-YYYY-MM-DD.json`

**Import Your Progress:**
1. Click "Import Progress" at the bottom
2. Select your previously exported JSON file
3. Confirm the import (⚠️ this will replace current progress)

**Reset Progress:**
- Click "Reset All Progress" to clear all data (requires confirmation)

---

## 🛠️ Local Development

### Prerequisites

You need either **Python** or **Node.js** installed to run a local server.

### Option 1: Python

```bash
# Clone the repository
git clone https://github.com/vanillachan6571/VanillaCamoZombieTracker.git
cd VanillaCamoZombieTracker

# Start a local server
python -m http.server 3080

# Open in browser
# Navigate to: http://localhost:3080
```

### Option 2: Node.js

```bash
# Clone the repository
git clone https://github.com/vanillachan6571/VanillaCamoZombieTracker.git
cd VanillaCamoZombieTracker

# Start a local server using npx
npx serve .

# Open the URL shown in terminal (usually http://localhost:3000)
```

---

## 📁 Project Structure

```
VanillaCamoZombieTracker/
├── index.html              # Main application (HTML + CSS + JS)
├── categories/             # Weapon category HTML fragments
│   ├── assault-rifles.html
│   ├── smgs.html
│   ├── shotguns.html
│   ├── lmgs.html
│   ├── marksman-rifles.html
│   ├── sniper-rifles.html
│   ├── pistols.html
│   ├── launchers.html
│   ├── specials.html
│   └── melee.html
├── favicon/                # Favicon assets
├── CLAUDE.md              # Development guide for Claude Code
└── README.md              # This file
```

---

## 🔧 Technologies Used

- **HTML5** - Structure and markup
- **CSS3** - Styling with Grid, Flexbox, and animations
- **Vanilla JavaScript** - No Framework
- **LocalStorage API** - Client-side data persistence
- **GitHub Pages** - Use GitHub Page or Local Usage for Offline Needs.

---

## 🎨 Design Features

- **Color Scheme**:
  - Dark blue background (#1a1a2e, #0f3460)
  - Teal/Green accents (#4ecca3)
  - Pink/Red highlights (#e94560, #ff69b4)
  - Orange accents (#ff8c00)

- **Responsive Layout**: Adapts to all screen sizes
- **Smooth Animations**: CSS transitions for collapsing, hovering
- **Intuitive UI**: Clear visual hierarchy and user feedback

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the tracker:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/FeatureRequest`)
3. Commit your changes (`git commit -m 'Add some FeatureRequest'`)
4. Push to the branch (`git push origin feature/FeatureRequest`)
5. Open a Pull Request

### Adding New Weapons

When new weapons are added to BO6 Zombies:

1. Add weapon HTML to appropriate category file in `categories/`
2. Use kebab-case for `data-weapon` attribute (e.g., `data-weapon="new-gun"`)
3. Include exactly 15 camos (9 military + 2 special + 4 mastery)
4. Update `totalCamos` and `totalWeapons` in `updateProgress()` function

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Treyarch & Activision** - For Call of Duty: Black Ops 6
- **Community** - For feedback and support
- Built with ❤️ by Vanilla

---

## 📞 Support

If you encounter any issues or have suggestions:
- Open an [Issue](https://github.com/vanillachan6571/VanillaCamoZombieTracker/issues)
- Star ⭐ this repository if you find it useful!

---

**Last Updated**: 10/21/2025
**Last Added**: Chainsaw [Melee]

---

<div align="center">

### Happy Grinding! 🧟‍♂️💀🧟‍♀️

</div>
