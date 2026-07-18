# Phase 1 — Obsidian Plugin scaffold

## Scope

This phase creates only the smallest runnable Obsidian Plugin shell for Silver Command Center:

- Plugin identity: `silver-command-center`, version `0.1.0`.
- One custom ItemView: `silver-command-center-dashboard`.
- Ribbon action that opens the ItemView.
- React 18 mount and unmount lifecycle.
- Five clickable placeholder tabs: Work, Build, Learn, Create, and Inspired.
- Keyboard focus, active state, and basic tab semantics.
- View-scoped CSS and a root esbuild/TypeScript/ESLint toolchain.

The scaffold does not read or write the Vault and does not implement Front Seat, Trunk, Pomodoro, Markdown synchronization, settings, `data.json`, AI, network access, Calendar, Voice, Terminal, or Live Feeds. The preserved prototype remains outside this implementation.

## Automated verification

Run from the repository root:

```bash
npm install
npm run typecheck
npm run lint
npm run build
```

The production build creates `main.js` locally. It is ignored by Git and must not be committed. The build keeps `obsidian` external because Obsidian provides it at runtime.

The current Fedora checkout has Node `22.23.1` and npm `12.0.0`. The local Obsidian executable reports `1.12.7`; the authorization brief named `1.27.7`. The scaffold keeps `minAppVersion` at `1.0.0` and avoids APIs flagged by the Obsidian lint rules as newer than that baseline.

## Manual deployment

Set the test Vault location in the shell only; do not put a personal Vault path in repository files:

```bash
export SCC_TEST_VAULT="/path/to/SilverCommandCenter"
mkdir -p "$SCC_TEST_VAULT/.obsidian/plugins/silver-command-center"
cp manifest.json main.js styles.css \
  "$SCC_TEST_VAULT/.obsidian/plugins/silver-command-center/"
```

In Obsidian:

1. Open the selected test Vault.
2. Enable community plugins if Obsidian requires it for a local plugin.
3. Enable **Silver Command Center** under **Settings → Community plugins**.
4. Click the Command Center ribbon icon.
5. Confirm that the view opens with the five placeholder tabs and that the active tab is visible.
6. Click each tab and verify its active state, keyboard focus outline, and panel label.
7. Close and reopen the view, then reload Obsidian and repeat the open action.
8. Confirm that no Vault note, frontmatter, setting, `data.json`, or other file is created or changed by the scaffold.

The manual test is a stop point. Do not push, update a Pull Request, mark a Pull Request ready, or merge until the runtime result is reviewed and explicitly confirmed.

## Cleanup

After testing, remove only the plugin folder from the selected test Vault if the manual test should be undone. Keep the repository branch, `main`, `master`, and `baseline/web-v0.1.0` unchanged.
