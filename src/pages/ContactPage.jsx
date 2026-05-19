import '../components/Contact.css'

export default function ContactPage() {
  return (
    <div className="contact contact--page">
      <p className="section-label">Get In Touch</p>
      <h2 className="section-title">Let&apos;s Work Together</h2>
      <div className="divider" />
      <p className="contact-sub">
        Whether you&apos;re looking for strategic counsel, a content partner, or
        simply want to explore what&apos;s possible — we&apos;d love to hear from you.
      </p>

      <div className="contact-cards">
        <a
          href="https://www.linkedin.com/in/thomo-r-k-nyanjom-4a3a8740"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <span className="contact-card-label">Personal</span>
          <span className="contact-card-title serif">Jaka&apos; Thomo Ka&apos;Thomo</span>
          <span className="contact-card-action">Connect on LinkedIn &rarr;</span>
        </a>

        <a
          href="https://www.linkedin.com/in/ceteris-paribus-37439a403"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <span className="contact-card-label">Business</span>
          <span className="contact-card-title serif">Ceteris Paribus</span>
          <span className="contact-card-action">Follow on LinkedIn &rarr;</span>
        </a>
      </div>
    </div>
  )
}
