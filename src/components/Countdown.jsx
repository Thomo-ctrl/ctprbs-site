import { useState, useEffect } from 'react'
import { COUNTDOWN_END } from '../data/earnings'
import './Countdown.css'

function getTimeLeft() {
  const now = new Date()
  const end = COUNTDOWN_END

  if (now >= end) return null

  // Months remaining (using calendar months)
  let months = (end.getFullYear() - now.getFullYear()) * 12 + (end.getMonth() - now.getMonth())

  // Date after adding those months to now
  const afterMonths = new Date(now.getFullYear(), now.getMonth() + months, now.getDate(),
    now.getHours(), now.getMinutes(), now.getSeconds())

  // Overshot? Step back one month
  if (afterMonths > end) {
    months--
    afterMonths.setMonth(afterMonths.getMonth() - 1)
  }

  const remainMs = end - afterMonths
  const totalSecs = Math.floor(remainMs / 1000)
  const totalMins = Math.floor(totalSecs / 60)
  const totalHrs  = Math.floor(totalMins / 60)
  const totalDays = Math.floor(totalHrs  / 24)

  return {
    months,
    weeks:   Math.floor(totalDays / 7),
    days:    totalDays % 7,
    hours:   totalHrs  % 24,
    minutes: totalMins % 60,
    seconds: totalSecs % 60,
  }
}

function pad(n) {
  return String(n).padStart(2, '0')
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft)
  const [labelVisible, setLabelVisible] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!time) {
    return (
      <div className="cd-block">
        <p className="cd-complete">Journey complete.</p>
      </div>
    )
  }

  return (
    <div className="cd-block" onClick={() => setLabelVisible(v => !v)}>
      {labelVisible && (
        <p className="cd-label">TIME WE HAVE LEFT&hellip;</p>
      )}

      <div className="cd-units">
        <div className="cd-unit">
          <span className="cd-value serif">{pad(time.months)}</span>
          <span className="cd-name">mo</span>
        </div>
        <span className="cd-sep">:</span>
        <div className="cd-unit">
          <span className="cd-value serif">{pad(time.weeks)}</span>
          <span className="cd-name">wk</span>
        </div>
        <span className="cd-sep">:</span>
        <div className="cd-unit">
          <span className="cd-value serif">{pad(time.days)}</span>
          <span className="cd-name">d</span>
        </div>
        <span className="cd-sep">:</span>
        <div className="cd-unit">
          <span className="cd-value serif">{pad(time.hours)}</span>
          <span className="cd-name">hr</span>
        </div>
        <span className="cd-sep">:</span>
        <div className="cd-unit">
          <span className="cd-value serif">{pad(time.minutes)}</span>
          <span className="cd-name">min</span>
        </div>
        <span className="cd-sep">:</span>
        <div className="cd-unit cd-unit--seconds">
          <span className="cd-value serif">{pad(time.seconds)}</span>
          <span className="cd-name">sec</span>
        </div>
      </div>
    </div>
  )
}
