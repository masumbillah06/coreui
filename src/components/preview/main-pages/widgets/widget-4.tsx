'use client'

import React from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
} from 'recharts'

const chartData = [
  { value: 41 },
  { value: 78 },
  { value: 51 },
  { value: 66 },
  { value: 74 },
  { value: 42 },
  { value: 89 },
  { value: 97 },
  { value: 87 },
  { value: 84 },
  { value: 78 },
  { value: 88 },
  { value: 67 },
  { value: 45 },
  { value: 47 },
]

export const WidgetStatsEExample = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {/* Bar chart widget */}
      <div className="mb-3 flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div>
          <div className="text-2xl font-semibold text-gray-900">
            89.9%
          </div>

          <div className="mt-1 text-sm text-gray-500">
            Widget title
          </div>
        </div>

        <div className="h-10 w-20">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <Bar
                dataKey="value"
                fill="#321fdb"
                stroke="transparent"
                barSize={5}
                radius={[1, 1, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Line chart widget */}
      <div className="mb-3 flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div>
          <div className="text-2xl font-semibold text-gray-900">
            89.9%
          </div>

          <div className="mt-1 text-sm text-gray-500">
            Widget title
          </div>
        </div>

        <div className="h-10 w-20">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#321fdb"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
