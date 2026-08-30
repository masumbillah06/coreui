"use client";
export default function NavEnclosedExample() {
  return (
    <nav
      aria-label="Example navigation"
      className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1"
    >
      <a
        href="#"
        aria-current="page"
        className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm"
      >
        Active
      </a>

      <a
        href="#"
        className="rounded-md px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-white hover:text-gray-900"
      >
        Link
      </a>

      <a
        href="#"
        className="rounded-md px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-white hover:text-gray-900"
      >
        Link
      </a>

      <a
        href="#"
        aria-disabled="true"
        tabIndex={-1}
        onClick={(event) => event.preventDefault()}
        className="cursor-not-allowed rounded-md px-4 py-2 text-sm font-medium text-gray-400"
      >
        Disabled
      </a>
    </nav>
  )
}
