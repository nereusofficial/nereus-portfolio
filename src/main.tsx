import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/inter'
import '@fontsource-variable/jetbrains-mono'
import './index.css'
import App from './App.tsx'
import ErrorBoundary from '@/components/ErrorBoundary'

declare global {
  interface Window {
    __BOOTED?: boolean
  }
}

window.addEventListener('error', (event) => {
  const err = event.error as Error | undefined
  console.error('[window.error]', err?.message ?? event.message, err?.stack ?? '')
})

window.addEventListener('unhandledrejection', (event) => {
  console.error('[unhandledrejection]', event.reason)
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
