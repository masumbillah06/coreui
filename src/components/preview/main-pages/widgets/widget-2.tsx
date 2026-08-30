import React from 'react'

export const WidgetStatsBExample = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {/* Success widget */}
      <div className="mb-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div className="mb-1 text-2xl font-semibold text-gray-900">
          89.9%
        </div>

        <div className="mb-2 text-sm text-gray-500">
          Widget title
        </div>

        <div className="mb-3 text-sm text-gray-600">
          Widget helper text
        </div>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-green-500 transition-all"
            style={{ width: '75%' }}
          />
        </div>
      </div>

      {/* Primary / inverse widget */}
      <div className="mb-3 rounded-lg bg-blue-600 p-4 text-white shadow-sm">
        <div className="mb-1 text-2xl font-semibold">
          89.9%
        </div>

        <div className="mb-2 text-sm opacity-90">
          Widget title
        </div>

        <div className="mb-3 text-sm opacity-80">
          Widget helper text
        </div>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-blue-400/40">
          <div
            className="h-full rounded-full bg-white transition-all"
            style={{ width: '75%' }}
          />
        </div>
      </div>
    </div>
  )
}
