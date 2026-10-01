import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

const INITIAL_COUNT = 6

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  const hasMore = projects.length > INITIAL_COUNT
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT)

  return (
    <section
      id="projects"
      className="bg-grid flex min-h-[calc(100dvh-var(--nav-h))] flex-col justify-center border-t border-neutral-200 scroll-mt-[var(--nav-h)] dark:border-line"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="font-mono text-sm text-neutral-500 dark:text-fog">01_projects</p>
          <h2 className="mt-2 font-mono text-3xl font-bold tracking-tight sm:text-4xl">
            selected work
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {hasMore && !showAll && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="mt-12 text-center"
          >
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="cursor-pointer border border-neutral-400 px-6 py-3 font-mono text-sm transition-colors duration-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white dark:border-neutral-600 dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
            >
              see more
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
