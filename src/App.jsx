import { useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PageLayout from './components/PageLayout'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import IdeasPage from './pages/IdeasPage'
import InGreatCompany from './pages/InGreatCompany'
import JourneyPage from './pages/JourneyPage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState('home')

  const navigate = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const isHome = page === 'home'

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div className={`site-wrap ${loading ? 'site-hidden' : 'site-visible'}`}>
        {isHome ? (
          <>
            <Navbar currentPage={page} navigate={navigate} />
            <main>
              <Hero navigate={navigate} />
            </main>
            <Footer />
          </>
        ) : (
          <PageLayout currentPage={page} navigate={navigate}>
            {page === 'about'    && <AboutPage />}
            {page === 'services' && <ServicesPage />}
            {page === 'ideas'    && <IdeasPage />}
            {page === 'journey'  && <JourneyPage />}
            {page === 'igc'      && <InGreatCompany />}
            {page === 'contact'  && <ContactPage />}
          </PageLayout>
        )}
      </div>
    </>
  )
}
