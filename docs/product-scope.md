# Product scope

## Scope status

This document defines the working boundary for Phase 0. It records what the preserved prototype shows and what the future product may become; it does not claim that future plugin behavior already exists.

## Problem

The repository contains a visual command-center prototype, but the prototype currently uses static in-memory examples and has no real data source. The project needs a durable foundation before the interface is connected to local operational data.

## Users

Project decision: the initial product is for a single operator or knowledge worker who wants a private local workspace for reviewing work signals and missions. Multi-user collaboration, permissions, and remote synchronization are not defined by the current source and remain out of scope until separately decided.

## Source facts from the prototype

- The prototype is a React 18+ application built with Vite.
- Its visible navigation names are Overview, Missions, Signals, and Team.
- Its dashboard presents mock concepts for active missions, team availability, open alerts, mission progress, and team pulse.
- The visible interactions change the selected view or toggle a simulated live-workspace state.
- No persistence, backend, Obsidian API, Vault access, or real operational data is present.

## Candidate use cases

These are product directions, not implemented features:

1. Review a local overview of active work.
2. Inspect mission progress and related signals.
3. Keep private workspace information close to the user's local knowledge system.
4. Make the source of each displayed value explicit before showing it as live data.

## MVP boundary

### In

- An Obsidian plugin shell with a documented local-first data boundary.
- A small, explicit local data contract for the first supported workspace view.
- Readable empty, unavailable, and stale-data states.
- Documentation and verification that prevent accidental Vault or secret commits.

### Out

- Remote services, team accounts, permissions, or multi-user synchronization.
- Automatic ingestion of arbitrary Vault files.
- Trading, financial, medical, or other high-stakes recommendations.
- A claim that the current web prototype is already an Obsidian plugin.
- Any feature implementation during Phase 0.

## Open product decisions

- Which local source is authoritative for each future dashboard value?
- Which fields are user-authored notes versus derived status?
- What is the minimum supported Obsidian version and desktop/mobile scope?
- Which interactions from the prototype are essential for the first plugin release?
