import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/profile'
import { useScrollSpy } from '@/hooks/useScrollSpy'

const sectionIds = navLinks.map((link) => link.id)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds)

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-40 border-b border-neutral-200 bg-paper/90 backdrop-blur-md dark:border-line dark:bg-ink/90"
    >
      <nav
        aria-label="Main navigation"
        className="relative flex h-[var(--nav-h)] items-center px-4 sm:px-6"
      >
        <span className="font-mono text-sm font-bold tracking-tight">
          <span className="text-neutral-400 dark:text-neutral-600">~/</span>nereus
          <span className="animate-blink">_</span>
        </span>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={activeId === link.id ? 'true' : undefined}
                className="group relative py-2 font-mono text-sm transition-colors duration-200"
              >
                <span
                  className={
                    activeId === link.id
                      ? 'text-neutral-900 dark:text-white'
                      : 'text-neutral-500 group-hover:text-neutral-900 dark:text-fog dark:group-hover:text-white'
                  }
                >
                  {link.label}
                </span>
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-0.5 left-0 h-px bg-neutral-900 transition-all duration-300 dark:bg-white ${
                    activeId === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="ml-auto flex h-9 w-9 cursor-pointer items-center justify-center border border-neutral-300 transition-colors duration-200 hover:bg-neutral-900 hover:text-white md:hidden dark:border-line dark:hover:bg-white dark:hover:text-black"
        >
          {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-b border-neutral-200 bg-paper md:hidden dark:border-line dark:bg-ink"
          >
            <ul className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="group relative block px-3 py-2 font-mono text-sm"
                  >
                    <span
                      className={
                        activeId === link.id
                          ? 'text-neutral-900 dark:text-white'
                          : 'text-neutral-500 dark:text-fog'
                      }
                    >
                      {link.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-1 left-3 h-px bg-neutral-900 transition-all duration-300 dark:bg-white ${
                        activeId === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
