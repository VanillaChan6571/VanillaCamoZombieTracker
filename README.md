# 🧟 Vanilla's Camo Zombies Tracker [BO6 & BO7] 🧟

A comprehensive, browser-based progress tracker for unlocking camos in **Call of Duty: Black Ops 6 & Black Ops 7 Zombies** modes. Track your progress across all weapons and camos with an intuitive, color-coded interface that supports multiple games!

[![GitHub Or Local Usage](https://img.shields.io/badge/Offline%20Usage%20or-%20Online%20Usage-4ecca3?style=for-the-badge)](https://vanillachan6571.github.io/VanillaCamoZombieTracker/)
[![License](https://img.shields.io/badge/License-MIT-e94560?style=for-the-badge)](LICENSE)

---

## ✨ Features

- **🎮 Multi-Game Support**: Switch between Black Ops 6 and Black Ops 7 with one click
- **🎯 Complete Weapon Coverage**:
  - BO6: 67 weapons, 1,005 total camos (Final Weapons?)
  - BO7: 30 weapons, 480 total camos (New Seasons Should Add Some More)
- **📊 Real-time Progress Tracking**: Caculates and Updates in realtime on your progress when using.
- **💾 Persistent Storage**: Your progress is automatically saved to browser localStorage (separate for each game ;3)
- **📤 Multi-Game Export/Import**: Backup and restore progress for both games with a single JSON file :3
- **🎨 Beautiful UI**: Dark-themed, color-coded interface with smooth animations and camo images
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **⚡ No Dependencies**: Pure vanilla JavaScript - no frameworks or build process required
- **🔒 Privacy First**: All data stored locally in your browser - no server, no tracking

---

## 🚀 Live GitHub Page

**[Use it now!](https://vanillachan6571.github.io/VanillaCamoZombieTracker/)**

---

## 🎮 Game Support

### Black Ops 6 Zombies
- **67 weapons** across 10 categories
- **1,005 total camos** (15 camos per weapon)
- **Camo Structure**: 9 Military + 2 Special + 4 Mastery

### Black Ops 7 Zombies
- **30 weapons** across 9 categories
- **480 total camos** (16 camos per weapon)
- **Camo Structure**: 9 Military + 3 Special + 4 Mastery
- **Less Grindy Than Last Year**: Easier mastery challenges compared to BO6!

---

## 📋 Camo Structure

### Black Ops 6 - 15 Camos per Weapon

**Military Camos (9)** - Critical Kills (Headshots)
- Slate (100), Desert (200), Evergreen (300), Rugged (400), Grim (600), Stripe (800), Oceanic (1000), Whiteout (1500), Purple Tiger (2000)

**Special Camos (2)** - Unique challenges per weapon

**Mastery Camos (4)**
- Mystic Gold, Opal, Afterlife, Nebula

### Black Ops 7 - 16 Camos per Weapon

**Military Camos (9)** - Headshots Only
- Char (100), Tundra (200), Flood Digital (300), Cedar (400), Marshland (500), Mire (600), Ravine (700), Skulk (800), Emerald Snake (1000)

**Special Camos (3)** - Unique challenges per weapon
- Mutilate, Slither, Pathfinder

**Mastery Camos (4)** - Same for all weapons
- **Golden Dragon** - Get 10 Kills Rapidly 15 times
- **Bloodstone** - Get 20+ kills without taking damage 5 times
- **Doomsteel** - Kill 10 Elite Zombies
- **Infestation** - Unlock Doomsteel on ANY 30 weapons

---

## 🎯 Weapon Categories

### Black Ops 6
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

### Black Ops 7
| Category | Weapons |
|----------|---------|
| 🔫 Assault Rifles | 6 weapons |
| 🔫 SMGs | 6 weapons |
| 🔫 Shotguns | 3 weapons |
| 🔫 LMGs | 2 weapons |
| 🔫 Marksman Rifles | 3 weapons |
| 🔫 Sniper Rifles | 3 weapons |
| 🔫 Pistols | 3 weapons |
| 🚀 Launchers | 2 weapons |
| ⚡ Specials | 0 weapons for now|
| 🔪 Melee | 2 weapons |

**Total: 30 weapons × 16 camos = 480 camos**

---

## 💡 How to Use

### Basic Usage

1. **Select Your Game**: Click "Black Ops 6" or "Black Ops 7" at the top
2. **Select a Category**: Click any weapon category tab
3. **Check Off Camos**: Click checkboxes as you complete challenges
4. **Track Progress**: View your overall progress at the top of the page
5. **Quick Complete**: Use the "Complete" button to mark all camos for a weapon
6. **Collapse Weapons**: Click weapon names to expand/collapse for easier navigation

### Game Switching

- Click the **Black Ops 6** or **Black Ops 7** button to switch games
- Your progress for each game is stored separately
- Game selection persists between sessions

### Progress Tracking

- **Overall Progress**: Displays total camos completed (X / Total)
- **Weapon Progress**: Shows how many weapons are fully complete
- **Color Indicators**:
  - ✅ Completed weapons show in green
  - Completed camos are struck through

### Export & Import

**Export Your Progress:**
1. Scroll to the bottom of the page
2. Click "Export Progress"
3. A JSON file will download with format: `camo-tracker-backup-YYYY-MM-DD.json`
4. **Includes data for BOTH games** in a single file!

**Import Your Progress:**
1. Click "Import Progress" at the bottom
2. Select your previously exported JSON file
3. Confirm the import (⚠️ this will replace current progress for both games)
4. **Backwards Compatible**: Also supports old BO6-only backup files

**Reset Progress:**
- Click "Reset All Progress"
- Choose to reset current game only or both games
- Requires confirmation

---

## 🛠️ Local Development

### ⚠️ Important: Local Server Required

**You cannot simply open `index.html` by double-clicking it.** The tracker requires a local web server to load weapon categories due to browser CORS restrictions.

If you try to open the file directly, you'll see a red warning box with instructions.

### Prerequisites

You need either **Python** or **Node.js** installed to run a local server.

### Quick Start (Windows)

**Easiest Method:** Double-click one of the included `.bat` files:
- `Run Local Python Server.bat` - Starts Python server on port 3080
- `Run Local NodeJs Server.bat` - Starts Node.js server

Then open the URL shown in the terminal window.

### Option 1: Python (Recommended)

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

### Troubleshooting

**Seeing a red "Local Server Required" warning?**
- You're opening the file directly (file:// protocol)
- Use one of the server commands above instead
- The app will work normally once running on a local server

---

## 📁 Project Structure

```
VanillaCamoZombieTracker/
├── index.html                 # Main application (HTML + CSS + JS)
├── categories-bo6/            # Black Ops 6 weapon category HTML fragments
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
├── categories-bo7/            # Black Ops 7 weapon category HTML fragments
│   ├── assault-rifles.html
│   ├── smgs.html
│   ├── shotguns.html
│   ├── lmgs.html
│   ├── marksman-rifles.html
│   ├── sniper-rifles.html
│   ├── pistols.html
│   ├── launchers.html
│   ├── specials.html (placeholder)
│   └── melee.html
├── camos/                     # Camo images (BO6 and BO7)
├── styles/                    # CSS files
│   └── global.css
├── favicon/                   # Favicon assets
└── README.md                  # This file
```

---

## 🔧 Technologies Used

- **HTML5** - Structure and markup
- **CSS3** - Styling with Grid, Flexbox, and animations
- **Vanilla JavaScript** - No frameworks, no build process
- **LocalStorage API** - Client-side data persistence
- **GitHub Pages** - Free hosting for online usage

---

## 🎨 Design Features

- **Color Scheme**:
  - Dark blue background (#1a1a2e, #0f3460)
  - Teal/Green accents (#4ecca3)
  - Pink/Red highlights (#e94560, #ff69b4)
  - Orange accents (#ff8c00)

- **Responsive Layout**: Adapts to all screen sizes
- **Camo Images**: Visual previews for completed camos
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

**For Black Ops 6:**
1. Add weapon HTML to appropriate file in `categories-bo6/`
2. Use kebab-case for `data-weapon` attribute (e.g., `data-weapon="new-gun"`)
3. Include exactly 15 camos (9 military + 2 special + 4 mastery)
4. Update `totalCamos` and `totalWeapons` in the `bo6` config object

**For Black Ops 7:**
1. Add weapon HTML to appropriate file in `categories-bo7/`
2. Use kebab-case for `data-weapon` attribute
3. Include exactly 16 camos (9 military + 3 special + 4 mastery)
4. Update `totalCamos` and `totalWeapons` in the `bo7` config object

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Treyarch & Activision** - For Call of Duty: Black Ops 6 & 7
- **Community** - For feedback and support
- Built with ❤️ by Vanilla

---

## 📞 Support

If you encounter any issues or have suggestions:
- Open an [Issue](https://github.com/vanillachan6571/VanillaCamoZombieTracker/issues)
- Star ⭐ this repository if you find it useful!

---

**Last Updated**: 11/14/2025
**BO6 Last Added**: Chainsaw [Melee]
**BO7 Status**: All 30 weapons available!

---

<div align="center">

### Happy Grinding! 🧟‍♂️💀🧟‍♀️

**Now with Black Ops 7 support!**

</div>
