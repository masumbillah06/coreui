import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/ui-sidebar/breadcrumb"
import { Separator } from "@/components/ui/ui-sidebar/separator"
import { SidebarInset } from "@/components/ui/ui-sidebar/sidebar"
import CoreUIBanner from "@/components/ui/banners/ui-banners"
import ComponentPreview from "@/components/preview/ComponentPreview"
import CardExample from "@/components/preview/previewAndCode/cards/card-1"
import CardTitleExample from "@/components/preview/previewAndCode/cards/card-2"
import CardBodyExample from "@/components/preview/previewAndCode/cards/card-3"
import CardKitchenSinkExample from "@/components/preview/previewAndCode/cards/card-4"
import CardSizing2Example from "@/components/preview/previewAndCode/cards/card-5"
import CardTextAlignmentExample from "@/components/preview/previewAndCode/cards/card-6"
import CardStylesBackgroundAndColorExample from "@/components/preview/previewAndCode/cards/card-7"
import CardStylesBorderExample from "@/components/preview/previewAndCode/cards/card-8"
import CardGroupsExample from "@/components/preview/previewAndCode/cards/card-9"

const cardCode1 = `export default function CardExample() {
  return (
    <div className="w-72 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <img src="/assets/img/react.jpg" alt="React" className="h-auto w-full object-cover" />
      <div className="p-4">
        <h2 className="mb-2 text-xl font-semibold text-gray-900">Card title</h2>
        <p className="mb-4 text-sm leading-6 text-gray-600">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">Go somewhere</button>
      </div>
    </div>
  )
}`

const cardCode2 = `export default function CardTitleExample() {
  return (
    <div className="w-72 rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="p-4">
        <h2 className="mb-1 text-xl font-semibold text-gray-900">Card title</h2>
        <h3 className="mb-2 text-sm font-medium text-gray-500">Card subtitle</h3>
        <p className="mb-4 text-sm leading-6 text-gray-600">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-sm font-medium text-blue-600">Card link</a>
          <a href="#" className="text-sm font-medium text-blue-600">Another link</a>
        </div>
      </div>
    </div>
  )
}`

const cardCode3 = `export default function CardBodyExample() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="p-4 text-gray-700">This is some text within a card body.</div>
    </div>
  )
}`

const cardCode4 = `export default function CardKitchenSinkExample() {
  return (
    <div className="w-72 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <img src="/assets/img/react.jpg" alt="React" className="h-auto w-full object-cover" />
      <div className="p-4">
        <h2 className="mb-2 text-xl font-semibold text-gray-900">Card title</h2>
        <p className="text-sm leading-6 text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul className="border-t border-gray-200">
        <li className="border-b border-gray-200 px-4 py-3 text-sm text-gray-700">Cras justo odio</li>
        <li className="border-b border-gray-200 px-4 py-3 text-sm text-gray-700">Dapibus ac facilisis in</li>
        <li className="px-4 py-3 text-sm text-gray-700">Vestibulum at eros</li>
      </ul>
      <div className="flex gap-4 p-4">
        <a href="#" className="text-sm font-medium text-blue-600">Card link</a>
        <a href="#" className="text-sm font-medium text-blue-600">Another link</a>
      </div>
    </div>
  )
}`

const cardCode5 = `export default function CardSizing2Example() {
  return (
    <div className="space-y-4">
      <div className="w-3/4 rounded-lg border border-gray-200 bg-white shadow-sm p-4">...</div>
      <div className="w-1/2 rounded-lg border border-gray-200 bg-white shadow-sm p-4">...</div>
    </div>
  )
}`

const cardCode6 = `export default function CardTextAlignmentExample() {
  return (
    <div className="space-y-4">
      <div className="w-72 rounded-lg border border-gray-200 bg-white p-4">Left aligned</div>
      <div className="w-72 rounded-lg border border-gray-200 bg-white p-4 text-center">Center aligned</div>
      <div className="w-72 rounded-lg border border-gray-200 bg-white p-4 text-right">Right aligned</div>
    </div>
  )
}`

