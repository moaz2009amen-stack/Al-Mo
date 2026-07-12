import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyWorkWithMe from './components/WhyWorkWithMe'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Process from './components/Process'
import Stats from './components/Stats'
import FAQ from './components/FAQ'
import ContactCTA from './components/ContactCTA'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { useLanguage } from './context/LanguageContext'

export default function App() {
  const [loading, setLoading] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    document.title = t.meta.title
  }, [t])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen visible={loading} />
      <Navbar />
      <main>
        <Hero />
        <WhyWorkWithMe />
        <Services />
        <Projects />
        <About />
        <Process />
        <Stats />
        <FAQ />
        <ContactCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
