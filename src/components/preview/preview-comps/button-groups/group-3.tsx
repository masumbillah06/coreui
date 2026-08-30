export default function ButtonGroupMixedStylesExample() {
  return (
    <div
      role="group"
      aria-label="Basic mixed styles example"
      className="inline-flex rounded-md shadow-sm"
    >
      <button
        type="button"
        className="rounded-l-md border border-red-600 bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Left
      </button>

      <button
        type="button"
        className="-ml-px border border-yellow-500 bg-yellow-500 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-yellow-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        Middle
      </button>

      <button
        type="button"
        className="-ml-px rounded-r-md border border-green-600 bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Right
      </button>
    </div>
  )
}
