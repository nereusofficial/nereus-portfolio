import type { ReactNode } from 'react'

interface TerminalWindowProps {
  title: string
  meta?: ReactNode
  children: ReactNode
}

export default function TerminalWindow({ title, meta, children }: TerminalWindowProps) {
  return (
    <div className="relative overflow-hidden border border-neutral-300 bg-white shadow-[8px_8px_0_0_rgb(0_0_0/0.07),0_24px_50px_-16px_rgb(0_0_0/0.28)] dark:border-line dark:bg-panel dark:shadow-[8px_8px_0_0_rgb(255_255_255/0.06),0_24px_50px_-16px_rgb(0_0_0/0.65)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10 dark:bg-white/15"
      />
      <div className="flex items-center gap-2 border-b border-neutral-300 px-4 py-2.5 dark:border-line">
        <span className="h-3 w-3 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        <span className="h-3 w-3 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        <span className="h-3 w-3 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        <span className="ml-2 flex-1 truncate font-mono text-xs text-neutral-500 dark:text-fog">
          {title}
        </span>
        {meta && (
          <span className="shrink-0 font-mono text-xs text-neutral-500 dark:text-fog">{meta}</span>
        )}
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed">{children}</div>
    </div>
  )
}
