import '../components/Journey.css'

export default function JourneyPage() {
  return (
    <div className="journey journey--page">

      {/* ── Eyebrow ── */}
      <div className="journey-eyebrow">
        <span className="section-label">The Journey</span>
      </div>

      {/* ── Headline ── */}
      <h2 className="journey-headline">
        <span>843 APPLICATIONS</span>
        <span className="journey-dot">.</span>
        <span>1261 INTERVIEWS</span>
        <span className="journey-dot">.</span>
        <span>ONE DECISION</span>
        <span className="journey-dot">.</span>
      </h2>

      <div className="journey-divider" />

      {/* ── Tagline ── */}
      <p className="journey-tagline serif">
        &ldquo;I stopped waiting to be chosen.&rdquo;
      </p>

      {/* ── Body ── */}
      <div className="journey-sub-block">
        <p className="journey-sub-body">
          I stopped waiting to be chosen and started building the thing worth choosing.
          I stopped asking for space in someone else's blueprint and drew my own.
          Everything I would have brought to those companies — the strategy, the ideas,
          the value — now exists as Ceteris Paribus.
        </p>

        <p className="journey-aside">A consultancy. My consultancy.</p>

        <p className="journey-sub-body">
          This is the documentation of that journey. Not polished. Not edited.
          Real — for everyone who has been told no enough times to start asking
          better questions, making better plans, going for things, in spite of
          fear and doubt.
        </p>

        <p className="journey-sub-body">
          We are building 20 revenue streams, along the way, learning from
          industry experts, and proving that the gap between rejection and
          reinvention is smaller than it looks.
        </p>

        <p className="journey-sub-body">Come watch. Better yet — come build.</p>
      </div>

      {/* ── Sign-off ── */}
      <p className="journey-witness">
        <span>Witness</span>
        <span className="journey-sep">.</span>
        <span>Participate</span>
        <span className="journey-sep">.</span>
        <span>Become</span>
        <span className="journey-sep">.</span>
      </p>

    </div>
  )
}
