# Multimodal Project Page

This folder is a GitHub Pages-ready static version of the AI and Creativity project.

## Deploy it to your site

1. Copy this entire `multimodal-project/` folder into the root of your `minovermax.github.io` repository.
2. Commit and push the change.
3. After GitHub Pages finishes rebuilding, the page should be available at:

   `https://minovermax.github.io/multimodal-project/`

## Why this URL works

Your GitHub Pages repo is the user-site repository (`minovermax.github.io`), and its current `_config.yml` uses:

- `url: https://minovermax.github.io`
- `baseurl: ""`

That means a root-level folder named `multimodal-project` maps cleanly to `/multimodal-project/`.

## Notes

- No homepage button or nav link is required for the page to be reachable.
- All page assets are relative (`./styles.css`, `./script.js`), so the folder is portable.
- This version does not depend on React, Tailwind, Framer Motion, or shadcn/ui.
