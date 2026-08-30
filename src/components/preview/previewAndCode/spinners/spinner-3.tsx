export default function SpinnerButtonsExample() {
  return (
    <div className="flex flex-wrap gap-2">
      {/* Spinner only */}
      <button
        type="button"
        disabled
        className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white opacity-65 cursor-not-allowed"
      >
        <span
          className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
          aria-hidden="true"
        />

        <span className="sr-only" role="status">
          Loading...
        </span>
      </button>

      {/* Spinner with text */}
      <button
        type="button"
        disabled
        className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white opacity-65 cursor-not-allowed"
      >
        <span
          className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
          aria-hidden="true"
        />

        <span role="status">Loading...</span>
      </button>
    </div>
  )
}
