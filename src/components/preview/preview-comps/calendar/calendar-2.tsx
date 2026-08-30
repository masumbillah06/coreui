'use client'

import { useMemo, useState } from 'react'

function getDateFromISOWeek(year: number, week: number) {
  const date = new Date(year, 0, 4)

  const day = date.getDay() || 7

  date.setDate(date.getDate() - day + 1)
  date.setDate(date.getDate() + (week - 1) * 7)

  return date
}

function getWeekNumber(date: Date) {
  const target = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
  )

  const dayNumber = target.getUTCDay() || 7

  target.setUTCDate(target.getUTCDate() + 4 - dayNumber)

  const yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1))

  return Math.ceil(
    ((target.getTime() - yearStart.getTime()) / 86400000 + 1) / 7,
  )
}

function getStartOfWeek(date: Date) {
  const result = new Date(date)
  const day = result.getDay()

  result.setDate(result.getDate() - day)

  return result
}

function isSameDate(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function isSameWeek(a: Date, b: Date) {
  return isSameDate(getStartOfWeek(a), getStartOfWeek(b))
}

export default function CalendarWeeksExample() {
  // 2024W15 = April 8, 2024
  const initialDate = getDateFromISOWeek(2024, 15)

  const [currentDate, setCurrentDate] = useState(initialDate)
  const [selectedWeek, setSelectedWeek] = useState(initialDate)

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
      <div className="w-full max-w-md rounded-md border border-gray-200 bg-white p-4 shadow-sm">
        {/* Calendar header */}
        <div className="mb-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => changeMonth(-1)}
            aria-label="Previous month"
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
          >
            ‹
          </button>

          <h2 className="text-sm font-semibold text-gray-900">
            {monthName}
          </h2>

          <button
            type="button"
            onClick={() => changeMonth(1)}
            aria-label="Next month"
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
          >
            ›
          </button>
        </div>

        {/* Weekday header */}
        <div className="grid grid-cols-8 border-b border-gray-200 pb-2">
          <div className="text-center text-xs font-medium text-gray-500">
            #
          </div>

          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div
              key={day}
              className="text-center text-xs font-medium text-gray-500"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="mt-2 grid grid-cols-8 gap-y-1">
          {Array.from({ length: 6 }).map((_, weekIndex) => {
            const weekDays = days.slice(weekIndex * 7, weekIndex * 7 + 7)

            const weekStart = weekDays[0].date
            const weekSelected = isSameWeek(weekStart, selectedWeek)

            return (
              <div
                key={weekIndex}
                className="contents"
              >
                {/* Week number */}
                <div
                  className={[
                    'flex h-9 items-center justify-center text-xs font-medium',
                    weekSelected
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-400',
                  ].join(' ')}
                >
                  {getWeekNumber(weekStart)}
                </div>

                {weekDays.map(({ day, date, currentMonth }) => (
                  <button
                    key={date.toISOString()}
                    type="button"
                    onClick={() => {
                      setSelectedWeek(date)

                      console.log(date)
                    }}
                    className={[
                      'h-9 text-sm transition-colors',
                      !currentMonth && 'text-gray-300',
                      currentMonth &&
                        !weekSelected &&
                        'text-gray-700 hover:bg-gray-100',
                      weekSelected &&
                        'bg-blue-600 text-white hover:bg-blue-700',
                      weekSelected &&
                        date.getDay() === 0 &&
                        'rounded-l-md',
                      weekSelected &&
                        date.getDay() === 6 &&
                        'rounded-r-md',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {day}
                  </button>
                ))}
              </div>
            )
          })}
        </div>

        {/* Selected week */}
        <div className="mt-4 border-t border-gray-200 pt-3 text-center text-sm text-gray-600">
          Week {getWeekNumber(selectedWeek)} selected
        </div>
      </div>
    </div>
  )
}
