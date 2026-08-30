'use client'

interface SwitchProps {
  id: string
  label: string
  defaultChecked?: boolean
  disabled?: boolean
}

function Switch({
  id,
  label,
  defaultChecked = false,
  disabled = false,
}: SwitchProps) {
  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-3 ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
    >
      <input
        id={id}
        type="checkbox"
        role="switch"
        defaultChecked={defaultChecked}
        disabled={disabled}
        className="peer sr-only"
      />

      <span
        className="
          relative h-6 w-11 shrink-0 rounded-full
          bg-gray-300
          transition-colors
          peer-checked:bg-blue-600
          peer-focus-visible:ring-2
          peer-focus-visible:ring-blue-500
          peer-focus-visible:ring-offset-2

          after:absolute
          after:start-0.5
          after:top-0.5
          after:size-5
          after:rounded-full
          after:bg-white
          after:shadow-sm
          after:transition-transform
          peer-checked:after:translate-x-5

          peer-disabled:opacity-50
        "
      />

      <span
        className={`text-sm ${
          disabled ? 'text-gray-400' : 'text-gray-700'
        }`}
      >
        {label}
      </span>
    </label>
  )
}

export default function ChecksRadiosSwitchesExample() {
  return (
    <div className="space-y-4">
      <Switch
        id="formSwitchCheckDefault"
        label="Default switch checkbox input"
      />

      <Switch
        id="formSwitchCheckChecked"
        label="Checked switch checkbox input"
        defaultChecked
      />

      <Switch
        id="formSwitchCheckDisabled"
        label="Disabled switch checkbox input"
        disabled
      />

      <Switch
        id="formSwitchCheckCheckedDisabled"
        label="Disabled checked switch checkbox input"
        defaultChecked
        disabled
      />
    </div>
  )
}
