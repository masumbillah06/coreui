const toasts = [1, 2]

export default function ToastStackingExample() {
  return (
    <div className="flex flex-col gap-3">
      {toasts.map((toast) => (
        <div
          key={toast}
          className="w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
        >
          <div className="flex items-center border-b border-gray-200 px-4 py-3">
            <span className="mr-2 h-5 w-5 rounded bg-[#007aff]" />

            <div className="mr-auto font-bold text-gray-900">
              CoreUI for React.js
            </div>

            <small className="mr-3 text-xs text-gray-500">
              7 min ago
            </small>

            <button
              type="button"
              className="text-xl leading-none text-gray-400 hover:text-gray-700"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div className="px-4 py-3 text-sm text-gray-700">
            Hello, world! This is a toast message.
          </div>
        </div>
      ))}
    </div>
  )
}
