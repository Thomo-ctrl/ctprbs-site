// ─────────────────────────────────────────────────────────────────
// UPDATE THIS FILE as earnings come in.
// total = sum of all industry amounts below (no need to compute
// manually — the site reads each industry and sums them).
// ─────────────────────────────────────────────────────────────────

export const GOAL = 37_000_000_000   // KES — do not change this

export const EARNINGS = [
  { industry: 'Technology & Digital',            amount: 0 },
  { industry: 'Real Estate & Property',          amount: 0 },
  { industry: 'Agriculture & Agribusiness',      amount: 0 },
  { industry: 'Media & Communications',          amount: 0 },
  { industry: 'Financial Services & Consulting', amount: 0 },
]

// ─────────────────────────────────────────────────────────────────
// Countdown end date — 37 months from September 21, 2025
// = October 21, 2028
// ─────────────────────────────────────────────────────────────────
export const COUNTDOWN_END = new Date('2028-10-21T00:00:00')
