export default function StripedTable() {
  const items = [
    ['Default', 'Cell', 'Cell'],
    ['Primary', 'Cell', 'Cell'],
    ['Secondary', 'Cell', 'Cell'],
    ['Success', 'Cell', 'Cell'],
  ]

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-3 font-semibold text-gray-900">
              Class
            </th>
            <th scope="col" className="px-4 py-3 font-semibold text-gray-900">
              Heading
            </th>
            <th scope="col" className="px-4 py-3 font-semibold text-gray-900">
              Heading
            </th>
          </tr>
        </thead>

        <tbody>
          {items.map(([name, heading1, heading2]) => (
            <tr
              key={name}
              className="border-b border-gray-200 odd:bg-white even:bg-gray-50 last:border-b-0"
            >
              <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900"
              >
                {name}
              </th>
              <td className="px-4 py-3">{heading1}</td>
              <td className="px-4 py-3">{heading2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
