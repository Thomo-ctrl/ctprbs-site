import './InGreatCompany.css'

export default function InGreatCompany() {
  return (
    <div className="igc">
      <p className="section-label">Visual Documentation</p>
      <h2 className="section-title">In Great Company</h2>
      <div className="divider" />

      <p className="igc-intro">
        <em>In Great Company</em> is a video series documenting the journey from
        KES&nbsp;0 to KES&nbsp;37,000,000,000 — in real time. Conversations with
        founders, strategists, and operators who have built something meaningful.
        Lessons from those who have done it, for those who are in the process of doing it.
      </p>

      {/* YouTube channel embed */}
      <div className="igc-embed-wrap">
        <iframe
          className="igc-embed"
          src="https://www.youtube.com/embed?listType=user_uploads&list=InGreatCompany-CP&rel=0&modestbranding=1&showinfo=0"
          title="In Great Company — YouTube Channel"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="igc-channel-row">
        <a
          href="https://www.youtube.com/@InGreatCompany-CP"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline igc-subscribe"
        >
          Subscribe on YouTube &rarr;
        </a>
        <p className="igc-channel-note">
          @InGreatCompany-CP &mdash; new episodes published as the journey unfolds.
        </p>
      </div>

      <div className="igc-premise">
        <div className="igc-premise-item">
          <p className="section-label">The Premise</p>
          <p>
            Great companies are not accidents. They are the result of decisions made
            under pressure, frameworks built in private, and a relentless commitment
            to the long game. This series surfaces those decisions.
          </p>
        </div>
        <div className="igc-premise-item">
          <p className="section-label">The Format</p>
          <p>
            Long-form conversations, unscripted. No panels, no performance — just
            the kind of candid dialogue that happens when two people who care about
            building are in the same room.
          </p>
        </div>
      </div>
    </div>
  )
}
