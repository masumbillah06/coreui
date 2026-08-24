"use client";

import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  className?: string;
  showClear?: boolean;
}

export function SearchBar({
  placeholder = "Search...",
  value,
  onChange,
  onSearch,
  className,
  showClear = true,
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const searchValue = value ?? internalValue;

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "/") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  const handleChange = (newValue: string) => {
    if (value === undefined) {
      setInternalValue(newValue);
    }

    onChange?.(newValue);
  };

  const handleClear = () => {
    handleChange("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch?.(searchValue);
    }
  };

  return (
    <div
      className={cn(
        "flex h-8 w-full items-center gap-2 rounded-md",
        "border border-gray-300 bg-white px-3",
        "transition-all duration-200",
        "focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-100",
        className
      )}
    >
      <Search className="h-5 w-5 shrink-0 text-gray-400" />

      <input
        ref={inputRef}
        type="text"
        value={searchValue}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="h-full min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
      />

      <div className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
        <kbd className="rounded border border-gray-300 bg-gray-100 px-1.5 py-0.5 font-sans">
          Ctrl
        </kbd>
        <kbd className="rounded border border-gray-300 bg-gray-100 px-1.5 py-0.5 font-sans">
          /
        </kbd>
      </div>

      {showClear && searchValue && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          className="rounded-md p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}