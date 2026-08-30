type BadgeProps = {
  color:
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
  children: React.ReactNode
}

const badgeColors = {
  primary: 'bg-blue-600 text-white',
  success: 'bg-green-600 text-white',
  danger: 'bg-red-600 text-white',
  warning: 'bg-yellow-400 text-gray-900',
  info: 'bg-cyan-600 text-white',
  light: 'bg-gray-100 text-gray-900',
  dark: 'bg-gray-900 text-white',
}

function Badge({ color, children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${badgeColors[color]}`}
    >
      {children}
    </span>
  )
}

export default function BadgeContextualVariations() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge color="primary">primary</Badge>
      <Badge color="success">success</Badge>
      <Badge color="danger">danger</Badge>
      <Badge color="warning">warning</Badge>
      <Badge color="info">info</Badge>
      <Badge color="light">light</Badge>
      <Badge color="dark">dark</Badge>
    </div>
  )
}
