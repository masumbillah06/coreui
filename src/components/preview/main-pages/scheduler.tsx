'use client'

import { useMemo } from 'react'

const pad = (n: number) => String(n).padStart(2, '0')

const day = (offset: number) => {
  const date = new Date()
  date.setDate(date.getDate() + offset)

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate(),
  )}`
}

const resources = [
  { id: 'room-1', label: 'Room 1', color: '#3b82f6' },
  { id: 'room-2', label: 'Room 2', color: '#2eb85c' },
  { id: 'room-3', label: 'Room 3', color: '#e55353' },
]

export default function SchedulerResourcesExample() {
  const currentDay = useMemo(() => day(0), [])

  const events = [
    {
      id: 'a',
      title: 'Board meeting',
      resourceId: 'room-1',
      start: `${currentDay}T09:00`,
      end: `${currentDay}T11:00`,
      color: '#3b82f6',
    },
    {
      id: 'b',
      title: 'Workshop',
      resourceId: 'room-2',
      start: `${currentDay}T09:30`,
      end: `${currentDay}T12:00`,
      color: '#2eb85c',
    },
    {
      id: 'c',
      title: 'Interview',
      resourceId: 'room-3',
      start: `${currentDay}T10:00`,
      end: `${currentDay}T10:45`,
      color: '#e55353',
    },
    {
      id: 'd',
      title: 'All hands',
      resourceId: 'room-1',
      start: `${currentDay}T14:00`,
      end: `${currentDay}T15:00`,
      color: '#3b82f6',
    },
  ]

  const startHour = 8
  const endHour = 18
  const hourHeight = 64
  const labelWidth = 110

  const getMinutes = (date: string) => {
    const time = date.split('T')[1]
    const [hours, minutes] = time.split(':').map(Number)

    return hours * 60 + minutes
  }

  const getEventStyle = (event: (typeof events)[number]) => {
    const start = getMinutes(event.start)
    const end = getMinutes(event.end)

    const startMinutes = startHour * 60
    const top = ((start - startMinutes) / 60) * hourHeight
    const height = ((end - start) / 60) * hourHeight

    return {
      top: `${top}px`,
      height: `${height}px`,
      backgroundColor: event.color,
    }
  }

  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        <div
          className="shrink-0 border-r border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700"
          style={{ width: labelWidth }}
        >
          Time
        </div>

        {resources.map((resource) => (
          <div
            key={resource.id}
            className="flex-1 border-r border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700 last:border-r-0"
          >
            <span
              className="mr-2 inline-block h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: resource.color }}
            />
            {resource.label}
          </div>
        ))}
      </div>

      {/* Scheduler */}
      <div className="overflow-x-auto">
        <div className="flex min-w-[700px]">
          {/* Time labels */}
          <div
            className="relative shrink-0 border-r border-gray-200"
            style={{
              width: labelWidth,
              height: (endHour - startHour) * hourHeight,
            }}
          >
            {Array.from(
              { length: endHour - startHour + 1 },
              (_, index) => {
                const hour = startHour + index

                return (
                  <div
                    key={hour}
                    className="absolute left-0 right-0 -translate-y-1/2 px-3 text-right text-xs text-gray-500"
                    style={{
                      top: index * hourHeight,
                    }}
                  >
                    {hour > 12 ? hour - 12 : hour}
                    :00 {hour >= 12 ? 'PM' : 'AM'}
                  </div>
                )
              },
            )}
          </div>

          {/* Resource columns */}
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="relative flex-1 border-r border-gray-200 last:border-r-0"
              style={{
                height: (endHour - startHour) * hourHeight,
              }}
            >
              {/* Hour grid */}
              {Array.from(
                { length: endHour - startHour },
                (_, index) => (
                  <div
                    key={index}
                    className="absolute left-0 right-0 border-t border-gray-100"
                    style={{
                      top: index * hourHeight,
                    }}
                  />
                ),
              )}

              {/* Events */}
              {events
                .filter((event) => event.resourceId === resource.id)
                .map((event) => (
                  <div
                    key={event.id}
                    className="absolute left-1 right-1 overflow-hidden rounded-md px-3 py-2 text-xs font-medium text-white shadow-sm"
                    style={getEventStyle(event)}
                  >
                    <div className="truncate font-semibold">
                      {event.title}
                    </div>

                    <div className="mt-1 text-white/80">
                      {event.start.split('T')[1]} –{' '}
                      {event.end.split('T')[1]}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
