export default function TableColorsExample() {
  const columns = [
    { key: 'class', label: 'Class' },
    { key: 'heading_1', label: 'Heading' },
    { key: 'heading_2', label: 'Heading' },
  ]

  const items = [
    {
      class: 'Default',
      heading_1: 'Cell',
      heading_2: 'Cell',
      color: 'default',
    },
    {
      class: 'Primary',
      heading_1: 'Cell',
      heading_2: 'Cell',
      color: 'primary',
    },
    {
      class: 'Secondary',
      heading_1: 'Cell',
      heading_2: 'Cell',
      color: 'secondary',
    },
    {
      class: 'Success',
      heading_1: 'Cell',
      heading_2: 'Cell',
      color: 'success',
    },
    {
      class: 'Danger',
      heading_1: 'Cell',
      heading_2: 'Cell',
      color: 'danger',
    },
    {
      class: 'Warning',
      heading_1: 'Cell',
      heading_2: 'Cell',
      color: 'warning',
    },
    {
      class: 'Info',
      heading_1: 'Cell',
      heading_2: 'Cell',
      color: 'info',
    },
    {
      class: 'Light',
      heading_1: 'Cell',
      heading_2: 'Cell',
      color: 'light',
    },
    {
      class: 'Dark',
      heading_1: 'Cell',
      heading_2: 'Cell',
      color: 'dark',
    },
  ]

  const rowColors: Record<string, string> = {
    default: 'bg-white text-gray-900',
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-600 text-white',
    success: 'bg-green-600 text-white',
    danger: 'bg-red-600 text-white',
    warning: 'bg-yellow-400 text-gray-900',
    info: 'bg-cyan-500 text-gray-900',
    light: 'bg-gray-100 text-gray-900',
    dark: 'bg-gray-800 text-white',
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="px-4 py-3 font-semibold text-gray-900"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr
              key={item.class}
              className={`${rowColors[item.color]} border-b border-black/10 last:border-b-0`}
            >
              <th
                scope="row"
                className="px-4 py-3 font-semibold"
              >
                {item.class}
              </th>

              <td className="px-4 py-3">
                {item.heading_1}
              </td>

              <td className="px-4 py-3">
                {item.heading_2}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
