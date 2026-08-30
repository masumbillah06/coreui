'use client'

import { useState } from 'react'

type YearRangePickerProps = {
  label?: string
  startYear?: number
  endYear?: number
  onStartDateChange?: (year: number | null) => void
  onEndDateChange?: (year: number | null) => void
}

function YearRangePicker({
  label = 'Date range',
  startYear,
  endYear,
  onStartDateChange,
  onEndDateChange,
}: YearRangePickerProps) {
  const currentYear = new Date().getFullYear()

  const [start, setStart] = useState<number | null>(
    startYear ?? null,
  )

  const [end, setEnd] = useState<number | null>(
    endYear ?? null,
  )

  const [displayYear, setDisplayYear] = useState(
    startYear ?? currentYear,
  )

  // Show a 12-year window.
  const firstYear = Math.floor(displayYear / 12) * 12

  const years = Array.from(
    { length: 12 },
    (_, index) => firstYear + index,
  )

  const handleYearClick = (year: number) => {
    if (!start || (start && end)) {
      setStart(year)
      setEnd(null)

      onStartDateChange?.(year)
      onEndDateChange?.(null)

      return
    }

    if (year < start) {
      setStart(year)
      setEnd(start)

      onStartDateChange?.(year)
      onEndDateChange?.(start)

      return
    }

    setEnd(year)
    onEndDateChange?.(year)
  }

  const isSelected = (year: number) => {
    return year === start || year === end
  }

  const isInRange = (year: number) => {
    return (
      start !== null &&
      end !== null &&
      year > start &&
      year < end
    )
  }

  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100">
        {label}
      </label>

      <div className="overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-700">
          <button
            type="button"
            onClick={() => setDisplayYear((year) => year - 12)}
            className="rounded-md px-2 py-1 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            aria-label="Previous years"
          >
            ←
          </button>

          <span className="font-semibold text-gray-900 dark:text-white">
            {firstYear} – {firstYear + 11}
          </span>

          <button
            type="button"
            onClick={() => setDisplayYear((year) => year + 12)}
            className="rounded-md px-2 py-1 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            aria-label="Next years"
          >
            →
          </button>
        </div>

        {/* Years */}
        <div className="grid grid-cols-3 gap-2 p-4 sm:grid-cols-4">
          {years.map((year) => (
            <button
              key={year}
              type="button"
              onClick={() => handleYearClick(year)}
              className={[
                'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                isSelected(year)
                  ? 'bg-blue-600 text-white'
                  : isInRange(year)
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
              ].join(' ')}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Selected range */}
        <div className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-600 dark:text-gray-400">
            <span>
              Start:{' '}
              <strong className="text-gray-900 dark:text-white">
                {start ?? '—'}
              </strong>
            </span>

            <span>
              End:{' '}
              <strong className="text-gray-900 dark:text-white">
                {end ?? '—'}
              </strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DateRangePickerYearsExample() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {/* Empty */}
      <YearRangePicker
        label="Date range"
        onStartDateChange={(year) => console.log(year)}
        onEndDateChange={(year) => console.log(year)}
      />

      {/* 2022 → 2028 */}
      <YearRangePicker
        label="Date range"
        startYear={2022}
        endYear={2028}
        onStartDateChange={(year) => console.log(year)}
        onEndDateChange={(year) => console.log(year)}
      />
    </div>
  )
}
