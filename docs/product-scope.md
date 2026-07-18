# Product scope

## Prototype facts

The current web prototype is evidence about the starting interface, not the product model:

- It is a React 18+ application built with Vite.
- Its visible navigation names are Overview, Missions, Signals, and Team.
- Its dashboard contains static mock concepts for active missions, team availability, open alerts, mission progress, and team pulse.
- Its interactions change local component state, including the selected view and a simulated live-workspace state.
- It has no persistence, Markdown source of truth, Obsidian API calls, Vault access, backend, or real operational data.
- Missions, Signals, and Team are prototype labels and must not be treated as the core SilverCommandCenter product model.

## Target product decisions

These decisions define the target SilverCommandCenter direction. They are not claims that the current prototype or Phase 0 already implements them.

- The product is a local-first Obsidian command center.
- Markdown files are the source of truth for user-authored work data.
- The Front Seat contains exactly one MIT (Most Important Task) at a time.
- The Trunk contains deferred tasks that are intentionally not in the Front Seat.
- A Pomodoro/focus timer supports the user's active focus session.
- The dashboard and Markdown files have two-way synchronization: dashboard edits persist to Markdown, and valid Markdown changes are reflected back in the dashboard.
- Data remains available after Obsidian restarts through durable local persistence.
- AI actions and all external writes must validate their proposed change and request confirmation before applying it.

## Phase 1 platform decision

The Phase 1 platform decision is confirmed and is not an Open Decision:

- Minimum supported Obsidian version: `1.12.7`.
- Phase 1 support scope is desktop-only.
- `manifest.json` sets `isDesktopOnly: true`.
- Phase 1 is tested on Fedora Linux desktop.
- The implementation avoids Electron-specific and Node-specific runtime APIs, preserving a path to future mobile support.

Mobile is not supported by the Phase 1 scaffold.

## Core MVP

The Core MVP is the smallest product boundary after the plugin scaffold:

1. Show and edit exactly one Front Seat MIT.
2. Show and manage deferred tasks in the Trunk.
3. Start, pause, resume, and complete a Pomodoro/focus timer.
4. Read and write the defined Markdown files as the source of truth.
5. Keep dashboard and Markdown changes synchronized in both directions.
6. Preserve valid task and timer data across an Obsidian restart.
7. Validate Markdown/frontmatter changes and require confirmation for AI or external write actions.

The MVP must provide clear loading, empty, error, and offline states. It must not silently overwrite a user's Markdown file when validation or synchronization detects ambiguity.

## Non-goals for MVP

- Treating Missions, Signals, or Team as the primary product model.
- Calendar integration.
- Voice input or voice commands.
- Terminal integration.
- Live feeds or remote real-time data.
- Autonomous AI writes or external writes without validation and confirmation.
- Multi-user collaboration, accounts, permissions, or remote synchronization.
- Automatic ingestion of arbitrary Vault files.
- High-stakes recommendations or decisions.

## Open decisions

The Phase 1 platform decision above is settled. Mobile support for future product phases and releases remains open:

- Which future phase will begin mobile support and testing?
- What mobile layout and interaction requirements must be met?
- What conditions would allow changing `isDesktopOnly` to `false`?
- What Obsidian version support matrix should apply to long-term releases?

- What Markdown file layout and YAML frontmatter schema represent the Front Seat and Trunk?
- How is the one-MIT invariant validated and repaired when Markdown contains duplicates?
- What task identifier and ordering rules are required for stable two-way sync?
- Which timer state is persisted, and how should an interrupted session be represented?
- How are concurrent dashboard edits and external Markdown edits reconciled?
- Which AI and external integrations may be proposed after the Core MVP, and what confirmation UI do they require?
