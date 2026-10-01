import { useEffect, useState } from 'react'

export function useScrollSpy(ids: readonly string[]) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    const handleScroll = () => {
      const viewportMid = window.scrollY + window.innerHeight * 0.3
      let current = ids[0] ?? ''

      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= viewportMid) current = id
      }

      setActiveId(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ids])

  return activeId
}
