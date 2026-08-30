"use client";
export default function NavExample() {
  return (
    <nav aria-label="Example navigation">
      <ul className="flex flex-wrap list-none gap-1 p-0 m-0">
        <li>
          <a
            href="#"
            aria-current="page"
            className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white"
          >
            Active
          </a>
        </li>

        <li>
          <a
            href="#"
            className="inline-block rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            Link
          </a>
        </li>

        <li>
          <a
            href="#"
            className="inline-block rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            Link
          </a>
        </li>

        <li>
          <a
            href="#"
            aria-disabled="true"
            tabIndex={-1}
            className="inline-block cursor-not-allowed rounded-md px-4 py-2 text-sm font-medium text-gray-400"
            onClick={(event) => event.preventDefault()}
          >
            Disabled
          </a>
        </li>
      </ul>
    </nav>
  )
}
