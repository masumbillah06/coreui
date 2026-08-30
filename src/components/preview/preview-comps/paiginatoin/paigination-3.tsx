export default function PaginationDisabledAndActiveExample() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        {/* Previous - Disabled */}
        <li>
          <button
            type="button"
            aria-label="Previous"
            disabled
            className="cursor-not-allowed rounded-l-md border border-gray-300 bg-gray-100 px-4 py-2 text-lg leading-none text-gray-400"
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        {/* Active */}
        <li>
          <button
            type="button"
            aria-current="page"
            className="border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white"
          >
            1
          </button>
        </li>

        {/* Page 2 */}
        <li>
          <button
            type="button"
            className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            2
          </button>
        </li>

        {/* Page 3 */}
        <li>
          <button
            type="button"
            className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            3
          </button>
        </li>

        {/* Next */}
        <li>
          <button
            type="button"
            aria-label="Next"
            className="rounded-r-md border border-gray-300 bg-white px-4 py-2 text-lg leading-none text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}
