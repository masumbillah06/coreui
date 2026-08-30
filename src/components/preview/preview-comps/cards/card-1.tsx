import Image from 'next/image'
import Link from 'next/link'

export default function CardExample() {
  return (
    <div className="w-72 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <Image
        src="/image.png"
        alt="React"
        width={288}
        height={180}
        className="h-auto w-full object-cover"
      />

      <div className="p-4">
        <h2 className="mb-2 text-xl font-semibold text-gray-900">
          Card title
        </h2>

        <p className="mb-4 text-sm leading-6 text-gray-600">
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </p>

        <Link
          href="#"
          className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Go somewhere
        </Link>
      </div>
    </div>
  )
}
