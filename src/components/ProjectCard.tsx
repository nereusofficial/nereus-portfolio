import { useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types'
import { GithubIcon } from './icons'

interface ProjectCardProps {
  project: Project
}

interface TiltState {
  rx: number
  ry: number
  gx: number
  gy: number
}

const idleTilt: TiltState = { rx: 0, ry: 0, gx: 50, gy: 50 }

export default function ProjectCard({ project }: ProjectCardProps) {
  const reduceMotion = useReducedMotion()
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState<TiltState>(idleTilt)

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height
    setTilt({
      rx: (0.5 - py) * 7,
      ry: (px - 0.5) * 9,
      gx: px * 100,
      gy: py * 100,
    })
  }

  const resetTilt = () => setTilt(idleTilt)

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className="group relative h-full cursor-pointer border border-neutral-300 bg-white shadow-[8px_8px_0_0_rgb(0_0_0/0.07),0_24px_50px_-16px_rgb(0_0_0/0.28)] transition-[border-color,box-shadow] duration-300 will-change-transform [perspective:1000px] hover:border-neutral-900 hover:shadow-[10px_10px_0_0_rgb(0_0_0/0.09),0_36px_70px_-18px_rgb(0_0_0/0.4)] dark:border-line dark:bg-panel dark:shadow-[8px_8px_0_0_rgb(255_255_255/0.06),0_24px_50px_-16px_rgb(0_0_0/0.65)] dark:hover:border-neutral-400 dark:hover:shadow-[10px_10px_0_0_rgb(255_255_255/0.08),0_36px_70px_-18px_rgb(0_0_0/0.8)]"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) ${reduceMotion ? '' : 'translateZ(0)'}`,
          transition: 'transform 0.15s ease-out, border-color 0.3s, box-shadow 0.3s',
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            opacity: tilt.rx === 0 && tilt.ry === 0 ? 0 : 1,
            background: `radial-gradient(circle at ${tilt.gx}% ${tilt.gy}%, rgb(255 255 255 / 0.09), transparent 55%)`,
          }}
        />

        <div className="relative flex h-full flex-col">
          <div className="flex items-center gap-2 border-b border-neutral-300 px-4 py-2.5 dark:border-line">
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <span className="ml-2 font-mono text-xs text-neutral-500 dark:text-fog">
              {project.title}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-mono text-lg font-bold tracking-tight">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-fog">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
              {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-xs text-neutral-500 dark:text-fog">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-5 border-t border-neutral-200 pt-4 dark:border-line">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-sm transition-colors duration-200 hover:text-neutral-900 dark:hover:text-white"
                >
                  live demo
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} source code on GitHub`}
                  className="inline-flex items-center gap-1.5 font-mono text-sm text-neutral-600 transition-colors duration-200 hover:text-neutral-900 dark:text-fog dark:hover:text-white"
                >
                  <GithubIcon className="h-4 w-4" />
                  source
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
