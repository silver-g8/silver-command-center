# Silver Command Center

SilverCommandCenter is being prepared as a local-first Obsidian command center. Phase 0 established the repository foundation, and Phase 1 is building the smallest Obsidian Plugin scaffold before any Core MVP domain work begins.

## Current status

- Phase 0 implementation: complete — PR #1 merged with merge commit `da8f002f5c6d6b37339cd0ade6e6f1832baa7efb`
- Phase 1 implementation: scaffold created on `feat/phase-1-plugin-scaffold`; manual Obsidian runtime test pending
- Baseline: `baseline/web-v0.1.0` at commit `53bbc70f04d7bc02f1fa56cae5e8f93881a79229`
- The original web prototype remains preserved under `prototypes/web-v0/`
- No domain features, Vault reads/writes, or external integrations are included

## Repository layout

```text
prototypes/web-v0/   Preserved React/Vite web prototype
main.ts              Obsidian Plugin entry point and ItemView lifecycle
src/app.tsx          React placeholder tabs
styles.css           View-scoped placeholder styles
docs/                Product, architecture, and progress documents
AGENTS.md            Phase-aware agent and contributor workflow
ROADMAP.md           Foundation, MVP, daily workflow, and extension milestones
CHANGELOG.md         User-visible project history
```

The prototype has its own `package.json` and remains an isolated reference artifact. Phase 1 uses the root toolchain and has passed `npm run typecheck`, `npm run lint`, and `npm run build`. Runtime testing in the dedicated test Vault is still pending.

See [docs/phase-1-scaffold.md](docs/phase-1-scaffold.md) for the portable Fedora deployment and manual verification procedure. The generated `main.js` is local build output and is intentionally ignored; only `manifest.json`, `main.js`, and `styles.css` are copied into the test Vault during manual testing.

## Product direction

The Core MVP centers on one Front Seat MIT, deferred tasks in the Trunk, a Pomodoro/focus timer, and Markdown-backed two-way synchronization that survives an Obsidian restart. Prototype labels such as Missions, Signals, and Team are not the core product model.

See [docs/product-scope.md](docs/product-scope.md) and [docs/architecture.md](docs/architecture.md) for the target decisions and boundaries.

## Privacy notice

This public repository may contain source code, documentation, and synthetic examples only. Obsidian Vault data, `.obsidian/` configuration, `.env` files, `data.json`, credentials, secrets, and personal notes must remain outside the repository. The root `.gitignore` is a safety guard, not permission to place Vault data in the repository.
