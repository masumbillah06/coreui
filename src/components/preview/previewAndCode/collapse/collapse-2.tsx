'use client'

import { useState } from 'react'

export default function CollapseHorizontalExample() {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <button
        type="button"
        onClick={() => setVisible((current) => !current)}
        aria-expanded={visible}
        aria-controls="collapseWidthExample"
        className="mb-3 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Button
      </button>

      <div className="min-h-30">
        <div
          id="collapseWidthExample"
          className={[
            'overflow-hidden transition-[width] duration-300 ease-in-out',
            visible ? 'w-75' : 'w-0',
          ].join(' ')}
          aria-hidden={!visible}
        >
          <div className="w-75 rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-4 text-gray-700">
              This is some placeholder content for a horizontal collapse.
              It&apos;s hidden by default and shown when triggered.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
