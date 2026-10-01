import type { NavLink, Profile } from '@/types'

export const profile: Profile = {
  name: 'Daevid Lawrence Esporlas',
  role: 'Web Developer',
  pitch: 'I design and build responsive, user-friendly web applications with React, Node.js, and PostgreSQL, from database to interface.',
  bio: 'I am a full stack web developer with a passion for building fast, reliable, and user-friendly web applications. My expertise lies in turning ideas into complete, working products using React, TypeScript, Tailwind CSS, Node.js, and PostgreSQL, with a strong focus on clean architecture and interfaces that feel effortless to use.',
  github: 'https://github.com/nereusofficial',
  indeed: 'https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage',
  facebook: 'https://www.facebook.com/official.nereus1',
  instagram: 'https://www.instagram.com/law.wwr',
  email: 'main.nereusofficial@gmail.com',
}

export const navLinks: NavLink[] = [
  { id: 'top', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'projects', label: 'projects' },
  { id: 'journey', label: 'journey' },
  { id: 'contact', label: 'contact' },
]
