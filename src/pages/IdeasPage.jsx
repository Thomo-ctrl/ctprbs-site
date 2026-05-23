import { useState } from 'react'
import '../components/Ideas.css'

const industries = [
  {
    number: '01',
    name: 'Technology & Digital',
    ideas: [
      { title: 'SME Financial SaaS', desc: 'Cloud platform helping small businesses track revenue, expenses and growth milestones in real time.' },
      { title: 'AI Agricultural Advisory App', desc: 'Mobile tool giving smallholder farmers live market prices, weather data and crop management guidance.' },
      { title: 'B2B Logistics Optimisation', desc: 'Tech solution cutting last-mile delivery costs for Kenyan businesses through route intelligence and load matching.' },
      { title: 'Professional Services Marketplace', desc: 'Vetted consultant-to-corporate matching platform across East Africa — strategy, legal, finance and comms.' },
    ],
  },
  {
    number: '02',
    name: 'Real Estate & Property',
    ideas: [
      { title: 'Affordable Mixed-Use Development', desc: 'High-density residential and retail spaces targeting Kenya\'s rising middle class in satellite towns.' },
      { title: 'Commercial Property Investment Fund', desc: 'Pooled vehicle for office and retail assets in Nairobi CBD and growth corridors.' },
      { title: 'PropTech Verification Platform', desc: 'Digital land registry verification and secure property transaction management for buyers and agents.' },
      { title: 'Student Housing Development', desc: 'Purpose-built, professionally managed student accommodation near Kenya\'s major universities.' },
    ],
  },
  {
    number: '03',
    name: 'Agriculture & Agribusiness',
    ideas: [
      { title: 'Export Horticulture Contract Farming', desc: 'Aggregating smallholder flower and vegetable farmers to supply certified EU and UK export markets.' },
      { title: 'Cold Chain Logistics Network', desc: 'Refrigerated transport and storage infrastructure reducing post-harvest losses for perishable produce.' },
      { title: 'Agricultural Input Franchise', desc: 'Rural franchise model supplying certified seeds, fertilisers and agrochemicals with farmer training.' },
      { title: 'Aquaculture Processing Plant', desc: 'Value-added fish processing targeting local retail, hospitality and export demand from Lake Victoria farms.' },
    ],
  },
  {
    number: '04',
    name: 'Media & Communications',
    ideas: [
      { title: 'Executive Thought Leadership Studio', desc: 'Ghostwriting, editorial strategy and publishing for C-suite leaders, boards and public figures.' },
      { title: 'East African Business Intelligence', desc: 'Subscription newsletter and research reports on investment, policy and market trends across the region.' },
      { title: 'Corporate Communications Consultancy', desc: 'Crisis comms, speech writing, presentation coaching and brand narrative for corporates and government.' },
      { title: 'African Brand Storytelling Agency', desc: 'Long-form content and documentary-style brand journalism for multinational and local corporates.' },
    ],
  },
  {
    number: '05',
    name: 'Financial Services & Consulting',
    ideas: [
      { title: 'SME Growth Capital Advisory', desc: 'Matching small businesses with appropriate debt and equity financing across Kenyan and DFI networks.' },
      { title: 'Diaspora Investment Structuring', desc: 'Helping Kenyans abroad channel remittances into productive, tax-efficient asset classes.' },
      { title: 'Corporate Strategy Consulting', desc: 'Board-level advisory on growth transformation, competitive positioning and capital allocation.' },
      { title: 'Foreign Market Entry Advisory', desc: 'Guiding international companies through regulatory, cultural and commercial entry into East Africa.' },
    ],
  },
]

export default function IdeasPage() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <div className="ideas ideas--page">
      <div className="ideas-header">
        <p className="section-label">The Blueprint</p>
        <h2 className="section-title">20 Ideas. One Destination.</h2>
        <p className="ideas-intro">
          Each idea is a vehicle — built to generate revenue, create value and compound toward the goal.
          Some will be sold. Others will become the engine of ongoing consulting practices.
          All are grounded in real market demand.
        </p>
      </div>

      <ol className="ideas-accordion">
        {industries.map((ind, i) => (
          <li key={ind.number} className="ideas-item">
            <button
              className={`ideas-row ${open === i ? 'ideas-row--open' : ''}`}
              onClick={() => toggle(i)}
              aria-expanded={open === i}
            >
              <span className="ideas-num serif">{ind.number}</span>
              <span className="ideas-heading serif">{ind.name}</span>
              <span className="ideas-chevron" aria-hidden="true">
                {open === i ? '−' : '+'}
              </span>
            </button>

            <div className={`ideas-body ${open === i ? 'ideas-body--open' : ''}`}>
              <ol className="idea-sublist">
                {ind.ideas.map((idea, j) => (
                  <li key={idea.title} className="idea-subitem">
                    <span className="idea-subnum serif">{i * 4 + j + 1}</span>
                    <div className="idea-subcontent">
                      <h4 className="idea-subtitle">{idea.title}</h4>
                      <p className="idea-subdesc">{idea.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
