const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-8a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM12 14c-5 0-9 2.5-9 6v1h18v-1c0-3.5-4-6-9-6Zm-6.8 5c.8-1.8 3.3-3 6.8-3s6 1.2 6.8 3H5.2Z" />
  </svg>
)

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm-1-9h2v7h-2v-7Zm0-4h2v2h-2V7Z" />
  </svg>
)

export default function ChipIconExample() {
  return (
    <div className="flex flex-wrap gap-1">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700">
        <span className="flex shrink-0 items-center text-gray-600">
          <UserIcon />
        </span>
        Chip with icon 1
      </span>

      <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700">
        <span className="flex shrink-0 items-center text-gray-600">
          <InfoIcon />
        </span>
        Chip with icon 2
      </span>
    </div>
  )
}
