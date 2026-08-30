export default function ButtonToolbar2Example() {
  return (
    <div className="space-y-4">
      {/* First toolbar */}
      <div
        className="mb-3 flex flex-wrap items-center gap-2"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div
          className="inline-flex rounded-md shadow-sm"
          role="group"
          aria-label="First group"
        >
          <button
            type="button"
            className="rounded-l-md border border-gray-500 bg-transparent px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-500 hover:text-white focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            1
          </button>

          <button
            type="button"
            className="-ml-px border border-gray-500 bg-transparent px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-500 hover:text-white focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            2
          </button>

          <button
            type="button"
            className="-ml-px border border-gray-500 bg-transparent px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-500 hover:text-white focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            3
          </button>

          <button
            type="button"
            className="-ml-px rounded-r-md border border-gray-500 bg-transparent px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-500 hover:text-white focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            4
          </button>
        </div>

        {/* Input group */}
        <div className="flex">
          <span
            id="btnGroupAddon"
            className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-700"
          >
            @
          </span>

          <input
            type="text"
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
            className="w-full min-w-60 rounded-r-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Second toolbar */}
      <div
        className="flex flex-wrap items-center justify-between gap-2"
        role="group"
        aria-label="Toolbar with button groups"
      >
        <div
          className="inline-flex rounded-md shadow-sm"
          role="group"
          aria-label="First group"
        >
          <button
            type="button"
            className="rounded-l-md border border-gray-500 bg-transparent px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-500 hover:text-white focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            1
          </button>

          <button
            type="button"
            className="-ml-px border border-gray-500 bg-transparent px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-500 hover:text-white focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            2
          </button>

          <button
            type="button"
            className="-ml-px border border-gray-500 bg-transparent px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-500 hover:text-white focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            3
          </button>

          <button
            type="button"
            className="-ml-px rounded-r-md border border-gray-500 bg-transparent px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-500 hover:text-white focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            4
          </button>
        </div>

        {/* Input group */}
        <div className="flex">
          <span
            id="btnGroupAddon"
            className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-700"
          >
            @
          </span>

          <input
            type="text"
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
            className="w-full min-w-60 rounded-r-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  )
}
