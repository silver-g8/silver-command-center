# Silver Command Center

Silver Command Center is being prepared as a local-first command center for an eventual Obsidian plugin. Phase 0 establishes the repository boundary and preserves the original Vite web prototype without changing its source content.

## Current status

- Phase: 0 — foundation and repository migration
- Baseline: `baseline/web-v0.1.0` at commit `53bbc70f04d7bc02f1fa56cae5e8f93881a79229`
- Working branch: `chore/phase-0-foundation`
- The existing prototype is preserved under `prototypes/web-v0/`
- No Obsidian plugin scaffold or feature implementation exists in this phase

## Repository layout

```text
prototypes/web-v0/   Original React/Vite web prototype
docs/                Product, architecture, and progress documents
AGENTS.md            Repository and agent workflow rules
ROADMAP.md           Milestones and definitions of done
CHANGELOG.md         User-visible project history
```

The prototype has its own `package.json` and remains an isolated artifact. Phase 0 does not install dependencies or run a production build.

## Privacy notice

This repository may contain source code, documentation, and intentionally synthetic examples only. Obsidian Vault data, `.obsidian/` configuration, `.env` files, `data.json`, credentials, and personal notes must remain outside the repository. The root `.gitignore` is a safety guard, not permission to place Vault data in the repository.

See [docs/architecture.md](docs/architecture.md) for the full boundary and data-flow policy.
