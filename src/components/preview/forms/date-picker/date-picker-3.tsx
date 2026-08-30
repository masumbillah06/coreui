'use client'

export default function DatePickerDisabledExample() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <div className="w-full">
          <label
            htmlFor="disabled-date"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            Date Picker
          </label>

          <input
            id="disabled-date"
            type="date"
            disabled
            className="block w-full cursor-not-allowed rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-500 shadow-sm outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500"
          />
        </div>
      </div>
    </div>
  )
}
