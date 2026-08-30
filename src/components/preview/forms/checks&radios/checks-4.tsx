'use client'

type SwitchSize = 'default' | 'lg' | 'xl'

interface SwitchProps {
  id: string
  label: string
  size?: SwitchSize
}

const sizeStyles: Record<
  SwitchSize,
  {
    track: string
    thumb: string
    checked: string
  }
> = {
  default: {
    track: 'h-6 w-11',
    thumb: 'after:size-5',
    checked: 'peer-checked:after:translate-x-5',
  },
  lg: {
    track: 'h-7 w-12',
    thumb: 'after:size-6',
    checked: 'peer-checked:after:translate-x-5',
  },
  xl: {
    track: 'h-8 w-14',
    thumb: 'after:size-7',
    checked: 'peer-checked:after:translate-x-6',
  },
}

function Switch({
  id,
  label,
  size = 'default',
}: SwitchProps) {
  const styles = sizeStyles[size]

  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-3"
    >
      <input
        id={id}
        type="checkbox"
        role="switch"
        className="peer sr-only"
      />

      <span
        className={`
          ${styles.track}
          relative shrink-0 rounded-full
          bg-gray-300
          transition-colors
          peer-checked:bg-blue-600
          peer-focus-visible:ring-2
          peer-focus-visible:ring-blue-500
          peer-focus-visible:ring-offset-2

          after:absolute
          after:start-0.5
          after:top-1/2
          after:-translate-y-1/2
          ${styles.thumb}
          after:rounded-full
          after:bg-white
          after:shadow-sm
          after:transition-transform

          ${styles.checked}
        `}
      />

      <span className="text-sm text-gray-700">
        {label}
      </span>
    </label>
  )
}

export default function ChecksRadiosSwitchSizesExample() {
  return (
    <div className="space-y-4">
      <Switch
        id="formSwitchCheckDefault"
        label="Default switch checkbox input"
      />

      <Switch
        id="formSwitchCheckDefaultLg"
        label="Large switch checkbox input"
        size="lg"
      />

      <Switch
        id="formSwitchCheckDefaultXL"
        label="Extra large switch checkbox input"
        size="xl"
      />
    </div>
  )
}
