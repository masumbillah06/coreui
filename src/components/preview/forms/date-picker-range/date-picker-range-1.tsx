'use client'

import { useState } from 'react'

type DateRangePickerProps = {
  label?: string
  startDate?: string
  endDate?: string
  onStartDateChange?: (date: string) => void
  onEndDateChange?: (date: string) => void
}

function DateRangePicker({
  label = 'Date range',
  startDate = '',
  endDate = '',
  onStartDateChange,
  onEndDateChange,
}: DateRangePickerProps) {
  const [start, setStart] = useState(startDate)
  const [end, setEnd] = useState(endDate)

  const handleStartChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value

    setStart(value)
    onStartDateChange?.(value)
  }

  const handleEndChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value

    setEnd(value)
    onEndDateChange?.(value)
  }

  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100">
        {label}
      </label>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div>
          <label
            htmlFor={`${label}-start`}
            className="mb-1 block text-xs font-medium text-gray-500 dark:text-gray-400"
          >
            Start date
          </label>

          <input
            id={`${label}-start`}
            type="date"
            value={start}
            max={end || undefined}
            onChange={handleStartChange}
            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor={`${label}-end`}
            className="mb-1 block text-xs font-medium text-gray-500 dark:text-gray-400"
          >
            End date
          </label>

          <input
            id={`${label}-end`}
            type="date"
            value={end}
            min={start || undefined}
            onChange={handleEndChange}
            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
        </div>
      </div>
    </div>
  )
}

export default function DateRangePickerDaysExample() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <DateRangePicker
        label="Date range"
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={(date) => console.log(date)}
        onEndDateChange={(date) => console.log(date)}
      />

      <DateRangePicker
        label="Date range"
        startDate="2022-08-03"
        endDate="2022-08-17"
      />
    </div>
  )
}
