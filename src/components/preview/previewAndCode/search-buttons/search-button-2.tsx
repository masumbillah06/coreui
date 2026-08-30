'use client'

import { useEffect, useState } from 'react'

export default function SearchButtonCustomShortcutExample() {
  const [count, setCount] = useState(0)

  const triggerSearch = () => {
    setCount((value) => value + 1)
  }

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'i') {
        event.preventDefault()
        triggerSearch()
      }
    }

    window.addEventListener('keydown', handleShortcut)

    return () => {
      window.removeEventListener('keydown', handleShortcut)
    }
  }, [])

  return (
    <div>
      <button
        type="button"
        onClick={triggerSearch}
        aria-label="Open command palette"
        className="inline-flex h-10 items-center gap-2 rounded-md border border-gray-300 bg-white px-4 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </svg>

        Command palette

        <kbd className="ml-2 rounded border border-gray-200 bg-gray-100 px-1.5 py-0.5 text-xs text-gray-500">
          ⌘I / Ctrl+I
        </kbd>
      </button>

      <div
        role="alert"
        className="mt-3 rounded-md border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-800"
      >
        Triggered {count} {count === 1 ? 'time' : 'times'} with click or shortcut.
      </div>
    </div>
  )
}
