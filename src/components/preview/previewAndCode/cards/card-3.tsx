import Link from 'next/link'

export default function CardTitleExample() {
  return (
    <div className="w-72 rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="p-4">
        <h2 className="mb-1 text-xl font-semibold text-gray-900">
          Card title
        </h2>

        <h3 className="mb-2 text-sm font-medium text-gray-500">
          Card subtitle
        </h3>

        <p className="mb-4 text-sm leading-6 text-gray-600">
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </p>

        <div className="flex gap-4">
          <Link
            href="#"
            className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
          >
            Card link
          </Link>

          <Link
            href="#"
            className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
          >
            Another link
          </Link>
        </div>
      </div>
    </div>
  )
}
