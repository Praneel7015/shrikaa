# Shrikaa — Static Website

Rebuilt website for **Shrikaa Intellect Innovations**, Bengaluru's affordable coaching institute for 1st & 2nd PUC, CET, NEET, and JEE students.

---

## Pages

| File | Description |
|---|---|
| `index.html` | Homepage — hero, stats, features, AskShrikaa section |
| `about.html` | About — mission, values, CEO quote, presence, donors |
| `academics.html` | Courses / Academics |
| `admissions.html` | Admissions information |
| `results.html` | CET results gallery + college placements |
| `contact.html` | Contact form + Google Maps embed |
| `404.html` | Custom 404 page |

---

## Tech Stack

- Pure HTML5, CSS3, vanilla JavaScript — no frameworks, no build step
- **Fonts:** DM Serif Display + Inter (Google Fonts) · Samarkhan (local, `assets/fonts/`)
- **CSS:** `assets/css/main.css` (design tokens) + `assets/css/components.css` (all components)
- **JS:** `nav.js` · `counter.js` · `reveal.js` · `contact.js`
- Hosting target: **BigRock** static hosting

## Asset Structure

```
assets/
├── css/
│   ├── main.css          # Design tokens, typography, layout
│   └── components.css    # All component styles
├── fonts/
│   └── Samarkhan.TTF     # Brand font
├── images/
│   ├── logo.png          # Transparent mandala logo
│   ├── about/            # CEO portrait, presence photos, donor logos
│   └── results/          # CET rank cards + college placement cards
└── js/
    ├── nav.js            # Scroll-aware nav, mobile menu
    ├── counter.js        # Animated stat counters
    ├── reveal.js         # Scroll-reveal (IntersectionObserver)
    └── contact.js        # Form validation
```

---

## Design System

- **Primary:** Warm white `#F8F6F2` — Charcoal `#1C1C1E`
- **Display font:** DM Serif Display
- **Body font:** Inter
- **Brand font:** Samarkhan (used for logo wordmark)

---

## Sister Platform

[AskShrikaa](https://www.askshrikaa.com) — AI-powered learning companion for KCET, NEET & board exam students. Referenced on the homepage; separate codebase.

---

## Contact

**Shrikaa Intellect Innovations**  
Gopal Krishna Complex, 45/3, Residency Road, Bengaluru 560025  
+91 99023 16289 · write2shrikaa@gmail.com
