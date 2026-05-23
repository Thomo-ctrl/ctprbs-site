import { useState } from 'react'
import '../components/Services.css'

const services = [
  {
    number: '01',
    title: 'Consulting & Strategy',
    description:
      'We work at the intersection of insight and action. From organisational strategy to market positioning, we help clients make sharper decisions with lasting effect. Our approach is rigorous, independent, and always grounded in your specific context.',
    offering: [
      'Strategic planning & roadmapping',
      'Market & competitive analysis',
      'Organisational design',
      'Decision frameworks & advisory',
    ],
  },
  {
    number: '02',
    title: 'Content & Writing',
    description:
      'Ideas deserve clear expression. We craft content that informs, persuades, and endures — from thought leadership and brand narratives to reports and communications that build trust and authority over time.',
    offering: [
      'Thought leadership & editorial',
      'Brand voice & messaging',
      'Reports, whitepapers & proposals',
      'Speeches & executive communications',
    ],
  },
]

export default function ServicesPage() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <div className="services services--page">
      <div className="services-header">
        <p className="section-label">What We Do</p>
        <h2 className="section-title">Our Services</h2>
      </div>

      <ol className="services-list">
        {services.map((s, i) => (
          <li key={s.number} className="service-item">
            <button
              className={`service-row ${open === i ? 'service-row--open' : ''}`}
              onClick={() => toggle(i)}
              aria-expanded={open === i}
            >
              <span className="service-num serif">{s.number}</span>
              <span className="service-heading serif">{s.title}</span>
              <span className="service-chevron" aria-hidden="true">
                {open === i ? '−' : '+'}
              </span>
            </button>

            <div className={`service-body ${open === i ? 'service-body--open' : ''}`}>
              <p className="service-desc">{s.description}</p>
              <ul className="service-offering">
                {s.offering.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