const cardCode7 = `const colors = [
  { name: 'primary', className: 'bg-blue-600 text-white' },
  { name: 'secondary', className: 'bg-gray-600 text-white' },
  { name: 'success', className: 'bg-green-600 text-white' },
]

export default function CardStylesBackgroundAndColorExample() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {colors.map((item) => (
        <div key={item.name} className={\`rounded-lg \${item.className}\`}>
          <div className="border-b border-current/20 px-4 py-3 font-medium">Header</div>
          <div className="p-4">
            <h2 className="mb-2 text-xl font-semibold">{item.name} card title</h2>
            <p className="text-sm leading-6 opacity-90">Some quick example text...</p>
          </div>
        </div>
      ))}
    </div>
  )
}`

const cardCode8 = `const colors = [
  { name: 'primary', border: 'border-blue-600', text: 'text-blue-600' },
  { name: 'secondary', border: 'border-gray-600', text: 'text-gray-600' },
]

export default function CardStylesBorderExample() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {colors.map((item) => (
        <div key={item.name} className={\`rounded-lg border-2 bg-white \${item.border} \${item.text}\`}>
          <div className="border-b border-current/20 px-4 py-3 font-medium">Header</div>
          <div className="p-4">
            <h2 className="mb-2 text-xl font-semibold">{item.name} card title</h2>
            <p className="text-sm leading-6 text-gray-600">Some quick example text...</p>
          </div>
        </div>
      ))}
    </div>
  )
}`

const cardCode9 = `const cards = [
  { description: 'This is a wider card ...' },
  { description: 'This card has supporting text ...' },
]

export default function CardGroupsExample() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card, index) => (
        <div key={index} className="overflow-hidden rounded-lg border border-gray-200 bg-white">
          <img src="/assets/img/react.jpg" alt="React" className="h-auto w-full object-cover" />
          <div className="flex flex-1 flex-col p-4">
            <h2 className="mb-2 text-xl font-semibold">Card title</h2>
            <p className="mb-4 text-sm leading-6 text-gray-600">{card.description}</p>
            <small className="mt-auto text-sm text-gray-500">Last updated 3 mins ago</small>
          </div>
        </div>
      ))}
    </div>
  )
}`

export default function Page() {
  return (
    <SidebarInset>
      <Header />
      <header className="flex h-12 shrink-0 items-center gap-2 border-b border-slate-300">
        <div className="flex items-center gap-2 px-4">
          <Separator orientation="vertical" className="mr-2 data-vertical:h-4 data-vertical:self-auto" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Cards</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto border-t border-slate-300 bg-slate-100">
        <div className="mx-auto w-full max-w-305 px-4 py-4">
          <div className="mb-5">
            <CoreUIBanner />
          </div>

          <div className="mb-5">
            <ComponentPreview title="Basic card" detail="A simple card with image, text, and call-to-action button." code={cardCode1} language="tsx">
              <CardExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Card with title and subtitle" detail="Use a title and subtitle to give the card structure." code={cardCode2} language="tsx">
              <CardTitleExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Card body" detail="Use a card body to add a clean block of content." code={cardCode3} language="tsx">
              <CardBodyExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Kitchen sink card" detail="Combine an image, text, list content, and action links." code={cardCode4} language="tsx">
              <CardKitchenSinkExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Card sizing" detail="Cards can be sized to different widths within a layout." code={cardCode5} language="tsx">
              <CardSizing2Example />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Text alignment" detail="Align text inside the card to left, center, or right." code={cardCode6} language="tsx">
              <CardTextAlignmentExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Background and color variants" detail="Apply different background colors to cards." code={cardCode7} language="tsx">
              <CardStylesBackgroundAndColorExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Border variants" detail="Use colored borders to emphasize card styles." code={cardCode8} language="tsx">
              <CardStylesBorderExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Card groups" detail="Group multiple cards with equal height and shared borders." code={cardCode9} language="tsx">
              <CardGroupsExample />
            </ComponentPreview>
          </div>
        </div>
      </div>

      <Footer />
    </SidebarInset>
  )
}