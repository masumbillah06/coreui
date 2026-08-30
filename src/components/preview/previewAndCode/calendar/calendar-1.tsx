'use client'

import { useMemo, useState } from 'react'

export default function CalendarDaysExample() {
  const initialDate = new Date(2024, 1, 13) // February 13, 2024

  const [currentDate, setCurrentDate] = useState(initialDate)
  const [selectedDate, setSelectedDate] = useState(initialDate)

  const monthName = currentDate.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  const days = useMemo(() => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const previousMonthDays = new Date(year, month, 0).getDate()

    const result: {
      day: number
      date: Date
      currentMonth: boolean
    }[] = []

    // Previous month's days
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = previousMonthDays - i

      result.push({
        day,
        date: new Date(year, month - 1, day),
        currentMonth: false,
      })
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      result.push({
        day,
        date: new Date(year, month, day),
        currentMonth: true,
      })
    }

    // Next month's days
    let nextDay = 1

    while (result.length < 42) {
      result.push({
        day: nextDay,
        date: new Date(year, month + 1, nextDay),
        currentMonth: false,
      })

      nextDay++
    }

    return result
  }, [currentDate])

  const isSelected = (date: Date) => {
    return (
      date.getFullYear() === selectedDate.getFullYear() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getDate() === selectedDate.getDate()
    )
  }

  const changeMonth = (amount: number) => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + amount,
        1,
      ),
    )
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-sm rounded-md border border-gray-200 bg-white p-4 shadow-sm">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => changeMonth(-1)}
            aria-label="Previous month"
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

          <h2 className="text-sm font-semibold text-gray-900">
            {monthName}
          </h2>

          <button
            type="button"
            onClick={() => changeMonth(1)}
            aria-label="Next month"
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
                d="M7.21 4.23a.75.75 0 011.06-.02l5 4.75a.75.75 0 010 1.08l-5 4.75a.75.75 0 11-1.04-1.08l4.45-4.21-4.45-4.21a.75.75 0 01-.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Weekdays */}
        <div className="mb-2 grid grid-cols-7 text-center">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div
              key={day}
              className="py-2 text-xs font-medium text-gray-500"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-1">
          {days.map(({ day, date, currentMonth }, index) => (
            <button
              key={`${date.toISOString()}-${index}`}
              type="button"
              onClick={() => setSelectedDate(date)}
              className={[
                'flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors',
                !currentMonth && 'text-gray-300',
                currentMonth &&
                  !isSelected(date) &&
                  'text-gray-700 hover:bg-gray-100',
                isSelected(date) &&
                  'bg-blue-600 font-semibold text-white hover:bg-blue-700',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
