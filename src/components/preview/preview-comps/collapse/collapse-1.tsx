'use client'

import { useState } from 'react'

export default function CollapseExample() {
  const [visible, setVisible] = useState(false)

  const toggle = () => {
    setVisible((current) => !current)
  }

  return (
    <div>
      {/* Link */}
      <a
        href="#"
        onClick={(event) => {
          event.preventDefault()
          toggle()
        }}
        aria-expanded={visible}
        className="mr-2 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Link
      </a>

      {/* Button */}
      <button
        type="button"
        onClick={toggle}
        aria-expanded={visible}
        className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Button
      </button>

      {/* Collapse */}
      <div
        className={[
          'grid transition-[grid-template-rows] duration-300 ease-in-out',
          visible ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        ].join(' ')}
        aria-hidden={!visible}
      >
        <div className="overflow-hidden">
          <div className="mt-3 rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-4 text-gray-700">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt
              sapiente ea proident.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
