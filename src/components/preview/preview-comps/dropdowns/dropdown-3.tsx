'use client'

import { useState } from 'react'

const colors = [
  {
    name: 'primary',
    button: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
  },
  {
    name: 'secondary',
    button: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
  },
  {
    name: 'success',
    button: 'bg-green-600 hover:bg-green-700 focus:ring-green-500',
  },
  {
    name: 'info',
    button: 'bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500',
  },
  {
    name: 'warning',
    button: 'bg-yellow-400 text-gray-900 hover:bg-yellow-500 focus:ring-yellow-400',
  },
  {
    name: 'danger',
    button: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
  },
]

const menuItems = [
  'Action',
  'Another action',
  'Something else here',
]

export default function DropdownSplitButtonExample() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (color: string) => {
    setOpenDropdown((current) => (current === color ? null : color))
  }

  return (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => {
        const isOpen = openDropdown === color.name

        return (
          <div
            key={color.name}
            className="relative inline-flex"
          >
            {/* Main button */}
            <button
              type="button"
              className={[
                'rounded-l-md px-4 py-2 text-sm font-medium text-white',
                'transition-colors focus:z-10 focus:outline-none focus:ring-2 focus:ring-offset-2',
                color.button,
              ].join(' ')}
            >
              {color.name}
            </button>

            {/* Split dropdown toggle */}
            <button
              type="button"
              onClick={() => toggleDropdown(color.name)}
              aria-expanded={isOpen}
              aria-haspopup="menu"
              aria-label={`Toggle ${color.name} dropdown`}
              className={[
                'rounded-r-md border-l border-white/20 px-3 py-2 text-white',
                'transition-colors focus:z-10 focus:outline-none focus:ring-2 focus:ring-offset-2',
                color.button,
              ].join(' ')}
            >
              <svg
                className={`h-4 w-4 transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.51a.75.75 0 0 1-1.08 1.06l4.25-4.51a.75.75 0 0 1 .02-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full z-50 mt-2 min-w-52 rounded-md border border-gray-200 bg-white py-1 shadow-lg"
              >
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    role="menuitem"
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                  >
                    {item}
                  </a>
                ))}

                <div className="my-1 border-t border-gray-200" />

                <a
                  href="#"
                  role="menuitem"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                >
                  Separated link
                </a>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
