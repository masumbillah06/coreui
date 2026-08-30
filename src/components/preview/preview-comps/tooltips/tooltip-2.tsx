'use client'

import React from 'react'

type Placement = 'top' | 'right' | 'bottom' | 'left'

function Tooltip({
  children,
  content,
  placement = 'top',
}: {
  children: React.ReactNode
  content: string
  placement?: Placement
}) {
  const positionClasses = {
    top: 'bottom-full left-1/2 mb-2 -translate-x-1/2',
    right: 'left-full top-1/2 ml-2 -translate-y-1/2',
    bottom: 'top-full left-1/2 mt-2 -translate-x-1/2',
    left: 'right-full top-1/2 mr-2 -translate-y-1/2',
  }

  const arrowClasses = {
    top: 'left-1/2 top-full -translate-x-1/2 border-x-4 border-t-4 border-x-transparent border-t-gray-900',
    right: 'right-full top-1/2 -translate-y-1/2 border-y-4 border-r-4 border-y-transparent border-r-gray-900',
    bottom: 'left-1/2 bottom-full -translate-x-1/2 border-x-4 border-b-4 border-x-transparent border-b-gray-900',
    left: 'left-full top-1/2 -translate-y-1/2 border-y-4 border-l-4 border-y-transparent border-l-gray-900',
  }

  return (
    <span className="group relative inline-block">
      {children}

      <span
        role="tooltip"
        className={`pointer-events-none absolute z-50 w-max max-w-xs rounded-md bg-gray-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100 ${positionClasses[placement]}`}
      >
        {content}

        <span
          className={`absolute h-0 w-0 border-solid ${arrowClasses[placement]}`}
        />
      </span>
    </span>
  )
}

const tooltipText =
  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'

export default function TooltipDirectionsExample() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Tooltip content={tooltipText} placement="top">
        <button
          type="button"
          className="rounded-md bg-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Tooltip on top
        </button>
      </Tooltip>

      <Tooltip content={tooltipText} placement="right">
        <button
          type="button"
          className="rounded-md bg-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Tooltip on right
        </button>
      </Tooltip>

      <Tooltip content={tooltipText} placement="bottom">
        <button
          type="button"
          className="rounded-md bg-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Tooltip on bottom
        </button>
      </Tooltip>

      <Tooltip content={tooltipText} placement="left">
        <button
          type="button"
          className="rounded-md bg-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Tooltip on left
        </button>
      </Tooltip>
    </div>
  )
}
