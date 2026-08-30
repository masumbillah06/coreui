export default function ButtonToolbarExample() {
  return (
    <div
      role="toolbar"
      aria-label="Toolbar with button groups"
      className="flex flex-wrap items-center gap-2"
    >
      {/* First group */}
      <div
        role="group"
        aria-label="First group"
        className="inline-flex rounded-md shadow-sm"
      >
        <button
          type="button"
          className="rounded-l-md border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          1
        </button>
        <button
          type="button"
          className="-ml-px border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          2
        </button>
        <button
          type="button"
          className="-ml-px border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          3
        </button>
        <button
          type="button"
          className="-ml-px rounded-r-md border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          4
        </button>
      </div>

      {/* Second group */}
      <div
        role="group"
        aria-label="Second group"
        className="inline-flex rounded-md shadow-sm"
      >
        <button
          type="button"
          className="rounded-l-md border border-gray-600 bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          5
        </button>
        <button
          type="button"
          className="-ml-px border border-gray-600 bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          6
        </button>
        <button
          type="button"
          className="-ml-px rounded-r-md border border-gray-600 bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          7
        </button>
      </div>

      {/* Third group */}
      <div
        role="group"
        aria-label="Third group"
        className="inline-flex rounded-md shadow-sm"
      >
        <button
          type="button"
          className="rounded-md border border-cyan-600 bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          8
        </button>
      </div>
    </div>
  )
}
