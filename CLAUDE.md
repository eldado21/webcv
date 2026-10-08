# webcv

Damian's personal web CV. Static Angular 20 SPA (standalone components, no backend), deployed to GitHub Pages.

## Commands
- `npm install`: install dependencies
- `npm start` (`ng serve`): dev server
- `npm run build`: production build, output goes to `docs/` (gitignored)
- `ng deploy`: publish to GitHub Pages via `angular-cli-ghpages`

## Architecture
- All CV content lives in `src/assets/db.json` (owner, experiences, formations, projects, skills, readings, socialUrls). `ContentService` (`src/app/services/content.service.ts`) fetches that file and returns one top-level key per call.
- `AppComponent` loads each section from `ContentService` and passes it to presentational components in `src/app/components/` (header, experience, skills, project, misc, footer). `SkillsComponent` loads its own data.
- `src/app/detailedproject/` is the project details modal. It wraps a native `<dialog>` (`showModal()`); each project card embeds one and opens it through a template reference. There is no Angular Material, CDK or animations dependency.
- Types for the JSON live in `src/app/interfaces/`. Keep them in sync with `db.json`.
- Styling is plain hand-written CSS, one file per component. Colour tokens and shared classes (`.card-base-container`, `.card-base-content`, `.base-button`) are in `src/styles.css`.
- FontAwesome and Devicon icons are loaded from CDNs in `src/index.html`. Tech icons use the class `devicon-<name lowercased>-plain`, so a technology `name` in `db.json` must match a Devicon name.

## Conventions
- Older commits (Apr 2025) use the prefixes `[ADD]`, `[MOD]`, `[RM]`, `[FIX]`, `[REFACTOR]`, `[WIP]`.
- `.editorconfig` mirrors what the project uses: 4 spaces for HTML, CSS, `db.json` and `src/app/interfaces/*.ts`; 2 spaces for other TypeScript and tool-managed JSON; single quotes in TypeScript.
- Templates use the built-in control flow (`@for`, `@if`), not `*ngFor`/`*ngIf`. Standalone components only import what they use.

## Working rules
- Never commit or push without the user's explicit consent.
- Keep the session human-paced: explain what you intend to do, make small steps, and let the user review before moving on.
- When there is a better way to use Claude Code (prompts, skills, slash commands, workflow), tell the user.

## Known state
- `angular.json` has a `deploy` target for `angular-cli-ghpages`, which is not in `package.json`, so `ng deploy` does not work from a clean install.
- The viewport meta tag is commented out in `src/index.html`, so the site is not mobile friendly yet.
