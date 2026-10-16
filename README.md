# Engineering Portfolio

My engineering portfolio website: plain HTML/CSS/JS, hosted free on GitHub Pages.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page: intro, about, skills, project cards, contact |
| `projects/project-1.html` | Mechanical project case study (template) |
| `projects/project-2.html` | Software project case study (template) |
| `css/style.css` | All styling. Change `--accent` at the top to change the colour scheme |
| `js/main.js` | Mobile menu, project filters, click-to-enlarge images |
| `images/` | Photos. Use one folder per project, e.g. `images/project-1/` |
| `cv.pdf` | Your CV (add this yourself) |

## 1. Fill in your content

1. Open the folder in VS Code and search for `TODO` (Ctrl+Shift+F) to find every placeholder.
2. Replace `you@example.com`, `your-profile` and `your-username` everywhere.
3. Add photos:
   - Profile photo: `images/profile.jpg`
   - Project photos: `images/project-1/render.jpg` and so on
   - Then change each `src="...placeholder.svg"` to point at your image.
   - Resize photos to about 1600px wide and under ~400 KB so the site loads fast (Windows Photos → Resize, or https://squoosh.app).
4. Save your CV as `cv.pdf` in the main folder.
5. To preview, double-click `index.html` to open it in your browser.

**Adding a new project:** copy `projects/project-1.html` to a new name (e.g. `projects/drone-frame.html`), edit it, then copy one of the `<a class="project-card">` blocks in `index.html` and point it at the new page.

## 2. One-time publishing setup

1. Create a free account at https://github.com. Choose a professional username, because it becomes your website address.
2. Install Git. In PowerShell, run:
   ```
   winget install Git.Git
   ```
   Close and reopen the terminal, then run:
   ```
   git config --global user.name "Ben Altangerel"
   git config --global user.email "your-github-email@example.com"
   ```
3. On GitHub, click **New repository**. Name it exactly `USERNAME.github.io` (with your username), set it to **Public**, and don't tick "Add a README".
4. In this folder, run:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
   git push -u origin main
   ```
   A browser window will ask you to sign in to GitHub the first time.
5. On GitHub, open the repo → **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: `main`, folder `/ (root)` → **Save**.
6. After 1–2 minutes your site is live at **https://USERNAME.github.io**.

## 3. Updating the site later

Edit files, then run:
```
git add .
git commit -m "Describe what you changed"
git push
```
The live site updates within a minute or two.

## 4. Put it on your CV

In Word, type the address (e.g. `USERNAME.github.io`), select it, press **Ctrl+K** and paste the full `https://` link. Export the CV as PDF; the link stays clickable. Click it in the PDF to check it works.

## Keeping it online

- GitHub Pages is free and doesn't expire. Keep the repo public.
- Limits: 1 GB site size, 100 GB/month traffic, far more than a portfolio needs.
- Put videos on YouTube (unlisted) and link to them instead of uploading large files.
