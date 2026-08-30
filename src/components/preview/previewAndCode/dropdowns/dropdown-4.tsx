'use client'

import { useState } from 'react'

const menuItems = [
  'Action',
  'Another action',
  'Something else here',
]

function DropdownMenu({
  onClose,
}: {
  onClose: () => void
}) {
  return (
    <div
      role="menu"
      className="absolute left-0 top-full z-50 mt-2 min-w-56 rounded-md border border-gray-200 bg-white py-2 shadow-lg"
    >
      {menuItems.map((item) => (
        <a
          key={item}
          href="#"
          role="menuitem"
          onClick={onClose}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {item}
        </a>
      ))}

      <div className="my-2 border-t border-gray-200" />

      <a
        href="#"
        role="menuitem"
        onClick={onClose}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Separated link
      </a>
    </div>
  )
}

export default function DropdownSizingLargeExample() {
  const [open, setOpen] = useState<'single' | 'split' | null>(null)

  return (
    <div className="flex flex-wrap items-start gap-2">
      {/* Large button dropdown */}
      <div className="relative inline-block">
        <button
          type="button"
          onClick={() =>
            setOpen((current) =>
              current === 'single' ? null : 'single',
            )
          }
          aria-expanded={open === 'single'}
          aria-haspopup="menu"
          className="inline-flex items-center gap-2 rounded-md bg-gray-600 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Large button

          <svg
            className={`h-4 w-4 transition-transform ${
              open === 'single' ? 'rotate-180' : ''
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.51a.75.75 0 0 1-1.08 0l-4.25-4.51a.75.75 0 0 1 .02-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {open === 'single' && (
          <DropdownMenu onClose={() => setOpen(null)} />
        )}
      </div>

      {/* Large split button */}
      <div className="relative inline-flex">
        <button
          type="button"
          className="rounded-l-md bg-gray-600 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Large split button
        </button>

        <button
          type="button"
          onClick={() =>
            setOpen((current) =>
              current === 'split' ? null : 'split',
            )
          }
          aria-expanded={open === 'split'}
          aria-haspopup="menu"
          aria-label="Toggle large split button dropdown"
          className="rounded-r-md border-l border-white/20 bg-gray-600 px-4 py-3 text-white transition-colors hover:bg-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          <svg
            className={`h-4 w-4 transition-transform ${
              open === 'split' ? 'rotate-180' : ''
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.51a.75.75 0 0 1-1.08 0l-4.25-4.51a.75.75 0 0 1-1.08 1.06l4.25-4.51a.75.75 0 0 1 .02-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {open === 'split' && (
          <DropdownMenu onClose={() => setOpen(null)} />
        )}
      </div>
    </div>
  )
}
