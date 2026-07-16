# EMA Web

Static landing frontend for EMA, deployed on Firebase Hosting.

## Project Layout

- `templates/index.html`: source landing page template
- `static/`: source assets (CSS, JS, images, locales)
- `public/`: generated deploy bundle used by Firebase Hosting
- `deploy-frontend.bat`: builds `public/` and deploys to Firebase
- `firebase.json`: Firebase Hosting config
- `.firebaserc`: local Firebase project alias

## Local Run

### Option 1: simple local static server

```powershell
python serve_frontend.py
```

### Option 2: PowerShell helper

```powershell
./start-frontend.ps1
```

## Deploy

Deploy to the configured Firebase project:

```powershell
./deploy-frontend.bat
```

The script:

1. Rebuilds `public/`
2. Copies `templates/index.html` to `public/index.html`
3. Copies `static/` to `public/static/`
4. Runs `firebase deploy --only hosting`

## Notes

- Edit source files in `templates/` and `static/`, not directly in `public/`.
- Re-run `deploy-frontend.bat` after frontend changes.
