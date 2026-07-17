# Silver Command Center

SilverCommandCenter is being prepared as a local-first Obsidian command center. Phase 0 establishes the repository foundation and aligns the product documents with the Core MVP direction.

## Current status

- Phase 0 implementation: complete — pending draft PR #1 merge
- Next phase: Phase 1 — Obsidian Plugin scaffold only
- Baseline: `baseline/web-v0.1.0` at commit `53bbc70f04d7bc02f1fa56cae5e8f93881a79229`
- The original web prototype remains preserved under `prototypes/web-v0/`
- No Obsidian Plugin has been created in this branch

## Repository layout

```text
prototypes/web-v0/   Preserved React/Vite web prototype
docs/                Product, architecture, and progress documents
AGENTS.md            Phase-aware agent and contributor workflow
ROADMAP.md           Foundation, MVP, daily workflow, and extension milestones
CHANGELOG.md         User-visible project history
```

The prototype has its own `package.json` and remains an isolated reference artifact. Phase 0 intentionally did not run dependency installation, build checks, or runtime checks. Those checks remain pending until the approved phase and toolchain require them.

## Product direction

The Core MVP centers on one Front Seat MIT, deferred tasks in the Trunk, a Pomodoro/focus timer, and Markdown-backed two-way synchronization that survives an Obsidian restart. Prototype labels such as Missions, Signals, and Team are not the core product model.

See [docs/product-scope.md](docs/product-scope.md) and [docs/architecture.md](docs/architecture.md) for the target decisions and boundaries.

## Privacy notice

This public repository may contain source code, documentation, and synthetic examples only. Obsidian Vault data, `.obsidian/` configuration, `.env` files, `data.json`, credentials, secrets, and personal notes must remain outside the repository. The root `.gitignore` is a safety guard, not permission to place Vault data in the repository.
