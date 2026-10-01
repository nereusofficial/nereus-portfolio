import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Backdrop from '@/components/Backdrop'
import LoadingScreen from '@/components/LoadingScreen'
import About from '@/sections/About'
import Projects from '@/sections/Projects'
import Journey from '@/sections/Journey'
import Contact from '@/sections/Contact'

export default function App() {
  const reduceMotion = useReducedMotion()
  const [loading, setLoading] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (!loading || fading) return
    const timer = window.setTimeout(() => setFading(true), reduceMotion ? 1200 : 2900)
    return () => window.clearTimeout(timer)
  }, [loading, fading, reduceMotion])

  useEffect(() => {
    if (!loading || !fading) return
    const timer = window.setTimeout(() => setLoading(false), 500)
    return () => window.clearTimeout(timer)
  }, [loading, fading])

  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        setFading(false)
        setLoading(true)
      }
    }
    window.addEventListener('pageshow', handlePageShow)
    return () => window.removeEventListener('pageshow', handlePageShow)
  }, [])

  return (
    <div className="relative min-h-screen bg-paper text-neutral-900 dark:bg-ink dark:text-neutral-100">
      <Backdrop />
      {loading && <LoadingScreen fading={fading} />}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero loading={loading} />
          <About />
          <Projects />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
