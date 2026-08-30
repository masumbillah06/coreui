'use client'

import { useState } from 'react'

type DateTimeRangePickerProps = {
  startDate?: string
  endDate?: string
}

function DateTimeRangePicker({
  startDate = '',
  endDate = '',
}: DateTimeRangePickerProps) {
  const [start, setStart] = useState(startDate)
  const [end, setEnd] = useState(endDate)

  const [startDateValue, startTimeValue] = start
    ? start.split('T')
    : ['', '']

  const [endDateValue, endTimeValue] = end
    ? end.split('T')
    : ['', '']

  const updateStart = (date: string, time: string) => {
    const value = date && time ? `${date}T${time}` : date || ''
    setStart(value)
  }

  const updateEnd = (date: string, time: string) => {
    const value = date && time ? `${date}T${time}` : date || ''
    setEnd(value)
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Start */}
        <div>
          <label
            htmlFor="start-date"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            Start
          </label>

          <div className="grid grid-cols-2 gap-2">
            <input
              id="start-date"
              type="date"
              value={startDateValue}
              max={endDateValue || undefined}
              onChange={(event) =>
                updateStart(event.target.value, startTimeValue)
              }
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />

            <input
              type="time"
              step={1}
              value={startTimeValue}
              onChange={(event) =>
                updateStart(startDateValue, event.target.value)
              }
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
          </div>
        </div>

        {/* End */}
        <div>
          <label
            htmlFor="end-date"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            End
          </label>

          <div className="grid grid-cols-2 gap-2">
            <input
              id="end-date"
              type="date"
              value={endDateValue}
              min={startDateValue || undefined}
              onChange={(event) =>
                updateEnd(event.target.value, endTimeValue)
              }
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />

            <input
              type="time"
              step={1}
              value={endTimeValue}
              onChange={(event) =>
                updateEnd(endDateValue, event.target.value)
              }
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DateRangePickerDaysWithTimePickerExample() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {/* Empty */}
      <DateTimeRangePicker />

      {/* With default values */}
      <DateTimeRangePicker
        startDate="2022-08-03T02:34:17"
        endDate="2022-09-17T23:29:41"
      />
    </div>
  )
}
