import { ItemView, Plugin, WorkspaceLeaf } from "obsidian";
import { createElement } from "react";
import { createRoot, type Root } from "react-dom/client";

import { App } from "./src/app";

export const VIEW_TYPE = "silver-command-center-dashboard";

export class SilverCommandCenterView extends ItemView {
  private reactRoot: Root | null = null;

  getViewType(): string {
    return VIEW_TYPE;
  }

  getDisplayText(): string {
    return "Silver command center";
  }

  getIcon(): string {
    return "layout-dashboard";
  }

  async onOpen(): Promise<void> {
    this.contentEl.addClass("silver-command-center-view");
    this.reactRoot = createRoot(this.contentEl);
    this.reactRoot.render(createElement(App));
  }

  async onClose(): Promise<void> {
    this.reactRoot?.unmount();
    this.reactRoot = null;
    this.contentEl.empty();
  }
}

export default class SilverCommandCenterPlugin extends Plugin {
  async onload(): Promise<void> {
    this.registerView(VIEW_TYPE, (leaf: WorkspaceLeaf) => new SilverCommandCenterView(leaf));
    this.addRibbonIcon("layout-dashboard", "Open silver command center", () => {
      void this.activateView();
    });
  }

  private async activateView(): Promise<void> {
    const { workspace } = this.app;
    let leaf = workspace.getLeavesOfType(VIEW_TYPE)[0];

    if (!leaf) {
      leaf = workspace.getLeaf("tab");
    }

    await leaf.setViewState({ type: VIEW_TYPE, active: true });
  }
}
