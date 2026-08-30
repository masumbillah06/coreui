'use client'

import { useEffect, useRef, useState } from 'react'

const recentSearches = [
  'CoreUI components overview',
  'Modal dialog examples',
  'Sidebar navigation customization',
]

export default function SearchButtonExample() {
  const [visible, setVisible] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      const isShortcut =
        (event.metaKey || event.ctrlKey) && event.key === '/'

      if (isShortcut) {
        event.preventDefault()
        setVisible(true)
      }

      if (event.key === 'Escape') {
        setVisible(false)
      }
    }

    window.addEventListener('keydown', handleShortcut)

    return () => {
      window.removeEventListener('keydown', handleShortcut)
    }
  }, [])

  useEffect(() => {
    if (visible) {
      requestAnimationFrame(() => {
        inputRef.current?.focus()
      })
    }
  }, [visible])

  return (
    <>
      {/* Search button */}
      <button
        type="button"
        aria-label="Open search dialog"
        aria-controls="search-button-modal"
        onClick={() => setVisible(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </svg>
      </button>

      {/* Search modal */}
      {visible && (
        <div
          id="search-button-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="search-button-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setVisible(false)
            }
          }}
        >
          <div className="w-full max-w-lg overflow-hidden rounded-lg bg-white shadow-xl">
            {/* Header */}
            <div className="flex items-center border-b border-gray-200 px-6 py-4">
              <h2
                id="search-button-modal-title"
                className="w-full"
              >
                <input
                  ref={inputRef}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </h2>

              <button
                type="button"
                onClick={() => setVisible(false)}
                aria-label="Close search dialog"
                className="ml-3 shrink-0 rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414Z" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5">
              <p className="mb-2 text-xs font-medium text-gray-500">
                Recent searches
              </p>

              <div className="divide-y divide-gray-200 overflow-hidden rounded-md border border-gray-200">
                {recentSearches.map((search) => (
                  <button
                    key={search}
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    <span>{search}</span>

                    <span className="ml-4 shrink-0 rounded-full bg-gray-600 px-2.5 py-0.5 text-xs font-medium text-white">
                      Open
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
