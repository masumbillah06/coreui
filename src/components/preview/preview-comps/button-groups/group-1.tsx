const buttons = ['Left', 'Middle', 'Right']

export default function ButtonGroupExample() {
  return (
    <div
      role="group"
      aria-label="Basic example"
      className="inline-flex rounded-md shadow-sm"
    >
      {buttons.map((button, index) => (
        <button
          key={button}
          type="button"
          className={[
            'border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white',
            'hover:bg-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500',
            index === 0 ? 'rounded-l-md' : '-ml-px',
            index === buttons.length - 1 ? 'rounded-r-md' : '',
          ].join(' ')}
        >
          {button}
        </button>
      ))}
    </div>
  )
}
