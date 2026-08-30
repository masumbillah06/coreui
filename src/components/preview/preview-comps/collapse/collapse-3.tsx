'use client'

import { useState } from 'react'

export default function CollapseMultipleTargetsExample() {
  const [visibleA, setVisibleA] = useState(false)
  const [visibleB, setVisibleB] = useState(false)

  const toggleBoth = () => {
    const nextVisible = !(visibleA && visibleB)

    setVisibleA(nextVisible)
    setVisibleB(nextVisible)
  }

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setVisibleA((current) => !current)}
          aria-expanded={visibleA}
          className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Toggle first element
        </button>

        <button
          type="button"
          onClick={() => setVisibleB((current) => !current)}
          aria-expanded={visibleB}
          className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Toggle second element
        </button>

        <button
          type="button"
          onClick={toggleBoth}
          aria-expanded={visibleA && visibleB}
          className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Toggle both elements
        </button>
      </div>

      {/* Collapse targets */}
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* First element */}
        <div>
          <div
            className={[
              'grid transition-[grid-template-rows] duration-300 ease-in-out',
              visibleA ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
            ].join(' ')}
          >
            <div className="overflow-hidden">
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
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

        {/* Second element */}
        <div>
          <div
            className={[
              'grid transition-[grid-template-rows] duration-300 ease-in-out',
              visibleB ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
            ].join(' ')}
          >
            <div className="overflow-hidden">
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
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
      </div>
    </div>
  )
}
