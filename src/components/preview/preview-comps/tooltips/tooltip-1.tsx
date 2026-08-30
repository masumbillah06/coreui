'use client'

import React from 'react'

function Tooltip({
  children,
  content,
}: {
  children: React.ReactNode
  content: string
}) {
  return (
    <span className="group relative inline-block">
      {children}

      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100"
      >
        {content}

        <span className="absolute left-1/2 top-full -translate-x-1/2 border-x-4 border-t-4 border-x-transparent border-t-gray-900" />
      </span>
    </span>
  )
}

export default function TooltipOnLinksExample() {
  return (
    <p className="text-sm text-gray-500">
      Tight pants next level keffiyeh{' '}
      <Tooltip content="Tooltip text">
        <a
          href="#"
          className="text-blue-600 underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          you probably
        </a>
      </Tooltip>{' '}
      haven&apos;t heard of them. Photo booth beard raw denim letterpress vegan messenger bag
      stumptown. Farm-to-table seitan, mcsweeney&apos;s fixie sustainable quinoa 8-bit american
      apparel{' '}
      <Tooltip content="Tooltip text">
        <a
          href="#"
          className="text-blue-600 underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          have a
        </a>
      </Tooltip>{' '}
      terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu
      biodiesel williamsburg marfa, four loko mcsweeney&apos;s cleanse vegan chambray. A really
      ironic artisan{' '}
      <Tooltip content="Tooltip text">
        <a
          href="#"
          className="text-blue-600 underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          whatever keytar
        </a>
      </Tooltip>{' '}
      scenester farm-to-table banksy Austin{' '}
      <Tooltip content="Tooltip text">
        <a
          href="#"
          className="text-blue-600 underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          twitter handle
        </a>
      </Tooltip>{' '}
      freegan cred raw denim single-origin coffee viral.
    </p>
  )
}
