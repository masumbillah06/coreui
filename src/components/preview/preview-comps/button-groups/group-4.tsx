export default function ButtonGroupOutlinedStylesExample() {
  return (
    <div
      role="group"
      aria-label="Basic outlined example"
      className="inline-flex rounded-md shadow-sm"
    >
      <button
        type="button"
        className="rounded-l-md border border-blue-600 bg-transparent px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Left
      </button>

      <button
        type="button"
        className="-ml-px border border-blue-600 bg-transparent px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Middle
      </button>

      <button
        type="button"
        className="-ml-px rounded-r-md border border-blue-600 bg-transparent px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Right
      </button>
    </div>
  )
}
