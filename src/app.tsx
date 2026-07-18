import { useRef, useState, type KeyboardEvent, type ReactElement } from "react";

const tabs = ["Work", "Build", "Learn", "Create", "Inspired"] as const;
type TabName = (typeof tabs)[number];

function nextTabIndex(index: number, direction: 1 | -1): number {
  return (index + direction + tabs.length) % tabs.length;
}

export function App(): ReactElement {
  const [activeTab, setActiveTab] = useState<TabName>(tabs[0]);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeIndex = tabs.indexOf(activeTab);

  const selectTab = (tab: TabName): void => {
    setActiveTab(tab);
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>): void => {
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight") {
      nextIndex = nextTabIndex(activeIndex, 1);
    } else if (event.key === "ArrowLeft") {
      nextIndex = nextTabIndex(activeIndex, -1);
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabs.length - 1;
    }

    if (nextIndex === null) {
      return;
    }

    event.preventDefault();
    const nextTab = tabs[nextIndex];
    if (nextTab === undefined) {
      return;
    }

    setActiveTab(nextTab);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="silver-command-center-plugin">
      <header className="silver-command-center-header">
        <p className="silver-command-center-eyebrow">Phase 1 scaffold</p>
        <h1>Silver Command Center</h1>
        <p className="silver-command-center-description">
          A local-first workspace for the work ahead.
        </p>
      </header>

      <nav aria-label="Command Center sections" className="silver-command-center-tabs" role="tablist">
        {tabs.map((tab, index) => {
          const isActive = tab === activeTab;

          return (
            <button
              aria-controls="silver-command-center-panel"
              aria-selected={isActive}
              className={isActive ? "is-active" : undefined}
              id={`silver-command-center-tab-${tab.toLowerCase()}`}
              key={tab}
              onClick={() => selectTab(tab)}
              onKeyDown={handleTabKeyDown}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              role="tab"
              tabIndex={isActive ? 0 : -1}
              type="button"
            >
              {tab}
            </button>
          );
        })}
      </nav>

      <section
        aria-labelledby={`silver-command-center-tab-${activeTab.toLowerCase()}`}
        className="silver-command-center-panel"
        id="silver-command-center-panel"
        role="tabpanel"
        tabIndex={0}
      >
        <p className="silver-command-center-panel-label">Selected section</p>
        <h2>{activeTab}</h2>
        <p>This placeholder confirms that the Phase 1 view is mounted.</p>
      </section>
    </div>
  );
}
