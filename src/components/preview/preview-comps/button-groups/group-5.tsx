export default function ButtonGroupCheckboxAndRadioExample() {
  return (
    <div
      role="group"
      aria-label="Basic checkbox toggle button group"
      className="inline-flex rounded-md shadow-sm"
    >
      <div>
        <input
          type="checkbox"
          id="btncheck1"
          autoComplete="off"
          className="peer sr-only"
        />
        <label
          htmlFor="btncheck1"
          className="inline-flex cursor-pointer rounded-l-md border border-blue-600 bg-transparent px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white peer-checked:bg-blue-600 peer-checked:text-white"
        >
          Checkbox 1
        </label>
      </div>

      <div>
        <input
          type="checkbox"
          id="btncheck2"
          autoComplete="off"
          className="peer sr-only"
        />
        <label
          htmlFor="btncheck2"
          className="-ml-px inline-flex cursor-pointer border border-blue-600 bg-transparent px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white peer-checked:bg-blue-600 peer-checked:text-white"
        >
          Checkbox 2
        </label>
      </div>

      <div>
        <input
          type="checkbox"
          id="btncheck3"
          autoComplete="off"
          className="peer sr-only"
        />
        <label
          htmlFor="btncheck3"
          className="-ml-px inline-flex cursor-pointer rounded-r-md border border-blue-600 bg-transparent px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white peer-checked:bg-blue-600 peer-checked:text-white"
        >
          Checkbox 3
        </label>
      </div>
    </div>
  )
}
