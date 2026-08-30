'use client'

import { useState } from 'react'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function isBefore(a: Date, b: Date) {
  return a.getTime() < b.getTime()
}

function isBetween(date: Date, start: Date | null, end: Date | null) {
  if (!start || !end) return false

  return (
    date.getTime() > start.getTime() &&
    date.getTime() < end.getTime()
  )
}

function getCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const previousMonthDays = new Date(year, month, 0).getDate()

  const days: {
    date: Date
    day: number
    currentMonth: boolean
  }[] = []

  for (let i = firstDay - 1; i >= 0; i--) {
    const day = previousMonthDays - i

    days.push({
      date: new Date(year, month - 1, day),
      day,
      currentMonth: false,
    })
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push({
      date: new Date(year, month, day),
      day,
      currentMonth: true,
    })
  }

  let nextDay = 1

  while (days.length < 42) {
    days.push({
      date: new Date(year, month + 1, nextDay),
      day: nextDay,
      currentMonth: false,
    })

    nextDay++
  }

  return days
}

function Calendar({
  year,
  month,
  startDate,
  endDate,
  onDateClick,
}: {
  year: number
  month: number
  startDate: Date | null
  endDate: Date | null
  onDateClick: (date: Date) => void
}) {
  const days = getCalendarDays(year, month)

  const monthName = new Date(year, month).toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="w-full">
      {/* Month header */}
      <div className="mb-3 text-center">
        <h2 className="text-sm font-semibold text-gray-900">
          {monthName}
        </h2>
      </div>

      {/* Weekdays */}
      <div className="mb-1 grid grid-cols-7">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="py-2 text-center text-xs font-medium text-gray-500"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7">
        {days.map(({ date, day, currentMonth }) => {
          const selectedStart = startDate && isSameDay(date, startDate)
          const selectedEnd = endDate && isSameDay(date, endDate)
          const inRange = isBetween(date, startDate, endDate)

          return (
            <div
              key={date.toISOString()}
              className={[
                'relative flex h-9 items-center justify-center',
                inRange ? 'bg-blue-50' : '',
              ].join(' ')}
            >
              <button
                type="button"
                onClick={() => onDateClick(date)}
                className={[
                  'relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors',
                  !currentMonth && 'text-gray-300',
                  currentMonth &&
                    !selectedStart &&
                    !selectedEnd &&
                    'text-gray-700 hover:bg-gray-100',
                  (selectedStart || selectedEnd) &&
                    'bg-blue-600 font-semibold text-white hover:bg-blue-700',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {day}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function CalendarRangeSelectionExample() {
  const [startDate, setStartDate] = useState<Date | null>(
    new Date(2022, 7, 23),
  )

  const [endDate, setEndDate] = useState<Date | null>(
    new Date(2022, 8, 8),
  )

  const [displayMonth, setDisplayMonth] = useState(
    new Date(2022, 7, 1),
  )

  const handleDateClick = (date: Date) => {
    // Start a new range
    if (!startDate || (startDate && endDate)) {
      setStartDate(date)
      setEndDate(null)
      return
    }

    // Complete the range
    if (isBefore(date, startDate)) {
      setStartDate(date)
      setEndDate(startDate)
    } else {
      setEndDate(date)
    }
  }

  const previousMonth = () => {
    setDisplayMonth(
      new Date(
        displayMonth.getFullYear(),
        displayMonth.getMonth() - 1,
        1,
      ),
    )
  }

  const nextMonth = () => {
    setDisplayMonth(
      new Date(
        displayMonth.getFullYear(),
        displayMonth.getMonth() + 1,
        1,
      ),
    )
  }

  const secondMonth = new Date(
    displayMonth.getFullYear(),
    displayMonth.getMonth() + 1,
    1,
  )

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl rounded-md border border-gray-200 bg-white p-5 shadow-sm">
        {/* Navigation */}
        <div className="mb-4 flex items-center justify-between">
          <button
            type="button"
            onClick={previousMonth}
            aria-label="Previous month"
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          >
            ←
          </button>

          <div className="text-sm text-gray-500">
            {startDate && (
              <span>
                {startDate.toLocaleDateString('en-US')}
              </span>
            )}

            {startDate && endDate && <span> – </span>}

            {endDate && (
              <span>
                {endDate.toLocaleDateString('en-US')}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={nextMonth}
            aria-label="Next month"
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          >
            →
          </button>
        </div>

        {/* Two calendars */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Calendar
            year={displayMonth.getFullYear()}
            month={displayMonth.getMonth()}
            startDate={startDate}
            endDate={endDate}
            onDateClick={handleDateClick}
          />

          <Calendar
            year={secondMonth.getFullYear()}
            month={secondMonth.getMonth()}
            startDate={startDate}
            endDate={endDate}
            onDateClick={handleDateClick}
          />
        </div>
      </div>
    </div>
  )
}
