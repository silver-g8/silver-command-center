# Agent and contributor workflow

## Phase routing

- Read `docs/progress.md` before starting work. Its `Current Phase` is the operational source of truth for what is approved now.
- Work only within the approved phase and the explicit task scope.
- Do not start work that belongs to a later phase. If a request crosses the current phase boundary, stop and ask for approval before changing files.
- Keep phase status, decisions, blockers, and next steps current in `docs/progress.md`.

## Source of truth and scope

- Inspect the actual Git state before acting.
- Keep source facts, target product decisions, implementation status, and future proposals clearly separated in documentation.
- Treat `prototypes/web-v0/` as a preserved reference artifact. Modify it only when the current phase and task explicitly approve prototype changes.
- Do not infer product behavior from a visual prototype when the product documents define a different model.

## Privacy boundary

Only source code, documentation, and synthetic examples belong in this repository. Never copy Obsidian Vault files, `.obsidian/` settings, `.env` files, `data.json`, credentials, API tokens, personal notes, or operational records here. The root `.gitignore` is a safety guard, not authorization to add private data.

Never store secrets in Markdown, `data.json`, source files, screenshots, fixtures, commits, or Pull Requests. External writes and AI-applied changes must be validated and confirmed before they are applied.

## Git workflow

- Work on the branch approved for the current task; do not commit directly to a protected/default branch unless explicitly authorized.
- Preserve historical branches and baseline tags unless their change is explicitly approved.
- Stage only intended files and keep commits small enough to review.
- Inspect staged diffs and each commit with `git show` before pushing.
- Do not mark a Pull Request ready or merge it without explicit confirmation.

## GitHub access

- Run `gh auth status` in the same execution context that will contact GitHub; never paste or store GitHub tokens in the repository, documentation, shell history, or Pull Requests.
- A sandbox failure to reach the GitHub API, user keyring, or SSH configuration is an execution-environment limitation and is not evidence that the token is invalid.
- If the sandbox cannot reach GitHub, use the approved elevated network context for `gh` and `git` operations, verify `gh auth status` there, and then perform the minimum required external write.
- Do not work around the boundary by copying credentials into files or changing repository remotes to embed credentials.

## Fedora constraints

- Use the repository path supplied by the session and do not assume a second clone.
- Respect Fedora's case-sensitive filesystem and verify paths before moving files.
- Do not hard-code a personal Vault location into code or documentation.
- Verify the available toolchain and lockfiles before changing dependencies.
- Keep local dependencies and build output untracked; run environment-changing commands only when the approved phase requires them.

## Verification

Run the checks relevant to the approved phase, including `git diff --check`, privacy checks, content-preservation checks for protected artifacts, history inspection, and a clean working-tree check. Report intentionally skipped build or runtime checks explicitly.
