import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/ui-sidebar/breadcrumb"
import { Separator } from "@/components/ui/ui-sidebar/separator"
import { SidebarInset } from "@/components/ui/ui-sidebar/sidebar"
import CoreUIBanner from "@/components/ui/banners/ui-banners"
import ComponentPreview from "@/components/preview/ComponentPreview"
import CalendarDaysExample from "@/components/preview/previewAndCode/calendar/calendar-1"
import CalendarWeeksExample from "@/components/preview/previewAndCode/calendar/calendar-2"
import CalendarMonthsExample from "@/components/preview/previewAndCode/calendar/calendar-3"
import CalendarQuartersExample from "@/components/preview/previewAndCode/calendar/calendar-4"
import CalendarRangeSelectionExample from "@/components/preview/previewAndCode/calendar/calendar-5"

const calendarCode1 = `"use client"

import { useMemo, useState } from "react"

export default function CalendarDaysExample() {
  const initialDate = new Date(2024, 1, 13)
  const [currentDate, setCurrentDate] = useState(initialDate)
  const [selectedDate, setSelectedDate] = useState(initialDate)

  const monthName = currentDate.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  })

  const days = useMemo(() => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const previousMonthDays = new Date(year, month, 0).getDate()

    const result = []

    for (let i = firstDay - 1; i >= 0; i--) {
      const day = previousMonthDays - i
      result.push({ day, date: new Date(year, month - 1, day), currentMonth: false })
    }

    for (let day = 1; day <= daysInMonth; day++) {
      result.push({ day, date: new Date(year, month, day), currentMonth: true })
    }

    let nextDay = 1
    while (result.length < 42) {
      result.push({ day: nextDay, date: new Date(year, month + 1, nextDay), currentMonth: false })
      nextDay++
    }

    return result
  }, [currentDate])

  const isSelected = (date) => {
    return (
      date.getFullYear() === selectedDate.getFullYear() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getDate() === selectedDate.getDate()
    )
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-sm rounded-md border border-gray-200 bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}>←</button>
          <h2>{monthName}</h2>
          <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}>→</button>
        </div>

        <div className="mb-2 grid grid-cols-7 text-center">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="py-2 text-xs font-medium text-gray-500">{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map(({ day, date, currentMonth }, index) => (
            <button
             
              onClick={() => setSelectedDate(date)}
              className={[
                'flex h-9 w-9 items-center justify-center rounded-full text-sm',
                !currentMonth && 'text-gray-300',
                currentMonth && !isSelected(date) && 'text-gray-700 hover:bg-gray-100',
                isSelected(date) && 'bg-blue-600 font-semibold text-white hover:bg-blue-700',
              ].filter(Boolean).join(' ')}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}`

const calendarCode2 = `"use client"

import { useMemo, useState } from "react"

function getDateFromISOWeek(year, week) {
  const date = new Date(year, 0, 4)
  const day = date.getDay() || 7

  date.setDate(date.getDate() - day + 1)
  date.setDate(date.getDate() + (week - 1) * 7)

  return date
}

function getWeekNumber(date) {
  const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const dayNumber = target.getUTCDay() || 7

  target.setUTCDate(target.getUTCDate() + 4 - dayNumber)
  const yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1))

  return Math.ceil(((target.getTime() - yearStart.getTime()) / 86400000 + 1) / 7)
}

export default function CalendarWeeksExample() {
  const initialDate = getDateFromISOWeek(2024, 15)
  const [currentDate, setCurrentDate] = useState(initialDate)
  const [selectedWeek, setSelectedWeek] = useState(initialDate)

  const monthName = currentDate.toLocaleString("en-US", { month: "long", year: "numeric" })

  const days = useMemo(() => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const previousMonthDays = new Date(year, month, 0).getDate()

    const result = []

    for (let i = firstDay - 1; i >= 0; i--) {
      const day = previousMonthDays - i
      result.push({ day, date: new Date(year, month - 1, day), currentMonth: false })
    }

    for (let day = 1; day <= daysInMonth; day++) {
      result.push({ day, date: new Date(year, month, day), currentMonth: true })
    }

    let nextDay = 1
    while (result.length < 42) {
      result.push({ day: nextDay, date: new Date(year, month + 1, nextDay), currentMonth: false })
      nextDay++
    }

    return result
  }, [currentDate])

  return (
    <div className="w-full max-w-md rounded-md border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}>‹</button>
        <h2>{monthName}</h2>
        <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}>›</button>
      </div>

      <div className="grid grid-cols-8 border-b border-gray-200 pb-2">
        <div className="text-center text-xs font-medium text-gray-500">#</div>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-xs font-medium text-gray-500">{day}</div>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-8 gap-y-1">
        {Array.from({ length: 6 }).map((_, weekIndex) => {
          const weekDays = days.slice(weekIndex * 7, weekIndex * 7 + 7)
          const weekStart = weekDays[0].date
          const weekSelected = weekStart.getTime() === selectedWeek.getTime()

          return (
            <div key={weekIndex} className="contents">
              <div className={\`flex h-9 items-center justify-center text-xs font-medium \${weekSelected ? 'bg-blue-50 text-blue-700' : 'text-gray-400'}\`}>
                {getWeekNumber(weekStart)}
              </div>

              {weekDays.map(({ day, date, currentMonth }) => (
                <button
                  key={date.toISOString()}
                  onClick={() => setSelectedWeek(date)}
                  className={[
                    'h-9 text-sm transition-colors',
                    !currentMonth && 'text-gray-300',
                    currentMonth && !weekSelected && 'text-gray-700 hover:bg-gray-100',
                    weekSelected && 'bg-blue-600 text-white hover:bg-blue-700',
                  ].filter(Boolean).join(' ')}
                >
                  {day}
                </button>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}`

