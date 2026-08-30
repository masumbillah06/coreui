import type { TableHTMLAttributes } from 'react'

type TableProps = TableHTMLAttributes<HTMLTableElement>

export default function TableExample(props: TableProps) {
  const columns = [
    {
      key: 'id',
      label: '#',
    },
    {
      key: 'class',
      label: 'Class',
    },
    {
      key: 'heading_1',
      label: 'Heading',
    },
    {
      key: 'heading_2',
      label: 'Heading',
    },
  ]

  const items = [
    {
      id: 1,
      class: 'Mark',
      heading_1: 'Otto',
      heading_2: '@mdo',
    },
    {
      id: 2,
      class: 'Jacob',
      heading_1: 'Thornton',
      heading_2: '@fat',
    },
    {
      id: 3,
      class: 'Larry the Bird',
      heading_2: '@twitter',
    },
  ]

  return (
    <div className="w-full overflow-x-auto">
      <table
        {...props}
        className={`w-full border-collapse text-left text-sm text-gray-700 ${props.className ?? ''}`}
      >
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
              key={item.id}
              className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
            >
              <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900"
              >
                {item.id}
              </th>

              <td
                className="px-4 py-3"
                colSpan={item.id === 3 ? 2 : undefined}
              >
                {item.class}
              </td>

              {item.id !== 3 && (
                <td className="px-4 py-3">
                  {item.heading_1}
                </td>
              )}

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
