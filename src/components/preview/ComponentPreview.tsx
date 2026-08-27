"use client";

import { useState, type ReactNode } from "react";
import { Play, Code2, Copy, Check } from "lucide-react";

type ComponentPreviewProps = {
  /** Title shown above the preview and code tabs */
  title?: string;
  /** Supporting detail shown below the title */
  detail?: string;
  /** The live component/markup to render inside the Preview tab */
  children: ReactNode;
  /** The source code string to show (and let users copy) in the Code tab */
  code: string;
  /** Optional label shown in the code block header, e.g. "tsx", "jsx" */
  language?: string;
  /** Optional extra classes for the outer wrapper */
  className?: string;
};

export default function ComponentPreview({  
  title,
  detail,
  children,
  code,
  language = "tsx",
  className = "",
}: ComponentPreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard API unavailable — fail silently
    }
  };

  return (
    <div className={`w-full overflow-hidden rounded-md border border-gray-200 bg-white ${className}`}>
      {title && (
        <div className="border-b bg-gray-100 border-gray-300 px-6 py-2">
          <h2 className="text-sm font-bold text-gray-900">{title}</h2>
        </div>
      )}
      {detail && (
        <div className="px-6 py-3">
          <h2 className="text-xs text-muted-foreground">{detail}</h2>
        </div>
      )}
      {/* Tabs */}
      <div className="flex items-center gap-6 px-6 pt-4">
        <button
          type="button"
          onClick={() => setTab("preview")}
          className={`flex items-center gap-1.5 pb-3 pt-1 text-sm font-medium transition-colors ${
            tab === "preview"
              ? "border-b-2 border-indigo-600 text-indigo-600"
              : "border-b-2 border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          <Play size={14} className={tab === "preview" ? "fill-indigo-600" : ""} />
          <p className="font-semibold">Preview</p>
        </button>
        <button
          type="button"
          onClick={() => setTab("code")}
          className={`flex items-center gap-1.5 pb-3 pt-1 text-sm font-medium transition-colors ${
            tab === "code"
              ? "border-b-2 border-indigo-600 text-indigo-600"
              : "border-b-2 border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          <Code2 size={14} />
          <p className="font-semibold">Code</p>
        </button>
      </div>

      {/* Panels */}
      {tab === "preview" ? (
        <div>
          <div className="border-t border-gray-200 bg-gray-50 p-3 m-3">
            {children}
          </div>
        </div>
      ) : (
        <div className="relative border-t border-gray-200 bg-sidebar-accent rounded-lg mx-3">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
            <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
              {language}
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-300 hover:bg-white/10 hover:text-white"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-400" />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={13} />
                  Copy
                </>
              )}
            </button>
          </div>
          <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-gray-100">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
