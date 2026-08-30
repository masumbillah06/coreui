'use client'

export default function DatePickerReadonlyExample() {
  return (
    <div className="w-full lg:w-1/3">
      <input
        type="date"
        readOnly
        aria-readonly="true"
        className="block w-full cursor-default rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
      />
    </div>
  )
}
