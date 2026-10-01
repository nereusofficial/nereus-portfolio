import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { experience } from '@/data/experience'
import type { JourneyType } from '@/types'

const TYPE_BADGES: Record<JourneyType, string> = {
  education: '[edu]',
  project: '[proj]',
  certification: '[cert]',
  activity: '[act]',
  work: '[work]',
}

export default function Journey() {
  return (
    <section
      id="journey"
      className="flex min-h-[calc(100dvh-var(--nav-h))] flex-col justify-center border-t border-neutral-200 scroll-mt-[var(--nav-h)] dark:border-line"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="font-mono text-sm text-neutral-500 dark:text-fog">{"// journey.tsx"}</p>
          <h2 className="mt-2 font-mono text-3xl font-bold tracking-tight sm:text-4xl">
            journey
          </h2>
        </motion.div>

        <div className="mt-12 border-l-2 border-neutral-300 pl-6 dark:border-line sm:pl-8">
          {experience.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
              className="relative pb-10 last:pb-0"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-neutral-300 bg-paper sm:-left-[37px] dark:border-line dark:bg-ink"
              />

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <span className="border border-neutral-300 px-1.5 py-0.5 font-mono text-[10px] tracking-wider text-neutral-500 dark:border-line dark:text-fog">
                  {TYPE_BADGES[entry.type]}
                </span>
                <h3 className="font-mono text-lg font-bold tracking-tight text-neutral-900 dark:text-white">
                  {entry.title}
                </h3>
                <span className="font-mono text-sm text-neutral-500 dark:text-fog">
                  @ {entry.place}
                </span>
                <span className="ml-auto font-mono text-xs text-neutral-500 dark:text-fog">
                  {entry.period}
                </span>
              </div>

              <p className="mt-2 max-w-2xl indent-8 text-justify text-sm leading-relaxed text-neutral-600 dark:text-fog">
                {entry.description}
              </p>

              {entry.link && (
                <a
                  href={entry.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 font-mono text-xs text-neutral-500 transition-colors duration-200 hover:text-neutral-900 dark:text-fog dark:hover:text-white"
                >
                  view
                  <ArrowRight className="h-3 w-3" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
