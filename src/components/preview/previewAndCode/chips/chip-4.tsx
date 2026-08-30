const colors = [
  {
    name: 'primary',
    base: 'bg-blue-600 text-white border-blue-600',
    hover: 'hover:bg-blue-700 hover:border-blue-700',
    active: 'bg-blue-700 text-white border-blue-700',
    focus: 'focus-visible:ring-blue-500',
  },
  {
    name: 'secondary',
    base: 'bg-gray-600 text-white border-gray-600',
    hover: 'hover:bg-gray-700 hover:border-gray-700',
    active: 'bg-gray-700 text-white border-gray-700',
    focus: 'focus-visible:ring-gray-500',
  },
  {
    name: 'success',
    base: 'bg-green-600 text-white border-green-600',
    hover: 'hover:bg-green-700 hover:border-green-700',
    active: 'bg-green-700 text-white border-green-700',
    focus: 'focus-visible:ring-green-500',
  },
  {
    name: 'danger',
    base: 'bg-red-600 text-white border-red-600',
    hover: 'hover:bg-red-700 hover:border-red-700',
    active: 'bg-red-700 text-white border-red-700',
    focus: 'focus-visible:ring-red-500',
  },
  {
    name: 'warning',
    base: 'bg-yellow-400 text-gray-900 border-yellow-400',
    hover: 'hover:bg-yellow-500 hover:border-yellow-500',
    active: 'bg-yellow-500 text-gray-900 border-yellow-500',
    focus: 'focus-visible:ring-yellow-400',
  },
  {
    name: 'info',
    base: 'bg-cyan-600 text-white border-cyan-600',
    hover: 'hover:bg-cyan-700 hover:border-cyan-700',
    active: 'bg-cyan-700 text-white border-cyan-700',
    focus: 'focus-visible:ring-cyan-500',
  },
]

const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1)

export default function ChipVariantsExample() {
  return (
    <div className="flex flex-wrap gap-1">
      {colors.map((color) => (
        <div key={color.name} className="contents">
          {/* Clickable chip */}
          <button
            type="button"
            className={[
              'inline-flex items-center rounded-full border px-3 py-1.5',
              'text-sm font-medium transition-colors',
              'cursor-pointer',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
              color.base,
              color.hover,
              color.focus,
            ].join(' ')}
          >
            {capitalize(color.name)} chip
          </button>

          {/* Active chip */}
          <button
            type="button"
            aria-pressed="true"
            className={[
              'inline-flex items-center rounded-full border px-3 py-1.5',
              'text-sm font-medium',
              'cursor-pointer',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
              color.active,
              color.focus,
            ].join(' ')}
          >
            {capitalize(color.name)} chip
          </button>
        </div>
      ))}
    </div>
  )
}
