# webcv

Damian's personal web CV. Static Angular 20 SPA (standalone components, no backend), deployed to GitHub Pages.

## Commands
- `npm start`: dev server
- `npm run build`: production build, output in `docs/browser` (`docs/` is gitignored)

## Architecture
- All CV content lives in `src/assets/db.json`. `ContentService` fetches that file and returns one top-level key per call.
- `AppComponent` loads each section and passes it to the presentational components in `src/app/components/`. `SkillsComponent` loads its own data.
- `src/app/detailedproject/` is the project details modal, a native `<dialog>` (`showModal()`). Each project card embeds one and opens it through a template reference. No Angular Material or CDK.
- Types for the JSON live in `src/app/interfaces/`. Keep them in sync with `db.json`.
- Plain hand-written CSS, one file per component. Colour tokens and shared classes (`.card-base-container`, `.base-button`, `.icon-button`) are in `src/styles.css`. Mobile styles are `max-width: 768px` media queries at the end of each file.
- Tech icons use the class `devicon-<name lowercased>-plain` (Devicon, loaded from a CDN in `src/index.html`), so a technology `name` in `db.json` must match a Devicon name.
- The language skill bars are tied to a constant 150 in `skills.component.html` and in `skills.component.css`; change both together.

## Conventions
- Templates use the built-in control flow (`@for`, `@if`), not `*ngFor`/`*ngIf`.
- Follow `.editorconfig`.
- Commit messages use the prefixes `[ADD]`, `[MOD]`, `[RM]`, `[FIX]`.
- Avoid comments unless they explain something non-obvious.

## Deployment
`.github/workflows/deploy.yml` builds every push and pull request (`npm ci`, `npm audit --omit=dev --audit-level=high`, `npm run build`) and deploys `docs/browser` to GitHub Pages on pushes to `main`. The Pages source is "GitHub Actions". A high-severity advisory in a production dependency fails the build, and so blocks deploys.

## Working rules
- Never commit or push without the user's explicit consent.
- Keep the session human-paced: explain what you intend to do, make small steps, and let the user review before moving on.
- When there is a better way to use Claude Code (prompts, skills, slash commands, workflow), tell the user.
