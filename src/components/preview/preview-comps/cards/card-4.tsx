import Image from 'next/image'
import Link from 'next/link'

export default function CardKitchenSinkExample() {
  return (
    <div className="w-72 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      {/* Card image */}
      <Image
        src="/image.png"
        alt="React"
        width={288}
        height={180}
        className="h-auto w-full object-cover"
      />

      {/* Card body */}
      <div className="p-4">
        <h2 className="mb-2 text-xl font-semibold text-gray-900">
          Card title
        </h2>

        <p className="text-sm leading-6 text-gray-600">
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </p>
      </div>

      {/* List group */}
      <ul className="border-t border-gray-200">
        <li className="border-b border-gray-200 px-4 py-3 text-sm text-gray-700">
          Cras justo odio
        </li>

        <li className="border-b border-gray-200 px-4 py-3 text-sm text-gray-700">
          Dapibus ac facilisis in
        </li>

        <li className="px-4 py-3 text-sm text-gray-700">
          Vestibulum at eros
        </li>
      </ul>

      {/* Card links */}
      <div className="flex gap-4 p-4">
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
  )
}
