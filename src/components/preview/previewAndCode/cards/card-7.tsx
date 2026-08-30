const colors = [
  {
    name: 'primary',
    className: 'bg-blue-600 text-white',
  },
  {
    name: 'secondary',
    className: 'bg-gray-600 text-white',
  },
  {
    name: 'success',
    className: 'bg-green-600 text-white',
  },
  {
    name: 'danger',
    className: 'bg-red-600 text-white',
  },
  {
    name: 'warning',
    className: 'bg-yellow-400 text-gray-900',
  },
  {
    name: 'info',
    className: 'bg-cyan-600 text-white',
  },
  {
    name: 'light',
    className: 'bg-gray-100 text-gray-900',
  },
  {
    name: 'dark',
    className: 'bg-gray-900 text-white',
  },
]

export default function CardStylesBackgroundAndColorExample() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {colors.map((item) => (
        <div
          key={item.name}
          className={`mb-3 overflow-hidden rounded-lg ${item.className}`}
        >
          {/* Card header */}
          <div className="border-b border-current/20 px-4 py-3 font-medium">
            Header
          </div>

          {/* Card body */}
          <div className="p-4">
            <h2 className="mb-2 text-xl font-semibold">
              {item.name} card title
            </h2>

            <p className="text-sm leading-6 opacity-90">
              Some quick example text to build on the card title and make up
              the bulk of the card&apos;s content.
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
