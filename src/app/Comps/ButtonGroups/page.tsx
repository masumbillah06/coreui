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
import ButtonGroupExample from "@/components/preview/preview-comps/button-groups/group-1"
import ButtonGroup2Example from "@/components/preview/preview-comps/button-groups/group-2"
import ButtonGroupMixedStylesExample from "@/components/preview/preview-comps/button-groups/group-3"
import ButtonGroupOutlinedStylesExample from "@/components/preview/preview-comps/button-groups/group-4"
import ButtonGroupCheckboxAndRadioExample from "@/components/preview/preview-comps/button-groups/group-5"
import ButtonToolbarExample from "@/components/preview/preview-comps/button-groups/group-6"
import ButtonToolbar2Example from "@/components/preview/preview-comps/button-groups/group-7"
import ButtonGroupSizingExample from "@/components/preview/preview-comps/button-groups/group-8"
import ButtonGroupNestingExample from "@/components/preview/preview-comps/button-groups/group-9"

const buttonGroupCode1 = `const buttons = ['Left', 'Middle', 'Right']

export default function ButtonGroupExample() {
  return (
    <div role="group" aria-label="Basic example" className="inline-flex rounded-md shadow-sm">
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
}`

const buttonGroupCode2 = `import Link from 'next/link'

export default function ButtonGroup2Example() {
  return (
    <div className="inline-flex rounded-md shadow-sm">
      <Link href="#" aria-current="page" className="rounded-l-md border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white">Active link</Link>
      <Link href="#" className="-ml-px border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500">Link</Link>
      <Link href="#" className="-ml-px rounded-r-md border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500">Link</Link>
    </div>
  )
}`

const buttonGroupCode3 = `export default function ButtonGroupMixedStylesExample() {
  return (
    <div role="group" aria-label="Basic mixed styles example" className="inline-flex rounded-md shadow-sm">
      <button className="rounded-l-md border border-red-600 bg-red-600 px-4 py-2 text-sm font-medium text-white">Left</button>
      <button className="-ml-px border border-yellow-500 bg-yellow-500 px-4 py-2 text-sm font-medium text-gray-900">Middle</button>
      <button className="-ml-px rounded-r-md border border-green-600 bg-green-600 px-4 py-2 text-sm font-medium text-white">Right</button>
    </div>
  )
}`

const buttonGroupCode4 = `export default function ButtonGroupOutlinedStylesExample() {
  return (
    <div role="group" aria-label="Basic outlined example" className="inline-flex rounded-md shadow-sm">
      <button className="rounded-l-md border border-blue-600 bg-transparent px-4 py-2 text-sm font-medium text-blue-600">Left</button>
      <button className="-ml-px border border-blue-600 bg-transparent px-4 py-2 text-sm font-medium text-blue-600">Middle</button>
      <button className="-ml-px rounded-r-md border border-blue-600 bg-transparent px-4 py-2 text-sm font-medium text-blue-600">Right</button>
    </div>
  )
}`

const buttonGroupCode5 = `export default function ButtonGroupCheckboxAndRadioExample() {
  return (
    <div role="group" aria-label="Basic checkbox toggle button group" className="inline-flex rounded-md shadow-sm">
      <div>
        <input type="checkbox" id="btncheck1" className="peer sr-only" />
        <label htmlFor="btncheck1" className="inline-flex cursor-pointer rounded-l-md border border-blue-600 bg-transparent px-4 py-2 text-sm font-medium text-blue-600 peer-checked:bg-blue-600 peer-checked:text-white">Checkbox 1</label>
      </div>
      <div>
        <input type="checkbox" id="btncheck2" className="peer sr-only" />
        <label htmlFor="btncheck2" className="-ml-px inline-flex cursor-pointer border border-blue-600 bg-transparent px-4 py-2 text-sm font-medium text-blue-600 peer-checked:bg-blue-600 peer-checked:text-white">Checkbox 2</label>
      </div>
      <div>
        <input type="checkbox" id="btncheck3" className="peer sr-only" />
        <label htmlFor="btncheck3" className="-ml-px inline-flex cursor-pointer rounded-r-md border border-blue-600 bg-transparent px-4 py-2 text-sm font-medium text-blue-600 peer-checked:bg-blue-600 peer-checked:text-white">Checkbox 3</label>
      </div>
    </div>
  )
}`

const buttonGroupCode6 = `export default function ButtonToolbarExample() {
  return (
    <div role="toolbar" aria-label="Toolbar with button groups" className="flex flex-wrap items-center gap-2">
      <div role="group" aria-label="First group" className="inline-flex rounded-md shadow-sm">
        <button className="rounded-l-md border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white">1</button>
        <button className="-ml-px border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white">2</button>
        <button className="-ml-px border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white">3</button>
        <button className="-ml-px rounded-r-md border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white">4</button>
      </div>
      <div role="group" aria-label="Second group" className="inline-flex rounded-md shadow-sm">
        <button className="rounded-l-md border border-gray-600 bg-gray-600 px-4 py-2 text-sm font-medium text-white">5</button>
        <button className="-ml-px border border-gray-600 bg-gray-600 px-4 py-2 text-sm font-medium text-white">6</button>
        <button className="-ml-px rounded-r-md border border-gray-600 bg-gray-600 px-4 py-2 text-sm font-medium text-white">7</button>
      </div>
      <div role="group" aria-label="Third group" className="inline-flex rounded-md shadow-sm">
        <button className="rounded-md border border-cyan-600 bg-cyan-600 px-4 py-2 text-sm font-medium text-white">8</button>
      </div>
    </div>
  )
}`

