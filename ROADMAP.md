# Roadmap

The roadmap separates the preserved prototype from the approved SilverCommandCenter product direction. Work must follow the current phase recorded in `docs/progress.md`.

## Milestone 1 — Foundation

Status: Phase 0 implementation complete — PR #1 merged.

Scope:

- Preserve the original Vite prototype under `prototypes/web-v0/`.
- Establish the baseline tag, `main` branch, repository layout, and privacy boundary.
- Document the target product model, architecture principles, phase routing, and Fedora constraints.

Definition of Done:

- Prototype content remains unchanged and relocation is reviewable as renames.
- Privacy guards and documentation are complete.
- PR #1 was reviewed, approved, and merged with a merge commit.

## Milestone 2 — Core MVP

Status: planned after Phase 1 scaffold review.

Scope:

- One Front Seat MIT.
- Deferred tasks in the Trunk.
- Pomodoro/focus timer.
- Markdown as source of truth with dashboard/Markdown two-way synchronization.
- Durable local state that survives an Obsidian restart.
- Validation and confirmation boundaries for AI and external writes.

Definition of Done: the Core MVP behavior is specified by schemas and workflows, survives restart, validates Markdown/frontmatter, handles synchronization failures safely, and has no unconfirmed writes.

## Milestone 3 — Daily Workflow

Status: planned after Core MVP validation.

Scope: make the Front Seat, Trunk, focus timer, and Markdown workflow practical for repeated daily use, including clear transitions, review states, and recovery from interrupted or offline work.

Definition of Done: a documented daily workflow can be completed locally with durable state, understandable empty/error/offline states, and no accidental data loss.

## Milestone 4 — Extensions

Status: planned; each extension requires separate approval.

Candidate extensions include Calendar, Voice, Terminal, Live Feeds, AI integrations, and other external systems. None of these are part of the Core MVP.

Definition of Done: each extension has an explicit data boundary, validation path, confirmation policy, failure behavior, and privacy review before implementation.

## Phase sequence

### Phase 0 — Foundation

Implementation complete; PR #1 merged. This phase contains repository structure, preservation, privacy, and documentation only.

### Phase 1 — Obsidian Plugin scaffold

Phase 1 implementation and verification are complete on `feat/phase-1-plugin-scaffold`. Draft PR #2 is pending review and explicit merge approval. The scaffold remains limited to the manifest, entry point, build configuration, React mount/unmount lifecycle, five placeholder tabs, and development checks. Automated checks and manual Obsidian runtime verification pass. It does not include Front Seat, Trunk, timer, sync logic, AI, or other domain features.

### Later phases

Core MVP, Daily Workflow, and Extensions begin only after their phase is approved and recorded in `docs/progress.md`.
