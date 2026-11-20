# Call Center on Asterisk — project website

Semestral project for **VoIP I** (Faculty of Electrical Engineering and Computer Science,
VSB-TU Ostrava).

**Authors:** Sergio Alcaide Nieto and Carlos Antonio Alonso Antona

Published as: https://qkizcua2.github.io/voip-callcenter/

The website is static HTML/CSS/JS — no build step is required.

## Contents

| Path | Description |
|---|---|
| `index.html` | Single-page documentation with the seven sections required by the assignment |
| `presentation.html` | 12 slides for the 10-minute presentation (semana 14) |
| `css/styles.css` | Styles (sidebar navigation, code listings, responsive layout) |
| `css/presentation.css` | Dark theme for the slides |
| `js/main.js` | Scroll-spy navigation and mobile menu |
| `js/presentation.js` | Slide navigation: arrows, space, j/k, Esc (open web) |
| `lab/` | Asterisk configuration files and lab guide used by the practical demonstration |

## Repository state

The repository `Qkizcua2/voip-callcenter` exists (public) and already contains this initial
version. GitHub Pages has been enabled with *Deploy from a branch → `main` → `/ (root)`*,
which is why the site is published directly from the repository root.

## Publishing later changes

After the laboratory results, CDR sample and screenshots are available, add them to the
website, then publish the changes:

```bash
git add .
git commit -m "Add measured results and captures from the lab"
git push
```

GitHub Pages rebuilds automatically within a minute.

## Note about the lab files

The `lab/` files are meant to be copied into the Ubuntu virtual machine running Asterisk
(`/etc/asterisk/`). They are served as plain text by GitHub Pages, so they can also be
downloaded directly from the website.
