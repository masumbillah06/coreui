export default function PaginationWorkingWithIconsExample() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        {/* Previous */}
        <li>
          <button
            type="button"
            aria-label="Previous"
            className="rounded-l-md border border-gray-300 bg-white px-4 py-2 text-lg leading-none text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        {/* Page 1 */}
        <li>
          <button
            type="button"
            className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
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
