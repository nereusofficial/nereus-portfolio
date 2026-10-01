import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'fitwise',
    title: 'FitWise',
    description:
      'A fitness tracking web app — log workouts, track progress, and stay consistent with clean, data-driven insights.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://fitwise-frontend.vercel.app',
  },
  {
    id: 'project-2',
    title: '[Project 2]',
    description: '[What it does, the problem it solves, and your role in building it.]',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/project-2',
  },
  {
    id: 'project-3',
    title: '[Project 3]',
    description: '[What it does, the problem it solves, and your role in building it.]',
    tags: ['TypeScript', 'Node.js', 'Docker'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/project-3',
  },
]
