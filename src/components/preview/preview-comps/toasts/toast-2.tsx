'use client'

import { useState } from 'react'

export default function ToastLiveExample() {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setVisible(true)}
        className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Send a toast
      </button>

      {visible && (
        <div className="fixed right-0 top-0 z-50 p-3">
          <div
            role="status"
            aria-live="polite"
            className="w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
          >
            {/* Toast header */}
            <div className="flex items-center border-b border-gray-200 px-4 py-3">
              <svg
                className="mr-2 shrink-0 rounded"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="CoreUI"
              >
                <rect
                  width="100%"
                  height="100%"
                  fill="#007aff"
                />
              </svg>

              <div className="mr-auto font-bold text-gray-900">
                CoreUI for React.js
              </div>

              <small className="mr-2 text-xs text-gray-500">
                7 min ago
              </small>

              <button
                type="button"
                onClick={() => setVisible(false)}
                aria-label="Close"
                className="rounded-md p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

            {/* Toast body */}
            <div className="px-4 py-3 text-sm text-gray-700">
              Hello, world! This is a toast message.
            </div>
          </div>
        </div>
      )}
    </>
  )
}
