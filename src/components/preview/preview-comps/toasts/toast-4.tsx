'use client'

import { useState } from 'react'

export default function ToastColorSchemesExample() {
  const [visible, setVisible] = useState(true)

  return (
    <>
      {visible && (
        <div
          role="status"
          aria-live="polite"
          className="flex w-full max-w-sm items-center rounded-lg bg-blue-600 text-white shadow-lg"
        >
          <div className="flex w-full items-center">
            <div className="px-4 py-3 text-sm">
              Hello, world! This is a toast message.
            </div>

            <button
              type="button"
              onClick={() => setVisible(false)}
              aria-label="Close"
              className="m-auto mr-2 rounded-md p-1.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 1 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414Z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
