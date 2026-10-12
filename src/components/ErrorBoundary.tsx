import { Component } from 'react'
import type { ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  errorMessage: string
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, errorMessage: '' }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMessage: error.message }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[ErrorBoundary] message:', error.message)
    console.error('[ErrorBoundary] stack:', error.stack)
    console.error('[ErrorBoundary] component stack:', info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-ink px-6 font-mono">
          <div className="w-full max-w-md border border-line bg-panel p-8">
            <p className="text-xl font-bold text-white">something went wrong</p>
            <p className="mt-2 text-sm text-fog">
              The page hit an unexpected error. Please try reloading.
            </p>
            <p className="mt-4 break-words border border-line bg-ink p-3 text-xs text-neutral-500">
              {this.state.errorMessage || 'unknown error'}
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 cursor-pointer border border-white px-5 py-2.5 text-sm text-white transition-colors duration-200 hover:bg-white hover:text-black"
            >
              reload page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
