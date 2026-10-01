import { profile } from '@/data/profile'
import { FacebookIcon, GithubIcon, IndeedIcon, InstagramIcon } from './icons'

const socialLinks = [
  { href: profile.github, label: 'GitHub', Icon: GithubIcon, iconClass: 'h-4 w-4' },
  { href: profile.indeed, label: 'Indeed', Icon: IndeedIcon, iconClass: 'h-2.5 w-auto' },
  { href: profile.facebook, label: 'Facebook', Icon: FacebookIcon, iconClass: 'h-4 w-4' },
  { href: profile.instagram, label: 'Instagram', Icon: InstagramIcon, iconClass: 'h-4 w-4' },
]

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row">
        <p className="font-mono text-xs text-neutral-500 dark:text-fog">
          {"// built with React + TypeScript"}
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ href, label, Icon, iconClass }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center border border-neutral-300 transition-colors duration-200 hover:bg-neutral-900 hover:text-white dark:border-line dark:hover:bg-white dark:hover:text-black"
            >
              <Icon className={iconClass} />
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-neutral-500 dark:text-fog">
          © 2026 {profile.name}
        </p>
      </div>
    </footer>
  )
}
