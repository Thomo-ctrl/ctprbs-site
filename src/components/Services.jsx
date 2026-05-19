import './Services.css'

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

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <p className="section-label">What We Do</p>
          <h2 className="section-title">Our Services</h2>
        </div>

        <div className="services-grid">
          {services.map(s => (
            <div key={s.number} className="service-card">
              <span className="service-number serif">{s.number}</span>
              <h3 className="service-title serif">{s.title}</h3>
              <div className="divider" />
              <p className="service-desc">{s.description}</p>
              <ul className="service-list">
                {s.offering.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