const buttonGroupCode7 = `export default function ButtonToolbar2Example() {
  return (
    <div className="space-y-4">
      <div className="mb-3 flex flex-wrap items-center gap-2" role="toolbar" aria-label="Toolbar with button groups">
        <div className="inline-flex rounded-md shadow-sm" role="group" aria-label="First group">
          <button className="rounded-l-md border border-gray-500 bg-transparent px-4 py-2 text-sm font-medium text-gray-700">1</button>
          <button className="-ml-px border border-gray-500 bg-transparent px-4 py-2 text-sm font-medium text-gray-700">2</button>
          <button className="-ml-px border border-gray-500 bg-transparent px-4 py-2 text-sm font-medium text-gray-700">3</button>
          <button className="-ml-px rounded-r-md border border-gray-500 bg-transparent px-4 py-2 text-sm font-medium text-gray-700">4</button>
        </div>
        <div className="flex">
          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-700">@</span>
          <input type="text" placeholder="Input group example" className="w-full min-w-60 rounded-r-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900" />
        </div>
      </div>
    </div>
  )
}`

const buttonGroupCode8 = `export default function ButtonGroupSizingExample() {
  const baseButton = 'border border-blue-600 bg-transparent font-medium text-blue-600 hover:bg-blue-600 hover:text-white'

  return (
    <div className="flex flex-col items-start gap-4">
      <div role="group" aria-label="Large button group" className="inline-flex rounded-md shadow-sm">
        <button className={\`\${baseButton} rounded-l-md px-5 py-3 text-lg\`}>Left</button>
        <button className={\`\${baseButton} -ml-px px-5 py-3 text-lg\`}>Middle</button>
        <button className={\`\${baseButton} -ml-px rounded-r-md px-5 py-3 text-lg\`}>Right</button>
      </div>
      <div role="group" aria-label="Default button group" className="inline-flex rounded-md shadow-sm">
        <button className={\`\${baseButton} rounded-l-md px-4 py-2 text-sm\`}>Left</button>
        <button className={\`\${baseButton} -ml-px px-4 py-2 text-sm\`}>Middle</button>
        <button className={\`\${baseButton} -ml-px rounded-r-md px-4 py-2 text-sm\`}>Right</button>
      </div>
      <div role="group" aria-label="Small button group" className="inline-flex rounded-md shadow-sm">
        <button className={\`\${baseButton} rounded-l-md px-3 py-1.5 text-xs\`}>Left</button>
        <button className={\`\${baseButton} -ml-px px-3 py-1.5 text-xs\`}>Middle</button>
        <button className={\`\${baseButton} -ml-px rounded-r-md px-3 py-1.5 text-xs\`}>Right</button>
      </div>
    </div>
  )
}`

const buttonGroupCode9 = `export default function ButtonGroupNestingExample() {
  const [open, setOpen] = useState(false)

  return (
    <div role="group" aria-label="Button group with nested dropdown" className="inline-flex rounded-md shadow-sm">
      <button className="rounded-l-md border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white">1</button>
      <button className="-ml-px border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white">2</button>
      <div className="relative">
        <button onClick={() => setOpen(!open)} className="-ml-px inline-flex items-center gap-1 rounded-r-md border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white">Dropdown</button>
        {open && (
          <div className="absolute right-0 z-50 mt-2 w-52 rounded-md border border-gray-200 bg-white py-1 shadow-lg">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Action</a>
          </div>
        )}
      </div>
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
                <BreadcrumbPage>Button Groups</BreadcrumbPage>
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
            <ComponentPreview title="Basic example" detail="Group buttons together for related actions." code={buttonGroupCode1} language="tsx">
              <ButtonGroupExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Button group with links" detail="Use a grouped set of links for navigation." code={buttonGroupCode2} language="tsx">
              <ButtonGroup2Example />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Mixed styles" detail="Combine multiple colors in one grouped control." code={buttonGroupCode3} language="tsx">
              <ButtonGroupMixedStylesExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Outlined styles" detail="Use outlined buttons for a lighter grouped look." code={buttonGroupCode4} language="tsx">
              <ButtonGroupOutlinedStylesExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Checkbox and radio toggle buttons" detail="Create grouped toggle controls using checkbox or radio styling." code={buttonGroupCode5} language="tsx">
              <ButtonGroupCheckboxAndRadioExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Button toolbar" detail="Combine multiple button groups to form a toolbar." code={buttonGroupCode6} language="tsx">
              <ButtonToolbarExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Button toolbar with input" detail="Append an input field to a toolbar layout." code={buttonGroupCode7} language="tsx">
              <ButtonToolbar2Example />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Sizing" detail="Adjust the size of buttons inside a group." code={buttonGroupCode8} language="tsx">
              <ButtonGroupSizingExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Nesting" detail="Add a dropdown control inside a button group." code={buttonGroupCode9} language="tsx">
              <ButtonGroupNestingExample />
            </ComponentPreview>
          </div>
        </div>
      </div>

      <Footer />
    </SidebarInset>
  )
}