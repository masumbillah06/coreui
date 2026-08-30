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
import AlertExample from "@/components/preview/preview-comps/alert/alert"
import AlertLinkColorExample from "@/components/preview/preview-comps/alert/alertExampleLink"
import AlertAdditionalContentExample from "@/components/preview/preview-comps/alert/alertWelldone"
import AlertDismissingExample from "@/components/preview/preview-comps/alert/alertMissing"

const alertCode = `import { type ReactNode } from "react";

type AlertColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

const alertStyles: Record<AlertColor, string> = {
  primary: "border-blue-200 bg-blue-50 text-blue-800",
  secondary: "border-slate-200 bg-slate-50 text-slate-800",
  success: "border-emerald-200 bg-emerald-50 text-emerald-800",
  danger: "border-red-200 bg-red-50 text-red-800",
  warning: "border-amber-200 bg-amber-50 text-amber-900",
  info: "border-cyan-200 bg-cyan-50 text-cyan-800",
  light: "border-gray-200 bg-white text-gray-800",
  dark: "border-gray-700 bg-gray-800 text-white",
};

function Alert({ color, children }: { color: AlertColor; children: ReactNode }) {
  return (
    <div className={\`rounded-md border px-4 py-3 text-sm font-medium \${alertStyles[color]}\`} role="alert">
      {children}
    </div>
  );
}

export default function AlertExample() {
  const colors: AlertColor[] = [
    "primary", "secondary", "success", "danger",
    "warning", "info", "light", "dark",
  ];

  return (
    <div className="grid gap-3">
      {colors.map((color) => (
        <Alert key={color} color={color}>A simple {color} alert - check it out!</Alert>
      ))}
    </div>
  );
}`

const alertWellDoneCode = `import React from 'react'
import { CAlert, CAlertHeading } from '@coreui/react'

export const AlertAdditionalContentExample = () => {
  return (
    <CAlert color="success">
      <CAlertHeading as="h4">Well done!</CAlertHeading>
      <p>
        Aww yeah, you successfully read this important alert message. This example text is going to
        run a bit longer so that you can see how spacing within an alert works with this kind of
        content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
      </p>
    </CAlert>
  )
}`

const alertDismissingCode = `"use client";

import { useState } from "react";

export const AlertDismissingExample = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  const handleClose = () => {
    alert("👋 Well, hi there! Thanks for dismissing me.");
    setIsVisible(false);
  };

  return (
    <div
      className="flex items-center justify-between gap-4 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"
      role="alert"
    >
      <div>
        <strong className="font-semibold">Go right ahead</strong> and click that dismiss over there
        on the right.
      </div>
      <button
        type="button"
        className="shrink-0 rounded px-2 text-lg leading-none text-amber-900/70 hover:bg-amber-200 hover:text-amber-950"
        aria-label="Dismiss alert"
        onClick={handleClose}
      >
        &times;
      </button>
    </div>
  );
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
                  <BreadcrumbPage>Alert</BreadcrumbPage>
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
              <ComponentPreview
                title="React Alert"
                detail="Use alerts to provide contextual feedback for typical user actions."
                code={alertCode}
                language="tsx"
              >
                <AlertExample />
              </ComponentPreview>
            </div>
            <div className="mb-5">
              <ComponentPreview
                title="React Alert (link color)"
                detail="Use alerts to provide contextual feedback for typical user actions."
                code={alertCode}
                language="tsx"
              >
                <AlertLinkColorExample />
              </ComponentPreview>
            </div>
            <div className="mb-5">
              <ComponentPreview
                title="React Alert (additional content)"
                detail="Use alerts to provide contextual feedback for typical user actions."
                code={alertWellDoneCode}
                language="tsx"
              >
                <AlertAdditionalContentExample />
              </ComponentPreview>
            </div>
            <div className="mb-5">
              <ComponentPreview
                title="React Alert (dismissing)"
                detail="Allow users to dismiss an alert after reading its message."
                code={alertDismissingCode}
                language="tsx"
              >
                <AlertDismissingExample />
              </ComponentPreview>
            </div>
          </div>
        </div>
        <Footer />
      </SidebarInset>
  )
}