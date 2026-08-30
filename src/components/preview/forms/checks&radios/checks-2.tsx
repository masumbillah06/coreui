'use client'

interface RadioProps {
  id: string
  name: string
  label: string
  defaultChecked?: boolean
  value?: string
}

function Radio({
  id,
  name,
  label,
  defaultChecked = false,
  value,
}: RadioProps) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-2"
    >
      <input
        id={id}
        name={name}
        type="radio"
        value={value}
        defaultChecked={defaultChecked}
        className="size-4 accent-blue-600 focus:ring-2 focus:ring-blue-500"
      />

      <span className="text-sm text-gray-700">
        {label}
      </span>
    </label>
  )
}

export default function ChecksRadiosRadiosExample() {
  return (
    <div className="space-y-3">
      <Radio
        id="flexRadioDefault1"
        name="flexRadioDefault"
        label="Default radio"
      />

      <Radio
        id="flexRadioDefault2"
        name="flexRadioDefault"
        label="Checked radio"
        defaultChecked
      />
    </div>
  )
}
