# webcv

Damian's personal web CV. Static Angular 19 SPA (standalone components, no backend), deployed to GitHub Pages.

## Commands
- `npm install`: install dependencies
- `npm start` (`ng serve`): dev server
- `npm run build`: production build, output goes to `docs/` (gitignored)
- `npm test`: Karma/Jasmine (currently no spec files exist)
- `ng deploy`: publish to GitHub Pages via `angular-cli-ghpages`

## Architecture
- All CV content lives in `src/assets/db.json` (owner, experiences, formations, projects, skills, readings, socialUrls). `ContentService` (`src/app/services/content.service.ts`) fetches that file and returns one top-level key per call.
- `AppComponent` loads each section from `ContentService` and passes it to presentational components in `src/app/components/` (header, experience, skills, project, misc, footer). `SkillsComponent` loads its own data.
- `src/app/detailedproject/` is the Angular Material dialog opened from a project card (`ProjectComponent.openModal`).
- Types for the JSON live in `src/app/interfaces/`. Keep them in sync with `db.json`.
- Styling is plain hand-written CSS, one file per component. Colour tokens and shared classes (`.card-base-container`, `.card-base-content`, `.base-button`) are in `src/styles.css`.
- FontAwesome and Devicon icons are loaded from CDNs in `src/index.html`. Tech icons use the class `devicon-<name lowercased>-plain`, so a technology `name` in `db.json` must match a Devicon name.

## Conventions
- Older commits (Apr 2025) use the prefixes `[ADD]`, `[MOD]`, `[RM]`, `[FIX]`, `[REFACTOR]`, `[WIP]`.
- `.editorconfig` says 2-space indent and single quotes in TypeScript. In practice `db.json`, the interfaces and the HTML templates use 4 spaces, so match the file you are editing.

## Working rules
- Never commit or push without the user's explicit consent.
- Keep the session human-paced: explain what you intend to do, make small steps, and let the user review before moving on.
- When there is a better way to use Claude Code (prompts, skills, slash commands, workflow), tell the user.

## Known state
- The project detail modal is unfinished (WIP commits). `ProjectComponent` creates `MatDialog` with `new` instead of injecting it, and `DetailedProjectComponent` still has `console.log` debug code.
- Unused leftovers: `leaflet`, `@types/leaflet`, the leaflet CSS entry in `angular.json`, the `npm` dependency, and `latlng` in the `Experience` interface.
- The viewport meta tag is commented out in `src/index.html`, so the site is not mobile friendly yet.
