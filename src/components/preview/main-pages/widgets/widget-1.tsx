'use client'

import React from 'react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  ResponsiveContainer,
} from 'recharts'

const lineData1 = [
  { value: 65 },
  { value: 59 },
  { value: 84 },
  { value: 84 },
  { value: 51 },
  { value: 55 },
  { value: 40 },
]

const lineData2 = [
  { value: 1 },
  { value: 18 },
  { value: 9 },
  { value: 17 },
  { value: 34 },
  { value: 22 },
  { value: 11 },
]

const lineData3 = [
  { value: 78 },
  { value: 81 },
  { value: 80 },
  { value: 45 },
  { value: 34 },
  { value: 12 },
  { value: 40 },
]

const barData = [
  { value: 78 },
  { value: 81 },
  { value: 80 },
  { value: 45 },
  { value: 34 },
  { value: 12 },
  { value: 40 },
  { value: 85 },
  { value: 65 },
  { value: 23 },
  { value: 12 },
  { value: 98 },
  { value: 34 },
  { value: 84 },
  { value: 67 },
  { value: 82 },
]

const chartProps = {
  width: '100%',
  height: 70,
}

function OptionsMenu() {
  return (
    <details className="relative">
      <summary className="list-none cursor-pointer text-xl leading-none text-white opacity-80 hover:opacity-100">
        ⋮
      </summary>

      <div className="absolute right-0 top-7 z-20 min-w-44 rounded-md border border-gray-200 bg-white py-1 text-sm text-gray-700 shadow-lg">
        <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
          Action
        </button>
        <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
          Another action
        </button>
        <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
          Something else here...
        </button>
        <button
          disabled
          className="block w-full cursor-not-allowed px-4 py-2 text-left text-gray-400"
        >
          Disabled action
        </button>
      </div>
    </details>
  )
}

function Widget({
  color,
  value,
  chart,
}: {
  color: string
  value: React.ReactNode
  chart: React.ReactNode
}) {
  return (
    <div
      className={`mb-4 overflow-hidden rounded-lg text-white shadow-sm ${color}`}
    >
      <div className="flex items-start justify-between px-5 pt-4">
        <div>
          <div className="text-2xl font-semibold">{value}</div>
          <div className="mt-1 text-sm opacity-90">Widget title</div>
        </div>

        <OptionsMenu />
      </div>

      {chart}
    </div>
  )
}

export const WidgetStatsAExample = () => {
  return (
    <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
      {/* Primary */}
      <Widget
        color="bg-blue-600"
        value={
          <>
            $9.000{' '}
            <span className="text-sm font-normal">
              (40.9% <span>↑</span>)
            </span>
          </>
        }
        chart={
          <div className="mt-3 h-[70px] px-3">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData1}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="rgba(255,255,255,.55)"
                  strokeWidth={1}
                  dot={{
                    r: 4,
                    fill: '#5856d6',
                    stroke: '#5856d6',
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        }
      />

      {/* Info */}
      <Widget
        color="bg-cyan-500"
        value={
          <>
            $9.000{' '}
            <span className="text-sm font-normal">
              (40.9% <span>↑</span>)
            </span>
          </>
        }
        chart={
          <div className="mt-3 h-[70px] px-3">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData2}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="rgba(255,255,255,.55)"
                  strokeWidth={1}
                  dot={{
                    r: 4,
                    fill: '#39f',
                    stroke: '#39f',
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        }
      />

      {/* Warning */}
      <Widget
        color="bg-yellow-500"
        value={
          <>
            $9.000{' '}
            <span className="text-sm font-normal">
              (40.9% <span>↑</span>)
            </span>
          </>
        }
        chart={
          <div className="mt-3 h-[70px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData3}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="rgba(255,255,255,.55)"
                  strokeWidth={2}
                  fill="rgba(255,255,255,.2)"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        }
      />

      {/* Danger */}
      <Widget
        color="bg-red-600"
        value={
          <>
            $9.000{' '}
            <span className="text-sm font-normal">
              (40.9% <span>↑</span>)
            </span>
          </>
        }
        chart={
          <div className="mt-3 h-[70px] px-3">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <Bar
                  dataKey="value"
                  fill="rgba(255,255,255,.2)"
                  barSize={7}
                  radius={[1, 1, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        }
      />
    </div>
  )
}
