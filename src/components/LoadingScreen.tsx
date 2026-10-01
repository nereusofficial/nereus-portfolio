import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const INSTALL_LINES = [
  'added 1 package, and audited 2 packages in 1s',
  'found 0 vulnerabilities',
  '> portfolio@1.0.0 postinstall',
  '> node ./scripts/boot.js',
]

const BAR_LENGTH = 28

interface LoadingScreenProps {
  fading: boolean
}

export default function LoadingScreen({ fading }: LoadingScreenProps) {
  const reduceMotion = useReducedMotion()
  const [progress, setProgress] = useState(() => (reduceMotion ? 100 : 0))

  useEffect(() => {
    if (reduceMotion) return

    const duration = 1800
    const start = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setProgress(Math.round(eased * 100))
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reduceMotion])

  const filled = Math.round((progress / 100) * BAR_LENGTH)
  const bar = '█'.repeat(filled) + '░'.repeat(BAR_LENGTH - filled)

  return (
    <div
      role="status"
      aria-label="Installing portfolio"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-500 ${
        fading ? 'pointer-events-none scale-105 opacity-0' : 'opacity-100'
      }`}
    >
      <div className="w-full max-w-xl px-6 font-mono text-base sm:text-lg">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-neutral-300"
        >
          <span className="text-neutral-600">$</span> npm install daevid-portfolio
        </motion.p>

        <div className="mt-6 space-y-2">
          {INSTALL_LINES.map((line, index) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: reduceMotion ? 0 : 0.35 + index * 0.4, duration: 0.25 }}
              className="text-neutral-500"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduceMotion ? 0 : 0.5, duration: 0.3 }}
          className="mt-8 text-xl text-neutral-200 sm:text-2xl"
        >
          [{bar}] {progress}%
        </motion.p>

        <p className="mt-6 text-neutral-500">
          {progress < 100 ? 'installing' : 'installation complete'}
          <span className="animate-blink">_</span>
        </p>
      </div>
    </div>
  )
}
