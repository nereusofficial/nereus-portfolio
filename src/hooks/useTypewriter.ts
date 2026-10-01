import { useEffect, useState } from 'react'

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function useTypewriter(text: string, typeSpeed = 70, startDelay = 500, active = true) {
  const [displayed, setDisplayed] = useState(() => (prefersReducedMotion() ? text : ''))
  const [done, setDone] = useState(() => prefersReducedMotion())

  useEffect(() => {
    if (!active || done) return

    let index = 0
    let interval: number | undefined

    const timeout = window.setTimeout(() => {
      interval = window.setInterval(() => {
        index += 1
        setDisplayed(text.slice(0, index))
        if (index >= text.length) {
          if (interval !== undefined) window.clearInterval(interval)
          setDone(true)
        }
      }, typeSpeed)
    }, startDelay)

    return () => {
      window.clearTimeout(timeout)
      if (interval !== undefined) window.clearInterval(interval)
    }
  }, [text, typeSpeed, startDelay, active, done])

  return { displayed, done }
}
