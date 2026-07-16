# Frontend JavaScript Architecture

This folder now powers a static landing page only.

## Runtime Layout

- Development runtime:
  - JS/CSS assets: `static/`
  - HTML template: `templates/index.html`
  - Script paths use `/static/...`
- Hosting runtime:
  - JS/CSS assets: `public/static/`
  - HTML file: `public/index.html`
  - Script paths use `static/...`

## Active Script

- `web-translations.js`: handles language switching, localized labels, and menu behavior on `index.html`.

No backend calls, Firebase/App Check logic, or chat runtime are loaded by `index.html`.

## Load Order (Required)

```html
<script src="/static/js/web-translations.js"></script>
```

## Frontend Maintenance Rules

- Keep `templates/index.html` and deployed `public/index.html` behaviorally equivalent.
- Keep `static/*` and `public/static/*` synchronized when editing assets.
- Keep the page static: do not add backend API calls or Firebase initialization.
