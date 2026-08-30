'use client'

import { useMemo, useState } from 'react'

type WeekValue = {
  year: number
  week: number
}

type WeekRangePickerProps = {
  label?: string
  startWeek?: string
  endWeek?: string
  onStartDateChange?: (value: string) => void
  onEndDateChange?: (value: string) => void
}

const pad = (value: number) => String(value).padStart(2, '0')

const formatWeek = ({ year, week }: WeekValue) =>
  `${year}W${pad(week)}`

const parseWeek = (value?: string): WeekValue | null => {
  if (!value) return null

  const match = value.match(/^(\d{4})W(\d{2})$/)

  if (!match) return null

  return {
    year: Number(match[1]),
    week: Number(match[2]),
  }
}

const getISOWeek = (date: Date): WeekValue => {
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
  )

  const day = d.getUTCDay() || 7

  d.setUTCDate(d.getUTCDate() + 4 - day)

  const year = d.getUTCFullYear()
  const yearStart = new Date(Date.UTC(year, 0, 1))

  const week = Math.ceil(
    ((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7,
  )

  return { year, week }
}

const getWeeksInYear = (year: number) => {
  return getISOWeek(new Date(year, 11, 28)).week
}

const compareWeeks = (a: WeekValue, b: WeekValue) => {
  if (a.year !== b.year) return a.year - b.year
  return a.week - b.week
}

function WeekRangePicker({
  label = 'Date range',
  startWeek,
  endWeek,
  onStartDateChange,
  onEndDateChange,
}: WeekRangePickerProps) {
  const initialStart = parseWeek(startWeek)
  const initialEnd = parseWeek(endWeek)

  const currentWeek = getISOWeek(new Date())

  const [start, setStart] = useState<WeekValue | null>(initialStart)
  const [end, setEnd] = useState<WeekValue | null>(initialEnd)

  const [year, setYear] = useState(
    initialStart?.year ?? currentWeek.year,
  )

  const weeks = useMemo(
    () =>
      Array.from(
        { length: getWeeksInYear(year) },
        (_, index) => index + 1,
      ),
    [year],
  )

  const handleWeekClick = (week: number) => {
    const selected = { year, week }

    if (!start || (start && end)) {
      setStart(selected)
      setEnd(null)

      onStartDateChange?.(formatWeek(selected))
      onEndDateChange?.('')
      return
    }

    if (compareWeeks(selected, start) < 0) {
      setStart(selected)
      setEnd(start)

      onStartDateChange?.(formatWeek(selected))
      onEndDateChange?.(formatWeek(start))
      return
    }

    setEnd(selected)
    onEndDateChange?.(formatWeek(selected))
  }

  const isSelected = (week: number) => {
    const value = { year, week }

    if (start && compareWeeks(value, start) === 0) return true
    if (end && compareWeeks(value, end) === 0) return true

    return false
  }

  const isInRange = (week: number) => {
    if (!start || !end) return false

    const value = { year, week }

    return (
      compareWeeks(value, start) > 0 &&
      compareWeeks(value, end) < 0
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
            onClick={() => setYear((value) => value - 1)}
            className="rounded-md px-2 py-1 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            aria-label="Previous year"
          >
            ←
          </button>

          <span className="font-semibold text-gray-900 dark:text-white">
            {year}
          </span>

          <button
            type="button"
            onClick={() => setYear((value) => value + 1)}
            className="rounded-md px-2 py-1 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            aria-label="Next year"
          >
            →
          </button>
        </div>

        {/* Week list */}
        <div className="grid max-h-72 grid-cols-4 gap-1 overflow-y-auto p-3 sm:grid-cols-5">
          {weeks.map((week) => (
            <button
              key={week}
              type="button"
              onClick={() => handleWeekClick(week)}
              className={[
                'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                isSelected(week)
                  ? 'bg-blue-600 text-white'
                  : isInRange(week)
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
              ].join(' ')}
            >
              <span className="text-xs opacity-60">W</span>
              {pad(week)}
            </button>
          ))}
        </div>

        {/* Selected values */}
        <div className="border-t border-gray-200 px-4 py-3 text-sm dark:border-gray-700">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-600 dark:text-gray-400">
            <span>
              Start:{' '}
              <strong className="text-gray-900 dark:text-white">
                {start ? formatWeek(start) : '—'}
              </strong>
            </span>

            <span>
              End:{' '}
              <strong className="text-gray-900 dark:text-white">
                {end ? formatWeek(end) : '—'}
              </strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DateRangePickerWeeksExample() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <WeekRangePicker
        label="Date range"
        onStartDateChange={(date) => {
          setStartDate(date)
          console.log(date)
        }}
        onEndDateChange={(date) => {
          setEndDate(date)
          console.log(date)
        }}
      />

      <WeekRangePicker
        label="Date range"
        startWeek="2025W07"
        endWeek="2025W12"
        onStartDateChange={(date) => console.log(date)}
        onEndDateChange={(date) => console.log(date)}
      />
    </div>
  )
}
