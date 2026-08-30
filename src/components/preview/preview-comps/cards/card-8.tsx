const colors = [
  {
    name: 'primary',
    border: 'border-blue-600',
    text: 'text-blue-600',
  },
  {
    name: 'secondary',
    border: 'border-gray-600',
    text: 'text-gray-600',
  },
  {
    name: 'success',
    border: 'border-green-600',
    text: 'text-green-600',
  },
  {
    name: 'danger',
    border: 'border-red-600',
    text: 'text-red-600',
  },
  {
    name: 'warning',
    border: 'border-yellow-400',
    text: 'text-yellow-600',
  },
  {
    name: 'info',
    border: 'border-cyan-600',
    text: 'text-cyan-600',
  },
  {
    name: 'dark',
    border: 'border-gray-900',
    text: 'text-gray-900',
  },
]

export default function CardStylesBorderExample() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {colors.map((item) => (
        <div
          key={item.name}
          className={`mb-3 rounded-lg border-2 bg-white ${item.border} ${item.text}`}
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

            <p className="text-sm leading-6 text-gray-600">
              Some quick example text to build on the card title and make up
              the bulk of the card&apos;s content.
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
