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
import {
  SidebarInset,
} from "@/components/ui/ui-sidebar/sidebar"
import CoreUIBanner from "@/components/ui/banners/ui-banners"
import ComponentPreview from "@/components/preview/ComponentPreview"
import Accordion from "@/components/preview/previewAndCode/accordion"
import AccordionAlways from "@/components/preview/previewAndCode/accordionAlways"

const accordionCode = `"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItemData = {
  title: string;
  content: ReactNode;
};

const defaultItems: AccordionItemData[] = [
  { title: "Accordion Item #1", content: "Content for the first item goes here." },
  { title: "Accordion Item #2", content: "Content for the second item goes here." },
  { title: "Accordion Item #3", content: "Content for the third item goes here." },
];

export default function Accordion({ items = defaultItems }: { items?: AccordionItemData[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.title}
            className={index !== 0 ? "border-t border-gray-200" : ""}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={\`flex w-full items-center justify-between px-4 py-3.5 text-left text-sm text-gray-700 \${
                isOpen
                  ? "border border-violet-500 bg-violet-400 shadow-md hover:bg-violet-400"
                  : "hover:bg-gray-50"
              }\`}
            >
              <span>{item.title}</span>
              <ChevronDown
                size={18}
                className={
                  isOpen ? "rotate-180 text-gray-400 transition-transform duration-200" : "text-gray-400 transition-transform duration-200"
                }
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 text-sm text-gray-500">{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}`

const accordionAlwaysCode = `"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItemData = {
  title: string;
  content: ReactNode;
};

export default function Accordion({ items }: { items: AccordionItemData[] }) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(
    () => new Set([0]),
  );

  const toggleItem = (index: number) => {
    setOpenIndices((current) => {
      const next = new Set(current);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = openIndices.has(index);
        return (
          <div key={item.title}>
            <button type="button" onClick={() => toggleItem(index)}>
              <span>{item.title}</span>
              <ChevronDown className={isOpen ? "rotate-180" : ""} />
            </button>
            {isOpen && <div>{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
}`

export default function Page() {
  return (
      <SidebarInset>
        <Header />
        <header className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <Separator
              orientation="vertical"
              className="mr-2 data-vertical:h-4 data-vertical:self-auto"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Accordion</BreadcrumbPage>
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
                <ComponentPreview title="React Accordion" detail="Click the accordions below to expand/collapse the accordion content." code={accordionCode} language="tsx">
                  <Accordion />
                </ComponentPreview>
              </div>
              <div className="mb-5">
                <ComponentPreview title="React Accordion Flush" detail="Click the accordions below to expand/collapse the accordion content." code={accordionCode} language="tsx">
                  <Accordion />
                </ComponentPreview>
              </div>
              <div className="mb-5">
                <ComponentPreview title="React Accordion always open" detail="Click the accordions below to expand/collapse the accordion content." code={accordionAlwaysCode} language="tsx">
                  <AccordionAlways />
                </ComponentPreview>
              </div>
            </div>
          </div>
        <Footer />  
      </SidebarInset>
  )
}


