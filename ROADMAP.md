# Roadmap

The roadmap separates the preserved web prototype from the future Obsidian plugin. Feature work starts only after the foundation is reviewed.

## Milestones

### Milestone 1 — Phase 0 foundation

Status: in progress on `chore/phase-0-foundation`.

Scope:

- Preserve the original Vite prototype under `prototypes/web-v0/`.
- Establish the baseline tag, `main` branch, repository layout, and privacy boundary.
- Document product scope, architecture, progress, and Fedora-specific constraints.

Definition of Done:

- Prototype files retain their baseline content and are detected as renames.
- Root privacy guards are present and staged content contains no Vault data or secrets.
- Phase 0 documentation is complete and the branch is reviewed through a Pull Request.

### Milestone 2 — Phase 1 plugin scaffold

Status: planned; out of scope for Phase 0.

Candidate scope: create the minimal Obsidian plugin entry point, manifest, build configuration, and development checks without introducing domain features.

Definition of Done: the plugin loads in a test Vault, has a documented build path, and has no dependency on private Vault content.

### Milestone 3 — Local command center MVP

Status: planned; requires a separate scope decision.

Candidate scope: turn the prototype's navigation and dashboard concepts into local plugin views backed by explicitly defined local data contracts.

Definition of Done: each implemented workflow has a documented source of truth, privacy boundary, and verification path.

### Milestone 4 — Hardening and release readiness

Status: planned.

Candidate scope: tests, compatibility checks, migration notes, packaging, and release documentation.

Definition of Done: supported environments, upgrade behavior, validation commands, and release artifacts are documented and reproducible.

## Guardrails

- Do not import real Vault data into the repository.
- Do not treat the web prototype as proof that plugin behavior already exists.
- Keep source facts, project decisions, and future proposals clearly separated.
