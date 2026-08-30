export default function PaginationAlignmentExample() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="flex justify-center -space-x-px">
        <li>
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-l-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-400"
          >
            Previous
          </button>
        </li>

        <li>
          <button
            type="button"
            className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            1
          </button>
        </li>

        <li>
          <button
            type="button"
            className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            2
          </button>
        </li>

        <li>
          <button
            type="button"
            className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            3
          </button>
        </li>

        <li>
          <button
            type="button"
            className="rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}
