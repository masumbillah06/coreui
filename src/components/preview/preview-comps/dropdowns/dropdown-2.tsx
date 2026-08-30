'use client'

import { useState } from 'react'

export default function DropdownSingleButton2Example() {
  const [open, setOpen] = useState(false)

  const toggleDropdown = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setOpen((current) => !current)
  }

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown toggle */}
      <a
        href="#"
        onClick={toggleDropdown}
        aria-expanded={open}
        aria-haspopup="menu"
        className="inline-flex items-center gap-2 rounded-md bg-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        Dropdown button

        <svg
          className={`h-4 w-4 transition-transform ${
            open ? 'rotate-180' : ''
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
      </a>

      {/* Dropdown menu */}
      {open && (
        <div
          role="menu"
          className="absolute left-0 z-50 mt-2 min-w-48 rounded-md border border-gray-200 bg-white py-1 shadow-lg"
        >
          <a
            href="#"
            role="menuitem"
            className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
            onClick={() => setOpen(false)}
          >
            Action
          </a>

          <a
            href="#"
            role="menuitem"
            className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
            onClick={() => setOpen(false)}
          >
            Another action
          </a>

          <a
            href="#"
            role="menuitem"
            className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
            onClick={() => setOpen(false)}
          >
            Something else here
          </a>
        </div>
      )}
    </div>
  )
}
