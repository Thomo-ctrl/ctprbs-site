import { useState } from 'react'
import '../components/Services.css'

const services = [
  {
    number: '01',
    title: 'Consulting',
    description:
      'We work with organisations and individuals who need a clear-eyed external perspective. From diagnostic assessments to ongoing advisory, we bring rigorous thinking, sector experience, and an independent voice to your most important decisions.',
    offering: [
      'Organisational diagnostics & advisory',
      'Market entry & competitive analysis',
      'Stakeholder engagement & facilitation',
      'Decision frameworks & board support',
    ],
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'Strategy is not a document — it is a set of choices that hold under pressure. We help clients define where to compete, how to win, and what to stop doing. Our approach is direct, evidence-based, and always grounded in your specific context.',
    offering: [
      'Strategic planning & roadmapping',
      'Organisational design & restructuring',
      'Growth strategy & positioning',
      'Scenario planning & risk framing',
    ],
  },
  {
    number: '03',
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
