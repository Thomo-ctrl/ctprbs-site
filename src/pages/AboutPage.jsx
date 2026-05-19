import '../components/About.css'

export default function AboutPage() {
  return (
    <div className="about about--page">
      <div className="about-grid">
        <div className="about-personal">
          <p className="section-label">The Person</p>
          <h2 className="section-title">Jaka&apos; Thomo Ka&apos;Thomo</h2>
          <div className="divider" />
          <p>
            A strategist, storyteller, and builder of ideas. With a career
            spanning consulting and content, Jaka&apos; brings a rare combination
            of analytical rigour and creative instinct to every engagement.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Rooted in the belief that clarity of thought produces clarity of
            outcome — every project begins with the right question, not the
            obvious answer.
          </p>
          <a
            href="https://www.linkedin.com/in/thomo-r-k-nyanjom-4a3a8740"
            target="_blank"
            rel="noreferrer"
            className="about-link"
          >
            LinkedIn Profile &rarr;
          </a>
        </div>

        <div className="about-company">
          <p className="section-label">The Practice</p>
          <h2 className="section-title">Ceteris Paribus</h2>
          <div className="divider" />
          <p>
            <em>Ceteris Paribus</em> — Latin for &ldquo;all else being equal&rdquo; —
            is a consulting and content practice operating under the umbrella
            of <strong>Sovoreign &amp; Greene</strong>.
          </p>
          <p style={{ marginTop: '1rem' }}>
            We partner with organisations and individuals to isolate what
            truly matters: sharp strategy, compelling narratives, and
            decisions that hold up when everything else changes.
          </p>
          <a
            href="https://www.linkedin.com/in/ceteris-paribus-37439a403"
            target="_blank"
            rel="noreferrer"
            className="about-link"
          >
            Company LinkedIn &rarr;
          </a>
        </div>
      </div>
    </div>
  )
}
