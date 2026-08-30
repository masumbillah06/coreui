'use client'

import { useState } from 'react'

type DateTimePickerProps = {
  defaultDateTime?: string
}

function DateTimePicker({
  defaultDateTime = '',
}: DateTimePickerProps) {
  const [date, setDate] = useState(
    defaultDateTime ? defaultDateTime.split('T')[0] : '',
  )

  const [time, setTime] = useState(
    defaultDateTime ? defaultDateTime.split('T')[1] : '',
  )

  return (
    <div className="flex w-full flex-col gap-3">
      <div>
        <label
          htmlFor="date"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100"
        >
          Date
        </label>

        <input
          id="date"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        />
      </div>

      <div>
        <label
          htmlFor="time"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100"
        >
          Time
        </label>

        <input
          id="time"
          type="time"
          step={1}
          value={time}
          onChange={(event) => setTime(event.target.value)}
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        />
      </div>
    </div>
  )
}

export default function DatePickerDaysWithTimePickerExample() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
      <div className="sm:col-span-1 lg:col-span-5">
        <DateTimePicker />
      </div>

      <div className="sm:col-span-1 lg:col-span-5">
        <DateTimePicker defaultDateTime="2023-03-15T14:22:13" />
      </div>
    </div>
  )
}
