# Call Center on Asterisk — project website

Semestral project for **VoIP I** (Faculty of Electrical Engineering and Computer Science,
VSB-TU Ostrava).

**Authors:** Sergio Alcaide Nieto and Carlos Antonio Alonso Antona

This folder is the repository root for GitHub Pages. The website is static HTML/CSS/JS — no build step
is required.

## Contents

| Path | Description |
|---|---|
| `index.html` | Single-page documentation with the seven sections required by the assignment |
| `css/styles.css` | Styles (sidebar navigation, code listings, responsive layout) |
| `js/main.js` | Scroll-spy navigation and mobile menu |
| `lab/` | Asterisk configuration files and lab guide used by the practical demonstration |

## Publishing on GitHub Pages

1. Create a **public** repository named `voip-callcenter` on GitHub (no README, no `.gitignore` —
   the ones in this folder are ready).
2. Publish this folder as the repository root:

   ```bash
   cd website
   git init
   git add .
   git commit -m "Initial version of the VoIP I project website"
   git remote add origin https://github.com/<YOUR_USERNAME>/voip-callcenter.git
   git branch -M main
   git push -u origin main
   ```

3. In the repository go to **Settings → Pages → Build and deployment** and select
   **Deploy from a branch → main → /(root)**, then Save.
4. After a few seconds the site is available at
   `https://<YOUR_USERNAME>.github.io/voip-callcenter/`.

## Updating the site after the laboratory work

When the real measurements, CDR sample and screenshots from the demonstration are available,
add them to section 4 of `index.html` (the table in §4.8 is intentionally empty until then),
then publish the changes:

```bash
git add .
git commit -m "Add measured results and captures from the lab"
git push
```

GitHub Pages rebuilds automatically within a minute.

## Note about the lab files

The `lab/` files are meant to be copied into the Ubuntu virtual machine running Asterisk
(`/etc/asterisk/`). They are served as plain text by GitHub Pages, so they can also be downloaded
directly from the website.
