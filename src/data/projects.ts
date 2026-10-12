import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'fitwise',
    slot: 'Project 1',
    name: 'Fitwise',
    description:
      'A fitness tracking web app — log workouts, track progress, and stay consistent with clean, data-driven insights.',
    stack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'Supabase'],
    },
    demoUrl: 'https://fitwise-frontend.vercel.app',
    status: 'in-progress',
  },
  {
    id: 'project-2',
    slot: 'Project 2',
    description: '[What it does, the problem it solves, and your role in building it.]',
    stack: {
      frontend: ['Next.js', 'Tailwind CSS'],
      backend: ['PostgreSQL'],
    },
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/project-2',
    comingSoon: true,
  },
  {
    id: 'project-3',
    slot: 'Project 3',
    description: '[What it does, the problem it solves, and your role in building it.]',
    stack: {
      frontend: ['TypeScript'],
      backend: ['Node.js', 'Docker'],
    },
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/project-3',
    comingSoon: true,
  },
]
