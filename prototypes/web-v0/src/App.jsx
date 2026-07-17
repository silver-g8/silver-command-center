import { useState } from 'react'

const stats = [
  { label: 'Active missions', value: '08', detail: '+2 this week', tone: 'blue' },
  { label: 'Team availability', value: '94%', detail: 'Across 4 squads', tone: 'green' },
  { label: 'Open alerts', value: '03', detail: '1 needs attention', tone: 'amber' },
]

const missions = [
  { name: 'Silverline rollout', owner: 'Product squad', progress: 78, status: 'On track' },
  { name: 'Northstar migration', owner: 'Platform squad', progress: 46, status: 'In progress' },
  { name: 'Signal audit', owner: 'Security squad', progress: 91, status: 'On track' },
]

function App() {
  const [activeView, setActiveView] = useState('Overview')
  const [isOnline, setIsOnline] = useState(true)

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">S</div>
          <div>
            <strong>Silver</strong>
            <span>Command Center</span>
          </div>
        </div>

        <nav className="primary-nav" aria-label="Primary navigation">
          {['Overview', 'Missions', 'Signals', 'Team'].map((item) => (
            <button
              className={`nav-item ${activeView === item ? 'is-active' : ''}`}
              key={item}
              onClick={() => setActiveView(item)}
            >
              <span className="nav-icon" aria-hidden="true">{item.slice(0, 1)}</span>
              {item}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="system-status">
            <span className={`status-dot ${isOnline ? 'online' : 'offline'}`} />
            <div>
              <strong>{isOnline ? 'All systems operational' : 'Connection paused'}</strong>
              <span>Last checked just now</span>
            </div>
          </div>
          <button className="user-card" aria-label="Open account menu">
            <span className="avatar">SC</span>
            <span className="user-copy"><strong>Silver captain</strong><span>Administrator</span></span>
            <span className="chevron" aria-hidden="true">›</span>
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="breadcrumb"><span>Workspace</span><span className="slash">/</span><strong>{activeView}</strong></div>
          <div className="topbar-actions">
            <button className="icon-button" aria-label="Search">⌕</button>
            <button className="icon-button notification" aria-label="Notifications"><span className="notification-dot" />♢</button>
            <button className="command-button" onClick={() => setIsOnline((online) => !online)}>
              <span className={`status-dot ${isOnline ? 'online' : 'offline'}`} />
              {isOnline ? 'Live workspace' : 'Resume workspace'}
            </button>
          </div>
        </header>

        <section className="page-intro">
          <div>
            <p className="eyebrow">Friday, July 17, 2026</p>
            <h1>Good morning, captain.</h1>
            <p className="intro-copy">Here’s what is moving across your command center today.</p>
          </div>
          <button className="primary-button" onClick={() => setActiveView('Missions')}>+ New mission</button>
        </section>

        <section className="stats-grid" aria-label="Workspace summary">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <div className={`stat-icon ${stat.tone}`} aria-hidden="true">{stat.tone === 'blue' ? '↗' : stat.tone === 'green' ? '✓' : '!'}</div>
              <div><p>{stat.label}</p><strong>{stat.value}</strong><span>{stat.detail}</span></div>
            </article>
          ))}
        </section>

        <section className="dashboard-grid">
          <article className="panel missions-panel">
            <div className="panel-heading"><div><p className="eyebrow">Command log</p><h2>Mission progress</h2></div><button className="text-button" onClick={() => setActiveView('Missions')}>View all <span>→</span></button></div>
            <div className="mission-list">
              {missions.map((mission) => (
                <div className="mission" key={mission.name}>
                  <div className="mission-title"><div><strong>{mission.name}</strong><span>{mission.owner}</span></div><span className="mission-status">{mission.status}</span></div>
                  <div className="progress-row"><div className="progress-track"><span style={{ width: `${mission.progress}%` }} /></div><strong>{mission.progress}%</strong></div>
                </div>
              ))}
            </div>
          </article>

          <article className="panel pulse-panel">
            <div className="panel-heading"><div><p className="eyebrow">Live signal</p><h2>Team pulse</h2></div><span className="pulse-live"><span className="status-dot online" />Live</span></div>
            <div className="pulse-visual" aria-label="Team pulse is trending upward"><div className="pulse-grid" /><svg viewBox="0 0 360 130" role="img" aria-label="Upward team activity trend"><path d="M0 102 C26 100 30 82 54 89 S85 94 105 69 S135 76 153 59 S181 70 201 45 S232 62 247 51 S270 42 285 28 S316 41 360 6" /><circle cx="285" cy="28" r="5" /></svg><span className="pulse-label">+18%</span></div>
            <div className="pulse-summary"><div><strong>Healthy momentum</strong><span>Compared with last week</span></div><span className="trend-arrow">↗</span></div>
          </article>
        </section>

        <section className="notice"><div className="notice-icon">i</div><div><strong>Your workspace is ready to command.</strong><p>Connect a data source or create your first mission to bring your live operations into view.</p></div><button className="text-button" onClick={() => setActiveView('Signals')}>Explore signals <span>→</span></button></section>
      </main>
    </div>
  )
}

export default App
