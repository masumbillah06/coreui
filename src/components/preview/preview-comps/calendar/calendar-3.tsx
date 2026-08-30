'use client'

import { useState } from 'react'

export default function CalendarMonthsExample() {
  const [selectedMonth, setSelectedMonth] = useState(new Date(2024, 1))
  const [currentYear, setCurrentYear] = useState(2024)

  const months = Array.from({ length: 12 }, (_, index) => {
    return new Date(currentYear, index)
  })

  const isSelected = (date: Date) => {
    return (
      date.getFullYear() === selectedMonth.getFullYear() &&
      date.getMonth() === selectedMonth.getMonth()
    )
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-sm rounded-md border border-gray-200 bg-white p-4 shadow-sm">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setCurrentYear((year) => year - 1)}
            aria-label="Previous year"
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
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
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.21 4.23a.75.75 0 011.06-.02l5 4.75a.75.75 0 010 1.08l-5 4.75a.75.75 0 11-1.04-1.08l4.45-4.21-4.45-4.21a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Months */}
        <div className="grid grid-cols-3 gap-2">
          {months.map((month) => (
            <button
              key={month.getMonth()}
              type="button"
              onClick={() => setSelectedMonth(month)}
              className={[
                'rounded-md px-3 py-3 text-sm font-medium transition-colors',
                isSelected(month)
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'text-gray-700 hover:bg-gray-100',
              ].join(' ')}
            >
              {month.toLocaleString('en-US', {
                month: 'short',
              })}
            </button>
          ))}
        </div>

        {/* Selected month */}
        <div className="mt-4 border-t border-gray-200 pt-3 text-center text-sm text-gray-600">
          Selected:{' '}
          <span className="font-medium text-gray-900">
            {selectedMonth.toLocaleString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </span>
        </div>
      </div>
    </div>
  )
}
