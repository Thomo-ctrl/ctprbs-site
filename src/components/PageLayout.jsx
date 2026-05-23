import './PageLayout.css'

const PAGES = [
  { id: 'about',    label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'journey',  label: 'The Journey', gold: true },
  { id: 'ideas',    label: 'The Blueprint' },
  { id: 'igc',      label: 'In Great Company' },
  { id: 'contact',  label: 'Contact' },
]

export default function PageLayout({ currentPage, navigate, children }) {
  return (
    <div className="pl">
      {/* Sticky sidebar */}
      <aside className="pl-sidebar">
        <div className="pl-sidebar-top">
          <button className="pl-home-btn serif" onClick={() => navigate('home')}>
            Ceteris Paribus
          </button>
          <p className="pl-motto">In hoc vita ad invicem serviendum</p>
        </div>

        <nav className="pl-nav" aria-label="Site navigation">
          <ul>
            {PAGES.map(p => (
              <li key={p.id}>
                <button
                  className={`pl-nav-item ${currentPage === p.id ? 'pl-nav-item--active' : ''} ${p.gold ? 'pl-nav-item--gold' : ''}`}
                  onClick={() => navigate(p.id)}
                >
                  {p.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pl-sidebar-foot">
          <span className="pl-cp-mark serif" aria-hidden="true">CP</span>
        </div>
      </aside>

      {/* Scrollable content */}
      <main className="pl-content">
        {children}
      </main>
    </div>
  )
}
