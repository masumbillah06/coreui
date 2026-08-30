import Link from 'next/link'

export default function ButtonGroup2Example() {
  return (
    <div className="inline-flex rounded-md shadow-sm">
      <Link
        href="#"
        aria-current="page"
        className="rounded-l-md border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white"
      >
        Active link
      </Link>

      <Link
        href="#"
        className="-ml-px border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Link
      </Link>

      <Link
        href="#"
        className="-ml-px rounded-r-md border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Link
      </Link>
    </div>
  )
}
