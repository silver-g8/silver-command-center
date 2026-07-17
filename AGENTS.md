# Agent and contributor workflow

## Scope

Phase 0 is documentation and repository structure work. Do not scaffold an Obsidian plugin, add feature code, connect a Vault, or introduce real user data in this phase.

## Source of truth

- Read `00-checklist.md` in the project handoff when available before changing repository structure.
- Inspect the actual Git state before acting.
- Treat `prototypes/web-v0/` as a preserved baseline artifact; do not edit it as part of Phase 0.
- Keep source facts, project decisions, and Fedora adaptations visibly separate in documentation.

## Privacy boundary

Only source code, documentation, and synthetic examples belong in this repository. Never copy Obsidian Vault files, `.obsidian/` settings, `.env` files, `data.json`, credentials, or personal notes here. The root `.gitignore` is only a guard and is not authorization to add private data.

## Git workflow

- Keep `master` as the historical branch and use `main` as the default branch.
- Use `chore/phase-0-foundation` for this work; do not commit directly to `main`.
- Keep prototype relocation, privacy guards, and documentation in separately reviewable commits.
- Inspect staged diffs and each commit with `git show` before pushing.
- Do not merge a Pull Request without explicit review confirmation.

## Fedora constraints

- Use the repository path supplied by the session; do not assume a second clone under `/home/sg8/Projects`.
- Respect Fedora's case-sensitive filesystem and verify paths before moving files.
- Do not hard-code a personal Vault path into source or documentation.
- Phase 0 must not run `npm install`, `npm ci`, `npm run build`, or `npm run dev`.

## Verification

At minimum, run the relevant checks from the checklist, including `git diff --check`, staged privacy checks, rename/blob verification, history inspection, and a clean working-tree check. Report skipped checks explicitly.
