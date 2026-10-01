import { motion } from 'framer-motion'
import { profile } from '@/data/profile'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-grid flex min-h-[calc(100dvh-var(--nav-h))] flex-col justify-center border-t border-neutral-200 scroll-mt-[var(--nav-h)] dark:border-line"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="font-mono text-sm text-neutral-500 dark:text-fog">03_contact</p>
          <h2 className="mt-2 font-mono text-3xl font-bold tracking-tight sm:text-4xl">
            get in touch
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <h3 className="font-mono text-xl font-bold tracking-tight">let's work together</h3>
            <p className="mt-4 indent-8 text-justify leading-relaxed text-neutral-600 dark:text-fog">
              Open to freelance projects, full-time roles, and interesting collaborations. if you
              have an idea or just want to talk shop, my inbox is always open.
            </p>
            <div className="mt-8 font-mono text-sm">
              <p className="text-neutral-500 dark:text-fog">
                <span className="text-neutral-400 dark:text-neutral-600">$</span> mail
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-1 inline-block border-b border-neutral-300 pb-0.5 transition-colors duration-200 hover:border-neutral-900 dark:border-line dark:hover:border-neutral-400"
              >
                {profile.email}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
