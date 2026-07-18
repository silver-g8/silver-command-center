# Changelog

All notable project changes are recorded here. The project is not following a release version yet.

## Unreleased

### Added

- Repository-level privacy boundary for environment files, local data, Obsidian configuration, Vault directories, dependencies, and build output.
- Phase 0 documentation for product scope, architecture, roadmap, progress, and agent workflow.
- Phase 1 Obsidian Plugin manifest, build toolchain, React ItemView lifecycle, five placeholder tabs, and scoped styles.
- Portable deployment and manual verification instructions for the dedicated test Vault.
- Manual Obsidian runtime verification for the Phase 1 scaffold.

### Changed

- Moved the original nine-file Vite prototype into `prototypes/web-v0/` without changing file contents.
- Established `baseline/web-v0.1.0` as the preserved pre-migration snapshot.
- Recorded Phase 1 automated verification as passing for typecheck, lint, and production build.
- Published the scaffold branch and opened Draft PR #2 for review.

### Not included

- No Core MVP feature implementation or real data source.
- No Vault reads/writes, settings, AI, network, or external integrations.
- No Vault data or personal notes.
