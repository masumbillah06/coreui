"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItemData = {
  title: string;
  content: ReactNode;
};

const defaultItems: AccordionItemData[] = [
  {
    title: "Accordion Item #1",
    content: "Content for the first item goes here.",
  },
  {
    title: "Accordion Item #2",
    content: "Content for the second item goes here.",
  },
  {
    title: "Accordion Item #3",
    content: "Content for the third item goes here.",
  },
];

export default function Accordion({
  items = defaultItems,
}: {
  items?: AccordionItemData[];
}) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(
    () => new Set([0]),
  );

  const toggleItem = (index: number) => {
    setOpenIndices((current) => {
      const next = new Set(current);

      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }

      return next;
    });
  };

  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndices.has(index);

        return (
          <div
            key={item.title}
            className={index !== 0 ? "border-t border-gray-200" : ""}
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className={`flex w-full items-center justify-between px-4 py-3.5 text-left text-sm text-gray-700 transition-colors ${
                isOpen
                  ? "border border-violet-500 bg-violet-300 shadow-md"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <span>{item.title}</span>

              <ChevronDown
                size={18}
                className={`text-gray-400 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-4 py-4 text-sm text-gray-500">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
