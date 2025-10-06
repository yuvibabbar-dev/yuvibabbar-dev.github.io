Yuvi Babbar — Portfolio

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

