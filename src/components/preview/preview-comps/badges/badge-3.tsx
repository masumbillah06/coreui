export default function Badge3Example() {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Profile

      <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-gray-600 px-1.5 py-0.5 text-xs font-semibold text-white">
        9
      </span>

      <span className="sr-only">unread messages</span>
    </button>
  )
}
