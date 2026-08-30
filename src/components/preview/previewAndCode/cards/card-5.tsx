import Link from 'next/link'

export default function CardSizing2Example() {
  return (
    <div className="space-y-4">
      {/* 75% width card */}
      <div className="mb-3 w-3/4 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="p-4">
          <h2 className="mb-2 text-xl font-semibold text-gray-900">
            Card title
          </h2>

          <p className="mb-4 text-sm leading-6 text-gray-600">
            With supporting text below as a natural lead-in to additional
            content.
          </p>

          <Link
            href="#"
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Go somewhere
          </Link>
        </div>
      </div>

      {/* 50% width card */}
      <div className="w-1/2 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="p-4">
          <h2 className="mb-2 text-xl font-semibold text-gray-900">
            Card title
          </h2>

          <p className="mb-4 text-sm leading-6 text-gray-600">
            With supporting text below as a natural lead-in to additional
            content.
          </p>

          <Link
            href="#"
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  )
}
