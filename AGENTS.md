# Jap Gagalac 4th Derby — Base44 Dev Environment

## Stack
- Vite 6 + React 18 + Tailwind CSS 3
- Single-page app, no backend, no external services required

## Running the app
```sh
docker compose -f docker-compose.base44.yml up -d
```
The app is served on host port 3000 (mapped to container port 5173).

## Structure
- `src/App.jsx` — root component, imports all sections
- `src/components/` — one file per page section (Navbar, Hero, About, EventDetails, Breeds, Schedule, Footer)
- `vite.config.js` — dev server binds 0.0.0.0, allowedHosts: true, polling watch enabled

## Notes
- No environment variables or secrets needed
- Dependencies install on container startup via `npm install`
- Live reload is active; edits appear in the preview automatically
