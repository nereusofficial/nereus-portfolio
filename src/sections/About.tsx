import { motion } from 'framer-motion'
import { skills } from '@/data/skills'
import { profile } from '@/data/profile'
import TerminalWindow from '@/components/TerminalWindow'

const categories = ['Frontend', 'Backend', 'Tools'] as const

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-[calc(100dvh-var(--nav-h))] flex-col justify-center border-t border-neutral-200 scroll-mt-[var(--nav-h)] dark:border-line"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="font-mono text-sm text-neutral-500 dark:text-fog">{"// about.tsx"}</p>
          <h2 className="mt-2 font-mono text-3xl font-bold tracking-tight sm:text-4xl">about</h2>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <p className="indent-8 text-justify leading-relaxed text-neutral-600 dark:text-fog">
              {profile.bio}
            </p>
            <p className="mt-4 indent-8 text-justify leading-relaxed text-neutral-600 dark:text-fog">
              With a foundation in both frontend and backend development, I specialize in building end-to-end systems, from the database and server logic to the dashboard the user sees. My thesis project, a facial recognition security system with role-based access control, real-time monitoring, and AI-powered identification, shows how I combine modern web development with intelligent technology to solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          >
            <TerminalWindow title="skills.sh">
              <p>
                <span className="text-neutral-400 dark:text-neutral-600">$</span> npm run skills
              </p>
              <p className="mt-1 text-neutral-400 dark:text-neutral-600">
                {'> portfolio@1.0.0 skills'}
              </p>
              {categories.map((category) => (
                <div key={category} className="mt-3">
                  <p className="font-bold text-neutral-900 dark:text-white">{category}:</p>
                  <p className="text-neutral-600 dark:text-fog">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill) => skill.name)
                      .join(', ')}
                  </p>
                </div>
              ))}
            </TerminalWindow>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
