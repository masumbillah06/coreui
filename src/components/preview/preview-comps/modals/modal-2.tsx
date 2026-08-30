'use client'

import { useState } from 'react'

export default function ModalLiveDemoExample() {
  const [visible, setVisible] = useState(false)

  return (
    <>
      {/* Launch button */}
      <button
        type="button"
        onClick={() => setVisible(true)}
        className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Launch demo modal
      </button>

      {/* Modal */}
      {visible && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="LiveDemoExampleLabel"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setVisible(false)
            }
          }}
        >
          <div className="w-full max-w-lg rounded-lg bg-white shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <h2
                id="LiveDemoExampleLabel"
                className="text-lg font-semibold text-gray-900"
              >
                Modal title
              </h2>

              <button
                type="button"
                onClick={() => setVisible(false)}
                aria-label="Close modal"
                className="rounded-md p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <div className="px-6 py-5 text-sm text-gray-700">
              Woohoo, you&apos;re reading this text in a modal!
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-2 border-t border-gray-200 px-6 py-4">
              <button
                type="button"
                onClick={() => setVisible(false)}
                className="rounded-md bg-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Close
              </button>

              <button
                type="button"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
