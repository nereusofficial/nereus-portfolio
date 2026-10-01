import type { NavLink, Profile } from '@/types'

export const profile: Profile = {
  name: 'Daevid Lawrence Esporlas',
  role: 'full-stack developer',
  pitch: 'I build fast, accessible web apps with clean architecture and a obsession for detail.',
  bio: 'I am a full-stack developer with a passion for building products that are fast, accessible, and a joy to use. My focus is on clean architecture, thoughtful UX, and writing code that the next developer thanks you for.',
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
