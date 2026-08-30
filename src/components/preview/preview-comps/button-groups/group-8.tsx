export default function ButtonGroupSizingExample() {
  const baseButton =
    'border border-blue-600 bg-transparent font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500'

  return (
    <div className="flex flex-col items-start gap-4">
      {/* Large */}
      <div
        role="group"
        aria-label="Large button group"
        className="inline-flex rounded-md shadow-sm"
      >
        <button
          type="button"
          className={`${baseButton} rounded-l-md px-5 py-3 text-lg`}
        >
          Left
        </button>
        <button
          type="button"
          className={`${baseButton} -ml-px px-5 py-3 text-lg`}
        >
          Middle
        </button>
        <button
          type="button"
          className={`${baseButton} -ml-px rounded-r-md px-5 py-3 text-lg`}
        >
          Right
        </button>
      </div>

      {/* Default */}
      <div
        role="group"
        aria-label="Default button group"
        className="inline-flex rounded-md shadow-sm"
      >
        <button
          type="button"
          className={`${baseButton} rounded-l-md px-4 py-2 text-sm`}
        >
          Left
        </button>
        <button
          type="button"
          className={`${baseButton} -ml-px px-4 py-2 text-sm`}
        >
          Middle
        </button>
        <button
          type="button"
          className={`${baseButton} -ml-px rounded-r-md px-4 py-2 text-sm`}
        >
          Right
        </button>
      </div>

      {/* Small */}
      <div
        role="group"
        aria-label="Small button group"
        className="inline-flex rounded-md shadow-sm"
      >
        <button
          type="button"
          className={`${baseButton} rounded-l-md px-3 py-1.5 text-xs`}
        >
          Left
        </button>
        <button
          type="button"
          className={`${baseButton} -ml-px px-3 py-1.5 text-xs`}
        >
          Middle
        </button>
        <button
          type="button"
          className={`${baseButton} -ml-px rounded-r-md px-3 py-1.5 text-xs`}
        >
          Right
        </button>
      </div>
    </div>
  )
}
