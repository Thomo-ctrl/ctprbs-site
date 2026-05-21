import '../components/About.css'

export default function AboutPage() {
  return (
    <div className="about about--page">

      {/* ── The Practice — shown first ── */}
      <div className="about-block">
        <p className="section-label">The Practice</p>
        <h2 className="section-title">Ceteris Paribus</h2>
        <div className="divider" />

        <p className="about-body">
          <em>Ceteris Paribus</em> &mdash; Latin for &ldquo;all else being equal&rdquo; &mdash;
          is the operating practice of Sovereign &amp; Grené, where ideas are stress-tested,
          deals are structured, and opportunities are built to last. We partner with
          organisations and individuals to isolate what truly matters: sharp strategy,
          compelling narratives, and decisions that hold up when everything else changes.
          East Africa is where we work. The continent is where we&apos;re building.{' '}
          <a
            href="https://www.linkedin.com/in/ceteris-paribus-37439a403"
            target="_blank"
            rel="noreferrer"
            className="about-link--gold"
          >
            Company LinkedIn
          </a>
        </p>
      </div>

      {/* ── The Person — shown second ── */}
      <div className="about-block">
        <p className="section-label">The Person</p>
        <h2 className="section-title">Jaka&apos; Thomo Ka&apos;Thomo</h2>
        <div className="divider" />

        <p className="about-body">
          A strategist, storyteller, and builder of ideas — one who hasn&apos;t finished
          building yet, but knows exactly what he&apos;s building. With a career spanning
          consulting and content, Ja&apos;Ka brings a rare combination of analytical rigour
          and creative instinct to every engagement, across a portfolio that spans media,
          finance, infrastructure, sports, advocacy, and consumer goods — clustered, named,
          and sequenced with intention. Rooted in the belief that clarity of thought produces
          clarity of outcome, every project begins with the right question, not the obvious
          answer — and every idea is treated not as a dream, but as a project. Kenyan by
          origin, continental in ambition, and deliberate in everything.{' '}
          <a
            href="https://www.linkedin.com/in/thomo-r-k-nyanjom-4a3a8740"
            target="_blank"
            rel="noreferrer"
            className="about-link--gold"
          >
            LinkedIn Profile
          </a>
        </p>
      </div>

    </div>
  )
}
