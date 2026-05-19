import { useEffect, useState } from 'react'
import './Loader.css'

export default function Loader({ onComplete }) {
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 2200)
    const t2 = setTimeout(() => onComplete && onComplete(), 2900)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div className={`loader ${hiding ? 'loader--hide' : ''}`}>
      <div className="loader-inner">
        <div className="loader-mark-ring">
          <svg viewBox="0 0 120 120" className="loader-ring-svg">
            <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(180,150,80,0.25)" strokeWidth="1" />
            <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(180,150,80,0.8)" strokeWidth="1"
              strokeDasharray="339" strokeDashoffset="339"
              className="loader-ring-draw" />
          </svg>
          <div className="loader-initials serif">CP</div>
        </div>
        <p className="loader-phonetic">/&#44;k&#603;t&#601;r&#618;s &#712;par&#618;b&#650;s/</p>
        <p className="loader-latin">All other things being equal</p>
        <div className="loader-dots">
          <span /><span /><span />
        </div>
      </div>
    </div>
  )
}
