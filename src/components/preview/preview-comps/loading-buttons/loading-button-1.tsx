'use client'

import { useState } from 'react'

type ButtonVariant = 'solid' | 'outline' | 'ghost'

const variants: ButtonVariant[] = ['solid', 'outline', 'ghost']

export default function LoadingButtonExample() {
  const [loading, setLoading] = useState<ButtonVariant | null>(null)

  const handleClick = (variant: ButtonVariant) => {
    setLoading(variant)

    setTimeout(() => {
      setLoading(null)
    }, 2000)
  }

  return (
    <div className="flex flex-wrap gap-2">
      {/* Solid */}
      <button
        type="button"
        disabled={loading === 'solid'}
        onClick={() => handleClick('solid')}
        className={[
          'inline-flex min-w-24 items-center justify-center gap-2 rounded-md px-4 py-2',
          'text-sm font-medium transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
          'bg-blue-600 text-white hover:bg-blue-700',
          'disabled:cursor-not-allowed disabled:opacity-65',
        ].join(' ')}
      >
        {loading === 'solid' && <Spinner />}
        {loading === 'solid' ? 'Loading...' : 'Submit'}
      </button>

      {/* Outline */}
      <button
        type="button"
        disabled={loading === 'outline'}
        onClick={() => handleClick('outline')}
        className={[
          'inline-flex min-w-24 items-center justify-center gap-2 rounded-md border px-4 py-2',
          'text-sm font-medium transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
          'border-blue-600 text-blue-600 hover:bg-blue-50',
          'disabled:cursor-not-allowed disabled:opacity-65',
        ].join(' ')}
      >
        {loading === 'outline' && <Spinner />}
        {loading === 'outline' ? 'Loading...' : 'Submit'}
      </button>

      {/* Ghost */}
      <button
        type="button"
        disabled={loading === 'ghost'}
        onClick={() => handleClick('ghost')}
        className={[
          'inline-flex min-w-24 items-center justify-center gap-2 rounded-md px-4 py-2',
          'text-sm font-medium transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
          'text-blue-600 hover:bg-blue-50',
          'disabled:cursor-not-allowed disabled:opacity-65',
        ].join(' ')}
      >
        {loading === 'ghost' && <Spinner />}
        {loading === 'ghost' ? 'Loading...' : 'Submit'}
      </button>
    </div>
  )
}

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 0 1 8-8V2C6.477 2 2 6.477 2 12h2Z"
      />
    </svg>
  )
}
