'use client'

import { useState } from 'react'

const variants: Record<string, string> = {
  feature:
    'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
  approved:
    'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
  'needs review':
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
  blocking:
    'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
}

const getChipClassName = (value: string) => {
  return (
    variants[value.trim().toLowerCase()] ||
    'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
  )
}

export default function ChipInputVariantsExample() {
  const [chips, setChips] = useState([
    'Feature',
    'Approved',
    'Needs review',
    'Blocking',
  ])

  const [value, setValue] = useState('')

  const addChip = () => {
    const chip = value.trim()

    if (!chip || chips.includes(chip)) return

    setChips((prev) => [...prev, chip])
    setValue('')
  }

  const removeChip = (chipToRemove: string) => {
    setChips((prev) => prev.filter((chip) => chip !== chipToRemove))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      addChip()
    }

    if (e.key === 'Backspace' && !value && chips.length > 0) {
      removeChip(chips[chips.length - 1])
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="flex min-h-10 flex-wrap items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 shadow-sm transition-colors focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900">
        {chips.map((chip) => (
          <span
            key={chip}
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-sm font-medium ${getChipClassName(chip)}`}
          >
            {chip}

            <button
              type="button"
              onClick={() => removeChip(chip)}
              aria-label={`Remove ${chip}`}
              className="inline-flex size-4 items-center justify-center rounded-full opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
            >
              ×
            </button>
          </span>
        ))}

        <input
          id="issues"
          name="issues"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={addChip}
          placeholder={chips.length === 0 ? 'Add label...' : ''}
          className="min-w-24 flex-1 border-0 bg-transparent py-1 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:ring-0 dark:text-white dark:placeholder:text-gray-500"
        />
      </div>
    </div>
  )
}
