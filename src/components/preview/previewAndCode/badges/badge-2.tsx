export default function Badge2Example() {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
    >
      Notifications

      <span className="inline-flex items-center rounded-full bg-gray-500 px-2 py-0.5 text-xs font-semibold text-white">
        4
      </span>
    </button>
  )
}
