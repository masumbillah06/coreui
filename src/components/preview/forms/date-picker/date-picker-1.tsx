'use client'

import { useState } from 'react'

type DatePickerProps = {
  label: string
  defaultValue?: string
}

function DatePicker({
  label,
  defaultValue = '',
}: DatePickerProps) {
  const [date, setDate] = useState(defaultValue)

  return (
    <div className="w-full">
      <label
        htmlFor={label}
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100"
      >
        {label}
      </label>

      <input
        id={label}
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
      />
    </div>
  )
}

export default function DatePickerDaysExample() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
      <div className="sm:col-span-1 lg:col-span-5">
        <DatePicker label="Date Picker" />
      </div>

      <div className="sm:col-span-1 lg:col-span-5">
        <DatePicker
          label="Date Picker"
          defaultValue="2022-02-16"
        />
      </div>
    </div>
  )
}
