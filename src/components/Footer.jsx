import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="serif footer-brand">Ceteris Paribus</span>
        <span className="footer-copy">
          &copy; {year} Sovoreign &amp; Greene. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
