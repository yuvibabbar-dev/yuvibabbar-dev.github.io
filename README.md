# Yuvi Babbar — portfolio, and the Quat site

## Quat — capture it, then be tested on it

Record a lecture, photograph a page, paste a link, or drop in a PDF. Quat turns
what you captured into flashcards that test you on a spaced-repetition
schedule, and **every card is stamped with where it came from**. Free on iPhone
and iPad, no account, and what you capture stays on the device.

- **Site:** <https://yuvibabbar-dev.github.io/quat/>
- **En español:** <https://yuvibabbar-dev.github.io/quat/es/>
- **App Store:** <https://apps.apple.com/app/id6797544518>

### Guides

- [Turn a recorded lecture into flashcards](https://yuvibabbar-dev.github.io/quat/lecture-to-flashcards/)
- [Turn a photo of a page into flashcards](https://yuvibabbar-dev.github.io/quat/photo-to-flashcards/)
- [Turn a link into flashcards](https://yuvibabbar-dev.github.io/quat/link-to-flashcards/)
- [Turn a PDF or document into flashcards](https://yuvibabbar-dev.github.io/quat/pdf-to-flashcards/)
- [How many flashcards per lecture](https://yuvibabbar-dev.github.io/quat/how-many-flashcards-per-lecture/)

### Guías en español

- [Convertir una clase grabada en flashcards](https://yuvibabbar-dev.github.io/quat/es/clase-a-flashcards/)
- [Convertir una foto de una página en flashcards](https://yuvibabbar-dev.github.io/quat/es/foto-a-flashcards/)
- [Convertir un enlace en flashcards](https://yuvibabbar-dev.github.io/quat/es/enlace-a-flashcards/)
- [Convertir un PDF o documento en flashcards](https://yuvibabbar-dev.github.io/quat/es/pdf-a-flashcards/)
- [Cuántas flashcards por clase](https://yuvibabbar-dev.github.io/quat/es/cuantas-flashcards-por-clase/)

[Privacy](https://yuvibabbar-dev.github.io/quat/privacy/) ·
[Support](https://yuvibabbar-dev.github.io/quat/support/)

> The pages under `/quat/` are **generated**. They are built from Markdown by
> `scripts/build-pages.py` in the app repo and copied here — edit them there,
> or the next deploy overwrites the change.

App Store and iPhone are trademarks of Apple Inc., registered in the U.S. and
other countries and regions.

---

## Portfolio

What’s inside
- Static, single‑page portfolio (no build step)
- Fancy animated background, glass cards, and responsive layout
- Data‑driven content via `assets/js/resume-data.js`

Quick start
1) Edit profile and links in `assets/js/resume-data.js` (replace YOUR‑LINKEDIN and YOUR‑GITHUB, tweak summary etc.).
2) Optional: drop your PDF resume in the project root as `resume.pdf` to power the Download button.
3) Open `index.html` in a browser to preview locally.

Deploy to GitHub Pages
Option A — from `main` branch root (no actions):
- Push this folder to a GitHub repository.
- In the repo: Settings → Pages → Build and deployment → Deploy from branch → Branch `main` / folder `/ (root)`.
- Wait for the green check, then visit the URL GitHub shows.

Option B — user/organization site:
- Name the repository `USERNAME.github.io` (replace USERNAME).
- Push to `main`. GitHub Pages will serve it from https://USERNAME.github.io/ automatically.

Customize
- Colors/spacing: adjust CSS variables in `assets/css/style.css:1`.
- Sections: modify rendering or order in `assets/js/app.js` or the data in `assets/js/resume-data.js`.
- Background: starfield and aurora live in CSS + `assets/js/app.js`.

Notes
- No external build tooling is required; everything is vanilla HTML/CSS/JS.
- All content is static and works offline (aside from external links).

