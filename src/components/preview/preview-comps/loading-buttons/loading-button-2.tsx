'use client'

import { useState } from 'react'

type ButtonVariant = 'solid' | 'outline' | 'ghost'

export default function LoadingButtonGrowExample() {
  const [loading, setLoading] = useState<ButtonVariant | null>(null)

  const handleClick = (variant: ButtonVariant) => {
    setLoading(variant)

    setTimeout(() => {
      setLoading(null)
    }, 2000)
  }

  return (
    <div className="flex flex-wrap gap-2">
      {/* Info */}
      <button
        type="button"
        disabled={loading === 'solid'}
        onClick={() => handleClick('solid')}
        className={[
          'inline-flex min-w-24 items-center justify-center gap-2 rounded-md px-4 py-2',
          'text-sm font-medium transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2',
          'bg-cyan-600 text-white hover:bg-cyan-700',
          'disabled:cursor-not-allowed disabled:opacity-65',
        ].join(' ')}
      >
        {loading === 'solid' && <GrowSpinner />}
        {loading === 'solid' ? 'Loading...' : 'Submit'}
      </button>

      {/* Success outline */}
      <button
        type="button"
        disabled={loading === 'outline'}
        onClick={() => handleClick('outline')}
        className={[
          'inline-flex min-w-24 items-center justify-center gap-2 rounded-md border px-4 py-2',
          'text-sm font-medium transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2',
          'border-green-600 text-green-600 hover:bg-green-50',
          'disabled:cursor-not-allowed disabled:opacity-65',
        ].join(' ')}
      >
        {loading === 'outline' && <GrowSpinner />}
        {loading === 'outline' ? 'Loading...' : 'Submit'}
      </button>

      {/* Warning ghost */}
      <button
        type="button"
        disabled={loading === 'ghost'}
        onClick={() => handleClick('ghost')}
        className={[
          'inline-flex min-w-24 items-center justify-center gap-2 rounded-md px-4 py-2',
          'text-sm font-medium transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2',
          'text-yellow-600 hover:bg-yellow-50',
          'disabled:cursor-not-allowed disabled:opacity-65',
        ].join(' ')}
      >
        {loading === 'ghost' && <GrowSpinner />}
        {loading === 'ghost' ? 'Loading...' : 'Submit'}
      </button>
    </div>
  )
}

function GrowSpinner() {
  return (
    <span
      className="h-4 w-4 animate-pulse rounded-full bg-current"
      aria-label="Loading"
    />
  )
}
