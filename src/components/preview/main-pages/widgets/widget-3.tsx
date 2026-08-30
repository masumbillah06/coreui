'use client'

import React from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
} from 'recharts'

const facebookData = [
  { value: 65 },
  { value: 59 },
  { value: 84 },
  { value: 84 },
  { value: 51 },
  { value: 55 },
  { value: 40 },
]

const twitterData = [
  { value: 1 },
  { value: 13 },
  { value: 9 },
  { value: 17 },
  { value: 34 },
  { value: 41 },
  { value: 38 },
]

const SocialWidget = ({
  color,
  icon,
  data,
  values,
}: {
  color: string
  icon: React.ReactNode
  data: { value: number }[]
  values: { title: string; value: string }[]
}) => {
  return (
    <div className="relative mb-3 overflow-hidden rounded-lg bg-white shadow-sm">
      {/* Chart background */}
      <div className="absolute inset-0 h-[120px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <defs>
              <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fff" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#fff" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="value"
              stroke="none"
              fill={`url(#gradient-${color})`}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="rgba(255,255,255,.55)"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 4,
                fill: '#fff',
                strokeWidth: 3,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Colored header */}
      <div
        className="relative flex h-[120px] items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="text-white">
          {icon}
        </div>
      </div>

      {/* Values */}
      <div className="relative grid grid-cols-2 border-t border-gray-200 bg-white">
        {values.map((item, index) => (
          <div
            key={item.title}
            className={`px-4 py-3 text-center ${
              index > 0 ? 'border-l border-gray-200' : ''
            }`}
          >
            <div className="text-xl font-semibold text-gray-800">
              {item.value}
            </div>

            <div className="text-xs uppercase tracking-wide text-gray-500">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const WidgetStatsDExample = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {/* Facebook */}
      <SocialWidget
        color="#3b5998"
        icon={
          <svg
            className="my-4 h-[52px] w-[52px] fill-current"
            viewBox="0 0 24 24"
            aria-label="Facebook"
          >
            <path d="M13.5 8H16V4.5c-.43-.06-1.9-.2-3.62-.2-3.59 0-6.06 2.19-6.06 6.22V14H2.25v3.91h4.07V24h5V17.91h4.15L16.13 14h-4.81v-3.1c0-1.13.3-1.9 2.18-1.9Z" />
          </svg>
        }
        data={facebookData}
        values={[
          { title: 'friends', value: '89K' },
          { title: 'feeds', value: '459' },
        ]}
      />

      {/* Twitter */}
      <SocialWidget
        color="#00aced"
        icon={
          <svg
            className="my-4 h-[52px] w-[52px] fill-current"
            viewBox="0 0 24 24"
            aria-label="Twitter"
          >
            <path d="M23.95 4.57a10 10 0 0 1-2.83.78A4.94 4.94 0 0 0 23.28 2.6a9.86 9.86 0 0 1-3.13 1.2A4.92 4.92 0 0 0 11.62 7c0 .39.04.77.13 1.14A13.98 13.98 0 0 1 1.64 3.16a4.92 4.92 0 0 0 1.52 6.57A4.9 4.9 0 0 1 .93 9v.06a4.92 4.92 0 0 0 3.95 4.83 4.9 4.9 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42A9.87 9.87 0 0 1 1.2 19.5c-.4 0-.8-.02-1.2-.07A13.94 13.94 0 0 0 7.55 21c9.05 0 14-7.5 14-14v-.64a10 10 0 0 0 2.4-2.46Z" />
          </svg>
        }
        data={twitterData}
        values={[
          { title: 'folowers', value: '973K' },
          { title: 'tweets', value: '1.792' },
        ]}
      />
    </div>
  )
}
