'use client'

import { useState } from 'react'

const quarters = [
  { label: 'Q1', months: 'Jan – Mar' },
  { label: 'Q2', months: 'Apr – Jun' },
  { label: 'Q3', months: 'Jul – Sep' },
  { label: 'Q4', months: 'Oct – Dec' },
]

export default function CalendarQuartersExample() {
  const [currentYear, setCurrentYear] = useState(2024)
  const [selectedQuarter, setSelectedQuarter] = useState(1)

  const selectQuarter = (quarter: number) => {
    setSelectedQuarter(quarter)

    // Equivalent to CoreUI's onStartDateChange
    const date = {
      year: currentYear,
      quarter,
    }

    console.log(date)
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-sm rounded-md border border-gray-200 bg-white p-4 shadow-sm">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setCurrentYear((year) => year - 1)}
            aria-label="Previous year"
            className="rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.79 15.77a.75.75 0 01-1.06.02l-5-4.75a.75.75 0 010-1.08l5-4.75a.75.75 0 111.04 1.08L8.31 10.5l4.48 4.21a.75.75 0 01.02 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <h2 className="text-base font-semibold text-gray-900">
            {currentYear}
          </h2>

          <button
            type="button"
            onClick={() => setCurrentYear((year) => year + 1)}
            aria-label="Next year"
            className="rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.21 4.23a.75.75 0 01.02 1.06.75.75 0 01-1.06.02l-5-4.75a.75.75 0 010-1.08l5-4.75a.75.75 0 111.04 1.08L8.31 10.5l4.48 4.21a.75.75 0 01.02 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Quarters */}
        <div className="grid grid-cols-2 gap-3">
          {quarters.map((quarter, index) => {
            const quarterNumber = index + 1
            const selected = selectedQuarter === quarterNumber

            return (
              <button
                key={quarter.label}
                type="button"
                onClick={() => selectQuarter(quarterNumber)}
                className={[
                  'rounded-md border px-4 py-5 text-left transition-colors',
                  selected
                    ? 'border-blue-600 bg-blue-600 text-white'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50',
                ].join(' ')}
              >
                <div className="text-lg font-semibold">
                  {quarter.label}
                </div>

                <div
                  className={[
                    'mt-1 text-xs',
                    selected ? 'text-blue-100' : 'text-gray-500',
                  ].join(' ')}
                >
                  {quarter.months}
                </div>
              </button>
            )
          })}
        </div>

        {/* Selected quarter */}
        <div className="mt-5 border-t border-gray-200 pt-3 text-center text-sm text-gray-600">
          Selected:{' '}
          <span className="font-medium text-gray-900">
            Q{selectedQuarter} {currentYear}
          </span>
        </div>
      </div>
    </div>
  )
}
