"use client";
export default function NavTabsExample() {
  return (
    <nav aria-label="Example tabs">
      <ul className="flex flex-wrap border-b border-gray-200">
        <li>
          <a
            href="#"
            aria-current="page"
            className="-mb-px inline-block rounded-t-lg border border-b-white border-gray-200 bg-white px-4 py-2 text-sm font-medium text-blue-600"
          >
            Active
          </a>
        </li>

        <li>
          <a
            href="#"
            className="inline-block border border-transparent px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900"
          >
            Link
          </a>
        </li>

        <li>
          <a
            href="#"
            className="inline-block border border-transparent px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900"
          >
            Link
          </a>
        </li>

        <li>
          <a
            href="#"
            aria-disabled="true"
            tabIndex={-1}
            onClick={(event) => event.preventDefault()}
            className="inline-block cursor-not-allowed border border-transparent px-4 py-2 text-sm font-medium text-gray-400"
          >
            Disabled
          </a>
        </li>
      </ul>
    </nav>
  )
}
