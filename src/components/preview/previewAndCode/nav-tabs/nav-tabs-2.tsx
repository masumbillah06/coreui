"use client";
export default function Nav2Example() {
  return (
    <nav className="flex flex-wrap gap-1" aria-label="Example navigation">
      <a
        href="#"
        aria-current="page"
        className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white"
      >
        Active
      </a>

      <a
        href="#"
        className="inline-block rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
      >
        Link
      </a>

      <a
        href="#"
        className="inline-block rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
      >
        Link
      </a>

      <a
        href="#"
        aria-disabled="true"
        tabIndex={-1}
        onClick={(event) => event.preventDefault()}
        className="inline-block cursor-not-allowed rounded-md px-4 py-2 text-sm font-medium text-gray-400"
      >
        Disabled
      </a>
    </nav>
  )
}
