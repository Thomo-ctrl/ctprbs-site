import { useEffect, useRef, useState } from 'react'
import './Counter.css'

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

export default function Counter() {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)
  const TARGET = 37_000_000_000
  const DURATION = 3000

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let startTime = null
    let raf
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / DURATION, 1)
      setCount(Math.floor(easeOutExpo(progress) * TARGET))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [started])

  const formatted = count.toLocaleString('en-KE')

  return (
    <div className="counter" ref={ref}>
      <p className="counter-label">The Goal</p>
      <div className="counter-display">
        <span className="counter-currency">KES</span>
        <span className="counter-number serif">{formatted}</span>
      </div>
      <p className="counter-sub">Documenting the journey — from zero to 37 billion Kenya shillings</p>
      <div className="counter-track">
        <div className="counter-fill" style={{ width: '0.01%' }} />
      </div>
      <p className="counter-progress">Journey begins &rarr;</p>
    </div>
  )
}
