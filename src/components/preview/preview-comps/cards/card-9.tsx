import Image from 'next/image'

const cards = [
  {
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  {
    description:
      'This card has supporting text below as a natural lead-in to additional content.',
  },
  {
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
  },
]

export default function CardGroupsExample() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-0">
      {cards.map((card, index) => (
        <div
          key={index}
          className={[
            'flex h-full flex-col overflow-hidden border border-gray-200 bg-white',
            index === 0 && 'md:rounded-l-lg',
            index === cards.length - 1 && 'md:rounded-r-lg',
            index > 0 && 'md:border-l-0',
            'rounded-lg md:rounded-none',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {/* Card image */}
          <Image
            src="/image.png"
            alt="React"
            width={400}
            height={250}
            className="h-auto w-full object-cover"
          />

          {/* Card body */}
          <div className="flex flex-1 flex-col p-4">
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              Card title
            </h2>

            <p className="mb-4 text-sm leading-6 text-gray-600">
              {card.description}
            </p>

            {/* Updated text stays at the bottom */}
            <p className="mt-auto">
              <small className="text-sm text-gray-500">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
