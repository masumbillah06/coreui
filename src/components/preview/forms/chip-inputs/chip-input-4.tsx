'use client'

import { useState } from 'react'

type ChipInputProps = {
  defaultValue?: string[]
  placeholder?: string
  onSelect?: (selected: string[]) => void
}

function ChipInput({
  defaultValue = [],
  placeholder = 'Add tag...',
  onSelect,
}: ChipInputProps) {
  const [chips] = useState(defaultValue)
  const [selected, setSelected] = useState<string[]>([])

  const toggleChip = (chip: string) => {
    const nextSelected = selected.includes(chip)
      ? selected.filter((item) => item !== chip)
      : [...selected, chip]

    setSelected(nextSelected)
    onSelect?.(nextSelected)
  }

  return (
    <div className="flex min-h-10 flex-wrap items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      {chips.map((chip) => {
        const isSelected = selected.includes(chip)

        return (
          <button
            key={chip}
            type="button"
            onClick={() => toggleChip(chip)}
            className={[
              'inline-flex items-center rounded-full px-2.5 py-1 text-sm font-medium transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-blue-500/30',
              isSelected
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700',
            ].join(' ')}
            aria-pressed={isSelected}
          >
            {chip}
          </button>
        )
      })}

      {chips.length === 0 && (
        <span className="text-sm text-gray-400">{placeholder}</span>
      )}
    </div>
  )
}

export default function ChipInputSelectableExample() {
  const [selected, setSelected] = useState<string[]>([])

  return (
    <div className="w-full max-w-md">
      <ChipInput
        defaultValue={['Design', 'Backend', 'QA', 'DevOps']}
        onSelect={setSelected}
        placeholder="Select chips"
      />

      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Selected:{' '}
        {selected.length > 0 ? selected.join(', ') : 'None'}
      </p>
    </div>
  )
}