const calendarCode3 = `"use client"

import { useState } from "react"

export default function CalendarMonthsExample() {
  const [selectedMonth, setSelectedMonth] = useState(new Date(2024, 1))
  const [currentYear, setCurrentYear] = useState(2024)

  const months = Array.from({ length: 12 }, (_, index) => new Date(currentYear, index))

  return (
    <div className="w-full max-w-sm rounded-md border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <button onClick={() => setCurrentYear((year) => year - 1)}>←</button>
        <h2>{currentYear}</h2>
        <button onClick={() => setCurrentYear((year) => year + 1)}>→</button>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {months.map((month) => (
          <button
            key={month.getMonth()}
            onClick={() => setSelectedMonth(month)}
            className={[
              'rounded-md px-3 py-3 text-sm font-medium',
              month.getFullYear() === selectedMonth.getFullYear() && month.getMonth() === selectedMonth.getMonth()
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-100',
            ].join(' ')}
          >
            {month.toLocaleString('en-US', { month: 'short' })}
          </button>
        ))}
      </div>
    </div>
  )
}`

const calendarCode4 = `"use client"

import { useState } from "react"

const quarters = [
  { label: "Q1", months: "Jan – Mar" },
  { label: "Q2", months: "Apr – Jun" },
  { label: "Q3", months: "Jul – Sep" },
  { label: "Q4", months: "Oct – Dec" },
]

export default function CalendarQuartersExample() {
  const [currentYear, setCurrentYear] = useState(2024)
  const [selectedQuarter, setSelectedQuarter] = useState(1)

  return (
    <div className="w-full max-w-sm rounded-md border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <button onClick={() => setCurrentYear((year) => year - 1)}>←</button>
        <h2>{currentYear}</h2>
        <button onClick={() => setCurrentYear((year) => year + 1)}>→</button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {quarters.map((quarter, index) => {
          const quarterNumber = index + 1
          const selected = selectedQuarter === quarterNumber

          return (
            <button
              key={quarter.label}
              onClick={() => setSelectedQuarter(quarterNumber)}
              className={[
                'rounded-md border px-4 py-5 text-left',
                selected ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-200 bg-white text-gray-700',
              ].join(' ')}
            >
              <div className="text-lg font-semibold">{quarter.label}</div>
              <div className={selected ? 'mt-1 text-xs text-blue-100' : 'mt-1 text-xs text-gray-500'}>{quarter.months}</div>
            </button>
          )
        })}
      </div>
    </div>
  )
}`

const calendarCode5 = `"use client"

import { useState } from "react"

function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function isBefore(a, b) {
  return a.getTime() < b.getTime()
}

export default function CalendarRangeSelectionExample() {
  const [startDate, setStartDate] = useState(new Date(2022, 7, 23))
  const [endDate, setEndDate] = useState(new Date(2022, 8, 8))
  const [displayMonth, setDisplayMonth] = useState(new Date(2022, 7, 1))

  const previousMonth = () => setDisplayMonth(new Date(displayMonth.getFullYear(), displayMonth.getMonth() - 1, 1))
  const nextMonth = () => setDisplayMonth(new Date(displayMonth.getFullYear(), displayMonth.getMonth() + 1, 1))

  const handleDateClick = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date)
      setEndDate(null)
      return
    }

    if (isBefore(date, startDate)) {
      setStartDate(date)
      setEndDate(startDate)
    } else {
      setEndDate(date)
    }
  }

  const secondMonth = new Date(displayMonth.getFullYear(), displayMonth.getMonth() + 1, 1)

  return (
    <div className="w-full max-w-3xl rounded-md border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <button onClick={previousMonth}>←</button>
        <div>
          {startDate && <span>{startDate.toLocaleDateString('en-US')}</span>}
          {startDate && endDate && <span> – </span>}
          {endDate && <span>{endDate.toLocaleDateString('en-US')}</span>}
        </div>
        <button onClick={nextMonth}>→</button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Calendar month={displayMonth.getMonth()} year={displayMonth.getFullYear()} ... />
        <Calendar month={secondMonth.getMonth()} year={secondMonth.getFullYear()} ... />
      </div>
    </div>
  )
}`

export default function Page() {
  return (
    <SidebarInset>
      <Header />
      <header className="flex h-12 shrink-0 items-center gap-2 border-b border-slate-300">
        <div className="flex items-center gap-2 px-4">
          <Separator orientation="vertical" className="mr-2 data-vertical:h-4 data-vertical:self-auto" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Calendar</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto border-t border-slate-300 bg-slate-100">
        <div className="mx-auto w-full max-w-305 px-4 py-4">
          <div className="mb-5">
            <CoreUIBanner />
          </div>

          <div className="mb-5">
            <ComponentPreview title="Days view" detail="Select a specific day in a month-based calendar." code={calendarCode1} language="tsx">
              <CalendarDaysExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Weeks view" detail="Choose a week and highlight the selected range within the month." code={calendarCode2} language="tsx">
              <CalendarWeeksExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Months view" detail="Navigate by year and pick a specific month." code={calendarCode3} language="tsx">
              <CalendarMonthsExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Quarter view" detail="Browse fiscal quarters across a year." code={calendarCode4} language="tsx">
              <CalendarQuartersExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Range selection" detail="Pick a start date and end date across adjacent months." code={calendarCode5} language="tsx">
              <CalendarRangeSelectionExample />
            </ComponentPreview>
          </div>
        </div>
      </div>

      <Footer />
    </SidebarInset>
  )
}