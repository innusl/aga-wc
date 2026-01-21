# GitHub Pages Setup Guide

When you're ready to deploy this site to GitHub Pages, follow these steps:

## 1. Create GitHub Repository

```bash
# On GitHub, create a new repository (e.g., aga-wc)
# Then add it as a remote:
git remote add origin https://github.com/YOUR_USERNAME/aga-wc.git
```

## 2. Push to GitHub

```bash
# Push your code to GitHub
git push -u origin main
```

## 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select branch: **main**
5. Select folder: **/ (root)**
6. Click **Save**

## 4. Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/aga-wc/
```

## Notes

- GitHub Pages may take a few minutes to build and deploy
- Make sure your repository is public (or you have GitHub Pro for private repos)
- The site is already configured to work from the root directory
- All paths are relative, so they'll work on GitHub Pages automatically

## Updating the Site

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically rebuild and deploy your changes.
