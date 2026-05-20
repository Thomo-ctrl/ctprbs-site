import { useState } from 'react'
import { GOAL, EARNINGS } from '../data/earnings'
import './Counter.css'

const totalMade = EARNINGS.reduce((sum, e) => sum + e.amount, 0)
const remaining = GOAL - totalMade

function formatAmount(n) {
  // Always format as 00,000,000,000.00 (11 digits, zero-padded)
  const fixed = Math.abs(n).toFixed(2)
  const [whole, dec] = fixed.split('.')
  const padded = whole.padStart(11, '0')
  const formatted = padded.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return formatted + '.' + dec
}

export default function Counter() {
  const [revealed, setRevealed] = useState(false)
  const [showBreakdown, setShowBreakdown] = useState(false)

  const handleClick = () => {
    setRevealed(r => !r)
    setShowBreakdown(false)
  }

  return (
    <div className="counter-block" onClick={handleClick}>
      {revealed && (
        <p className="counter-label-reveal">AMOUNT MADE</p>
      )}

      <div className="counter-figure">
        <span className="counter-currency">KES</span>
        <span className="counter-number serif">
          {formatAmount(revealed ? totalMade : remaining)}
        </span>
      </div>

      {!revealed && (
        <p className="counter-remaining-hint">remaining to goal</p>
      )}

      {/* Industry breakdown — click the amount when revealed */}
      {revealed && (
        <div className="counter-breakdown" onClick={e => { e.stopPropagation(); setShowBreakdown(s => !s) }}>
          <button className="counter-breakdown-toggle">
            {showBreakdown ? 'hide breakdown ↑' : 'by industry ↓'}
          </button>
          {showBreakdown && (
            <ul className="counter-industry-list">
              {EARNINGS.map(e => (
                <li key={e.industry} className="counter-industry-row">
                  <span className="ci-name">{e.industry}</span>
                  <span className="ci-amount">KES {formatAmount(e.amount)}</span>
                </li>
              ))}
              <li className="counter-industry-row counter-industry-total">
                <span className="ci-name">Total</span>
                <span className="ci-amount">KES {formatAmount(totalMade)}</span>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
