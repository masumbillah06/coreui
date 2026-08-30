'use client'

interface CheckboxProps {
  id: string
  label: string
  defaultChecked?: boolean
}

function Checkbox({
  id,
  label,
  defaultChecked = false,
}: CheckboxProps) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-center gap-2">
      <input
        id={id}
        type="checkbox"
        defaultChecked={defaultChecked}
        className="size-4 rounded border-gray-300 text-blue-600
          accent-blue-600
          focus:ring-2 focus:ring-blue-500
          focus:ring-offset-1"
      />

      <span className="text-sm text-gray-700">
        {label}
      </span>
    </label>
  )
}

export default function ChecksRadiosChecksExample() {
  return (
    <div className="space-y-3">
      <Checkbox
        id="flexCheckDefault"
        label="Default checkbox"
      />

      <Checkbox
        id="flexCheckChecked"
        label="Checked checkbox"
        defaultChecked
      />
    </div>
  )
}
