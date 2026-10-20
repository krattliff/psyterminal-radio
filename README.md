# PsyTerminal Radio

A dark, minimal DJ mix archive and broadcast site.

Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build step. Deploy anywhere.

---

## Features

- **Mix archive** — numbered transmissions with descriptions, genre tags, and durations
- **Tracklist modals** — click "Tracklist" on any mix to see the full track-by-track breakdown
- **Sticky audio player** — persists at the bottom of the page as you scroll
- **Upload zone** — drag-and-drop or click-to-upload (MP3, WAV, FLAC, AIFF)
- **Scrolling signal ticker** — live broadcast feel
- **Fully responsive** — works on mobile and desktop

---

## Getting started

No build step required. Just clone and open.

```bash
git clone https://github.com/YOUR_USERNAME/psyterminal-radio.git
cd psyterminal-radio
open index.html
```

Or run a local server (recommended, so fonts load correctly):

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then open `http://localhost:8000` in your browser.

---

## Project structure

```
psyterminal-radio/
├── index.html    # Markup and layout
├── style.css     # All styles and theming
├── app.js        # Mix data, player, modal, upload logic
└── README.md
```

---

## Adding mixes

Open `app.js` and add a new entry to the `MIXES` array at the top of the file:

```js
{
  id: "048",                          // Transmission number (shown as label)
  title: "Your Mix Title",
  date: "Jul 2026",
  bpm: "140 BPM",
  duration: "1:45:00",
  genre: "Psytrance",                 // Shown in player and modal header
  tagClass: "tag-psytrance",          // CSS class: tag-psytrance | tag-techno | tag-progressive | tag-ambient
  description: "Your mix description goes here.",
  tracklist: [
    { artist: "Artist Name", title: "Track Title", time: "0:00" },
    { artist: "Artist Name", title: "Track Title", time: "7:22" },
    // ...
  ],
},
```

The mix will appear automatically in the archive. No other changes needed.

---

## Genre tags

Four genres are pre-styled. Add more in `style.css` if needed.

| Tag class         | Color  | Use for                  |
|-------------------|--------|--------------------------|
| `tag-psytrance`   | Purple | Psytrance, full-on       |
| `tag-techno`      | Red    | Techno, industrial       |
| `tag-progressive` | Green  | Progressive, melodic     |
| `tag-ambient`     | Blue   | Ambient, downtempo       |

---

## Deploying

### GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your site will be live at `https://YOUR_USERNAME.github.io/psyterminal-radio`

### Netlify / Vercel

Drag the project folder into [netlify.com/drop](https://netlify.com/drop) or connect your GitHub repo — no config needed.

---

## Customisation

| What | Where |
|------|-------|
| Site name & tagline | `index.html` — `.logo` and `.hero` |
| Color palette | `style.css` — `:root` CSS variables |
| Social links | `index.html` — `.footer-links` |
| Signal ticker text | `index.html` — `.signal-ticker` |
| About text | `index.html` — `.about-col` sections |
| Fonts | `index.html` — Google Fonts `<link>` and `style.css` `--mono` / `--sans` |

---

## License

MIT — do whatever you like with it. Give credit.
