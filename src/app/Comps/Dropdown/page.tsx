import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/ui-sidebar/breadcrumb"
import { Separator } from "@/components/ui/ui-sidebar/separator"
import { SidebarInset } from "@/components/ui/ui-sidebar/sidebar"
import CoreUIBanner from "@/components/ui/banners/ui-banners"
import ComponentPreview from "@/components/preview/ComponentPreview"
import DropdownSingleButtonExample from "@/components/preview/previewAndCode/dropdowns/dropdown-1"
import DropdownSingleButton2Example from "@/components/preview/previewAndCode/dropdowns/dropdown-2"
import DropdownSplitButtonExample from "@/components/preview/previewAndCode/dropdowns/dropdown-3"
import DropdownSizingLargeExample from "@/components/preview/previewAndCode/dropdowns/dropdown-4"

const dropdownCode1 = `'use client'

import { useState } from 'react'

export default function DropdownSingleButtonExample() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="inline-flex items-center gap-2 rounded-md bg-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        Dropdown button

        <svg
          className={\`h-4 w-4 transition-transform $\{open ? 'rotate-180' : ''\}\`}
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

      {open && (
        <div
          role="menu"
          className="absolute left-0 z-50 mt-2 min-w-48 rounded-md border border-gray-200 bg-white py-1 shadow-lg"
        >
          <a href="#" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900" onClick={() => setOpen(false)}>
            Action
          </a>
          <a href="#" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900" onClick={() => setOpen(false)}>
            Another action
          </a>
          <a href="#" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900" onClick={() => setOpen(false)}>
            Something else here
          </a>
        </div>
      )}
    </div>
  )
}`

const dropdownCode2 = `'use client'

import { useState } from 'react'

export default function DropdownSingleButton2Example() {
  const [open, setOpen] = useState(false)

  const toggleDropdown = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setOpen((current) => !current)
  }

  return (
    <div className="relative inline-block text-left">
      <a
        href="#"
        onClick={toggleDropdown}
        aria-expanded={open}
        aria-haspopup="menu"
        className="inline-flex items-center gap-2 rounded-md bg-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        Dropdown button

        <svg
          className={\`h-4 w-4 transition-transform $\{open ? 'rotate-180' : ''\}\`}
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

      {open && (
        <div
          role="menu"
          className="absolute left-0 z-50 mt-2 min-w-48 rounded-md border border-gray-200 bg-white py-1 shadow-lg"
        >
          <a href="#" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900" onClick={() => setOpen(false)}>
            Action
          </a>
          <a href="#" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900" onClick={() => setOpen(false)}>
            Another action
          </a>
          <a href="#" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900" onClick={() => setOpen(false)}>
            Something else here
          </a>
        </div>
      )}
    </div>
  )
}`

const dropdownCode3 = `'use client'

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

const menuItems = ['Action', 'Another action', 'Something else here']

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
          <div key={color.name} className="relative inline-flex">
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

            <button
              type="button"
              onClick={() => toggleDropdown(color.name)}
              aria-expanded={isOpen}
              aria-haspopup="menu"
              aria-label={\`Toggle \${color.name} dropdown\`}
              className={[
                'rounded-r-md border-l border-white/20 px-3 py-2 text-white',
                'transition-colors focus:z-10 focus:outline-none focus:ring-2 focus:ring-offset-2',
                color.button,
              ].join(' ')}
            >
              <svg
                className={\`h-4 w-4 transition-transform $\{isOpen ? 'rotate-180' : ''\}\`}
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
}`

const dropdownCode4 = `'use client'

import { useState } from 'react'

const menuItems = ['Action', 'Another action', 'Something else here']

function DropdownMenu({ onClose }: { onClose: () => void }) {
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
      <div className="relative inline-block">
        <button
          type="button"
          onClick={() => setOpen((current) => (current === 'single' ? null : 'single'))}
          aria-expanded={open === 'single'}
          aria-haspopup="menu"
          className="inline-flex items-center gap-2 rounded-md bg-gray-600 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Large button

          <svg
            className={\`h-4 w-4 transition-transform $\{open === 'single' ? 'rotate-180' : ''\}\`}
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

        {open === 'single' && <DropdownMenu onClose={() => setOpen(null)} />}
      </div>

      <div className="relative inline-flex">
        <button
          type="button"
          className="rounded-l-md bg-gray-600 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Large split button
        </button>

        <button
          type="button"
          onClick={() => setOpen((current) => (current === 'split' ? null : 'split'))}
          aria-expanded={open === 'split'}
          aria-haspopup="menu"
          aria-label="Toggle large split button dropdown"
          className="rounded-r-md border-l border-white/20 bg-gray-600 px-4 py-3 text-white transition-colors hover:bg-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          <svg
            className={\`h-4 w-4 transition-transform $\{open === 'split' ? 'rotate-180' : ''\}\`}
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

        {open === 'split' && <DropdownMenu onClose={() => setOpen(null)} />}
      </div>
    </div>
  )
}`

export default function Page() {
  return (
    <SidebarInset>
      <Header />
      <header className="flex h-12 shrink-0 items-center gap-2 border-b border-slate-300">
        <div className="flex items-center gap-2 px-4">
          <Separator orientation="vertical" className="mr-2 data-vertical:h-4 data-vertical:self-auto" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Dropdown</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto border-t border-slate-300 bg-slate-100">
        <div className="mx-auto w-full max-w-305 px-4 py-4">
          <div className="mb-5">
            <CoreUIBanner />
          </div>

          <div className="mb-5">
            <ComponentPreview title="Dropdown button" detail="A simple single-button dropdown menu." code={dropdownCode1} language="tsx">
              <DropdownSingleButtonExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Dropdown link" detail="The same dropdown behavior using a link-style trigger." code={dropdownCode2} language="tsx">
              <DropdownSingleButton2Example />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Split button dropdown" detail="Use a split control to open a dropdown menu from a button group." code={dropdownCode3} language="tsx">
              <DropdownSplitButtonExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Large dropdowns" detail="Sized variants for larger interactive controls." code={dropdownCode4} language="tsx">
              <DropdownSizingLargeExample />
            </ComponentPreview>
          </div>
        </div>
      </div>

      <Footer />
    </SidebarInset>
  )
}