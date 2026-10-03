import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { profile } from '@/data/profile'
import { useTypewriter } from '@/hooks/useTypewriter'
import TerminalWindow from './TerminalWindow'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

interface HeroProps {
  loading: boolean
}

export default function Hero({ loading }: HeroProps) {
  const reduceMotion = useReducedMotion()
  const { displayed } = useTypewriter(`Hello, I'm ${profile.name}`, 70, 500, !loading)
  const { scrollY } = useScroll()
  const terminalY = useTransform(scrollY, [0, 600], [0, 90])

  return (
    <section
      id="top"
      className="bg-grid scanlines relative mt-[var(--nav-h)] flex min-h-[calc(100dvh-var(--nav-h))] items-center overflow-hidden scroll-mt-[var(--nav-h)]"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-10 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <motion.div
          variants={container}
          initial={reduceMotion || loading ? false : 'hidden'}
          animate={loading && !reduceMotion ? 'hidden' : 'show'}
        >
          <motion.p
            variants={item}
            className="mb-4 font-mono text-sm text-neutral-500 dark:text-fog"
          >
            <span className="text-neutral-400 dark:text-neutral-600">$</span> whoami
          </motion.p>

          <motion.h1
            variants={item}
            className="font-mono text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-neutral-400 dark:text-neutral-500">{'> '}</span>
            {displayed}
            <span
              aria-hidden="true"
              className="ml-1 inline-block h-[0.85em] w-[0.55em] translate-y-[0.1em] animate-blink bg-current"
            />
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 font-mono text-lg text-neutral-600 dark:text-fog sm:text-xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 max-w-xl indent-8 text-justify leading-relaxed text-neutral-600 dark:text-fog"
          >
            {profile.pitch}
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={
            loading && !reduceMotion ? { opacity: 0, y: 24 } : { opacity: 1, y: 0 }
          }
          transition={{ delay: reduceMotion ? 0 : 0.7, duration: 0.5, ease: 'easeOut' }}
          className="relative hidden lg:block"
        >
          <motion.div style={reduceMotion ? undefined : { y: terminalY }}>
            <div
              aria-hidden="true"
              className="absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,rgb(255_255_255/0.08),transparent_65%)] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.12),transparent_65%)]"
            />
            <div className={reduceMotion ? '' : 'animate-float'}>
              <TerminalWindow title="whoami">
                <p>
                  <span className="text-neutral-400 dark:text-neutral-600">$</span> whoami
                </p>
                <p className="text-neutral-600 dark:text-fog">{`> ${profile.name}`}</p>
                <p className="mt-3">
                  <span className="text-neutral-400 dark:text-neutral-600">$</span> cat ./role
                </p>
                <p className="text-neutral-600 dark:text-fog">{`> ${profile.role}`}</p>
                <p className="mt-3">
                  <span className="text-neutral-400 dark:text-neutral-600">$</span> pwd
                </p>
                <p className="text-neutral-600 dark:text-fog">{'> /home/nereus/portfolio'}</p>
                <p className="mt-3">
                  <span className="text-neutral-400 dark:text-neutral-600">$</span> uptime
                </p>
                <p className="text-neutral-600 dark:text-fog">{'> building things since 2020'}</p>
              </TerminalWindow>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {!reduceMotion && !loading && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 6, 0] }}
            transition={{
              opacity: { delay: 1.4, duration: 0.6 },
              y: { delay: 1.4, duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
            }}
            onClick={(event) => {
              event.preventDefault()
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="cursor-pointer font-mono text-xs text-neutral-500 transition-colors duration-200 hover:text-neutral-900 dark:text-fog dark:hover:text-white"
          >
            scroll ↓
          </motion.a>
        </div>
      )}
    </section>
  )
}
