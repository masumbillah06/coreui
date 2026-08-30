"use client";

import { Search } from "lucide-react";
import { FormEvent, useState } from "react";

export default function NotFound() {
  const [search, setSearch] = useState("");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search.trim()) return;

    console.log("Searching for:", search);
    // Add your search logic here
  };

  return (
    <main className="flex w-full min-h-screen items-center justify-center bg-[#f1f2f5] px-6 pt-8">
      <div className="w-full max-w-[650px]">
        {/* 404 + Message */}
        <div className="flex items-center gap-5">
          {/* 404 */}
          <h1 className="text-[64px] font-light leading-none tracking-[-2px] text-[#343a40]">
            404
          </h1>

          {/* Text */}
          <div className="border-l border-[#d8dbe0] pl-5">
            <h2 className="text-[20px] font-semibold leading-7 text-[#1f2937]">
              Oops! You&apos;re lost.
            </h2>

            <p className="mt-1 text-[16px] leading-6 text-[#667085]">
              The page you are looking for was not found.
            </p>
          </div>
        </div>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="mt-5 flex h-[39px] w-full"
        >
          {/* Search Icon */}
          <div className="flex w-[42px] shrink-0 items-center justify-center border border-[#d8dbe0] bg-[#f8f9fa]">
            <Search
              size={17}
              strokeWidth={1.5}
              className="text-[#343a40]"
            />
          </div>

          {/* Input */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="What are you looking for?"
            className="min-w-0 flex-1 border-y border-[#d8dbe0] bg-white px-3 text-[15px] text-[#495057] outline-none placeholder:text-[#667085] focus:border-[#86b7fe] focus:ring-1 focus:ring-[#86b7fe]"
          />

          {/* Search Button */}
          <button
            type="submit"
            className="w-[73px] shrink-0 border border-[#6c8ee8] bg-[#6c8ee8] text-[14px] font-medium text-[#111827] transition-colors hover:bg-[#5b7de0]"
          >
            Search
          </button>
        </form>
      </div>
    </main>
  );
}