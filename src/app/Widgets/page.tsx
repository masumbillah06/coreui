import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/ui-sidebar/breadcrumb"
import { Separator } from "@/components/ui/ui-sidebar/separator"
import { SidebarInset } from "@/components/ui/ui-sidebar/sidebar"
import ComponentPreview from "@/components/preview/ComponentPreview"
import CoreUIBanner from "@/components/ui/banners/ui-banners"
import WidgetStatsA from "@/components/dashboard/WidgetsStatsA"
import { WidgetStatsDSocial } from "@/components/dashboard/SocialHandle"
import TrafficSalesCard from "@/components/dashboard/TrafficSalesCard"
import { ChartAreaLegend } from "@/components/dashboard/TrafficsChart"
import { WidgetStatsEExample } from "@/components/preview/main-pages/widgets/widget-4"

const widgetStatsCode = `"use client";

import React from "react";
import {
  ArrowUp,
  MoreVertical,
} from "lucide-react";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

// Chart Data
const primaryData = [
  { name: "January", value: 65 },
  { name: "February", value: 59 },
  { name: "March", value: 84 },
  { name: "April", value: 84 },
  { name: "May", value: 51 },
  { name: "June", value: 55 },
  { name: "July", value: 40 },
];

// Widget Menu Component
function WidgetMenu() {
  return (
    <div className="relative">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center rounded-md p-1 text-white/80 transition hover:bg-white/10 hover:text-white">
          <MoreVertical className="h-5 w-5" />
        </summary>
        <div className="absolute right-0 top-8 z-50 w-48 overflow-hidden rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
          <button type="button" className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
            Action
          </button>
          <button type="button" className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
            Another action
          </button>
        </div>
      </details>
    </div>
  );
}

// Stats Card Component
function StatsCard({ value, percentage, title, background, children }) {
  return (
    <div className={\`w-full min-w-0 overflow-hidden rounded-md p-5 text-white shadow-sm \${background}\`}>
      <div className="flex items-start justify-between">
        <div className="min-w-0">
          <div className="whitespace-nowrap text-2xl font-semibold leading-none">
            {value}
            <span className="ml-2 text-sm font-normal text-white/80">
              ({percentage} <ArrowUp className="ml-1 inline-block h-4 w-4" />)
            </span>
          </div>
          <p className="mt-2 whitespace-nowrap text-sm text-white/80">{title}</p>
        </div>
        <WidgetMenu />
      </div>
      <div className="mt-3 h-12.5 w-full">{children}</div>
    </div>
  );
}

export default function WidgetStatsA() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatsCard value="$9.000" percentage="40.9%" title="Widget title" background="bg-[#5856d6]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={primaryData}>
            <XAxis dataKey="name" hide />
            <YAxis domain={[30, 89]} hide />
            <Line type="monotone" dataKey="value" stroke="rgba(255,255,255,0.55)" strokeWidth={1} dot={{ r: 4, fill: "#5856d6", stroke: "#5856d6" }} />
          </LineChart>
        </ResponsiveContainer>
      </StatsCard>
    </div>
  );
}`

const socialWidgetCode = `"use client";

import React from "react";
import CIcon from "@coreui/icons-react";
import { cibFacebook, cibYoutube, cibLinkedin } from "@coreui/icons";

const socialStats = [
  {
    name: "Facebook",
    icon: cibFacebook,
    color: "bg-[#3b5998]",
    stats: [
      { title: "Friends", value: "89K" },
      { title: "Feeds", value: "459" },
    ],
  },
  {
    name: "YouTube",
    icon: cibYoutube,
    color: "bg-[#FF0000]",
    stats: [
      { title: "Subscribers", value: "973K" },
      { title: "Videos", value: "1.2K" },
    ],
  },
  {
    name: "LinkedIn",
    icon: cibLinkedin,
    color: "bg-[#0A66C2]",
    stats: [
      { title: "Followers", value: "128K" },
      { title: "Posts", value: "342" },
    ],
  },
];

export function WidgetStatsDSocial() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {socialStats.map((social) => (
        <div key={social.name} className="overflow-hidden rounded-lg bg-white shadow-sm">
          <div className={\`\${social.color} flex h-32 items-center justify-center\`}>
            <CIcon icon={social.icon} className="text-white [&_path]:fill-current" height={52} />
          </div>
          <div className="grid grid-cols-2">
            {social.stats.map((stat) => (
              <div key={stat.title} className="px-4 py-4 text-center">
                <div className="text-lg font-semibold text-slate-800">{stat.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-slate-500">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}`

const trafficSalesCode = `"use client";

import { User, Users, CreditCard, Wallet, Smartphone, Coins, KeyRound, Landmark } from "lucide-react";
import { FaGoogle, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { OpenAI } from "@lobehub/icons";

const stats = [
  { label: "New Clients", value: "9,123", color: "border-blue-500" },
  { label: "Recurring Clients", value: "22,643", color: "border-red-500" },
  { label: "Pageviews", value: "78,623", color: "border-amber-400" },
  { label: "Organic", value: "49,123", color: "border-emerald-500" },
];

const weekly = [
  { day: "Monday", newClients: 42, recurring: 78 },
  { day: "Tuesday", newClients: 62, recurring: 96 },
  { day: "Wednesday", newClients: 25, recurring: 56 },
  { day: "Thursday", newClients: 54, recurring: 88 },
  { day: "Friday", newClients: 35, recurring: 70 },
  { day: "Saturday", newClients: 60, recurring: 82 },
  { day: "Sunday", newClients: 32, recurring: 68 },
];

export default function TrafficSalesCard() {
  const maxDay = Math.max(...weekly.map((d) => Math.max(d.newClients, d.recurring)));

  return (
    <div className="w-full rounded-lg border border-gray-300 bg-white text-sm shadow-sm">
      <div className="border-b border-gray-200 bg-gray-100 px-5 py-3">
        <h2 className="text-[13px] font-medium text-gray-600">Traffic &amp; Sales</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border-b border-gray-100 md:border-b-0 md:border-r">
          <div className="grid grid-cols-2 border-b border-gray-100">
            {stats.slice(0, 2).map((s) => (
              <div key={s.label} className={\`border-l-4 \${s.color} px-5 py-4\`}>
                <p className="text-gray-400">{s.label}</p>
                <p className="mt-1 text-xl font-semibold text-gray-700">{s.value}</p>
              </div>
            ))}
          </div>
          <div className="space-y-7 px-5 py-5">
            {weekly.map((d) => (
              <div key={d.day} className="flex items-center gap-4">
                <span className="w-20 shrink-0 text-xs text-gray-600">{d.day}</span>
                <div className="flex flex-1 flex-col gap-1">
                  <div className="h-1 w-full rounded-full bg-gray-100">
                    <div className="h-1 rounded-full bg-indigo-500" style={{ width: \`\${(d.newClients / maxDay) * 100}%\` }} />
                  </div>
                  <div className="h-1 w-full rounded-full bg-gray-100">
                    <div className="h-1 rounded-full bg-red-500" style={{ width: \`\${(d.recurring / maxDay) * 100}%\` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}`

const chartAreaLegendCode = `"use client"

import { ArrowRight, CalendarDays, Download } from "lucide-react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts"

import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", visits: 140, users: 165 },
  { month: "February", visits: 178, users: 145 },
  { month: "March", visits: 171, users: 105 },
  { month: "April", visits: 185, users: 150 },
  { month: "May", visits: 162, users: 95 },
  { month: "June", visits: 177, users: 60 },
  { month: "July", visits: 140, users: 92 },
]

const chartConfig = {
  visits: {
    label: "Visits",
    color: "#2f8cff",
  },
  users: {
    label: "Users",
    color: "#1b9b4b",
  },
} satisfies ChartConfig

export function ChartAreaLegend() {
  return (
    <Card className="gap-0 rounded-md border border-[#d5dbe3] py-0 shadow-none">
      <CardHeader className="flex flex-row items-start justify-between gap-4 px-4 pb-0 pt-4 sm:px-5">
        <div>
          <CardTitle className="text-[23px] font-normal leading-6 text-[#1f2937]">Traffic</CardTitle>
          <p className="mt-1 text-[13px] text-[#697586]">October - April 2026</p>
        </div>
      </CardHeader>
    </Card>
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
                <BreadcrumbLink href="#">Widgets</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto border-t border-slate-300 bg-slate-100">
        <div className="mx-auto w-full max-w-305 px-4 py-4">
            <div className="mb-4">
              <CoreUIBanner/>
            </div>

            <div className="space-y-8">
              <ComponentPreview code={widgetStatsCode}>
                <WidgetStatsA />
              </ComponentPreview>

              <ComponentPreview code={socialWidgetCode}>
                <WidgetStatsDSocial />
              </ComponentPreview>
              
              <ComponentPreview code={widgetStatsCode}>
                <WidgetStatsEExample/>
              </ComponentPreview>

              <ComponentPreview code={chartAreaLegendCode}>
                <ChartAreaLegend />
              </ComponentPreview>
              
              <ComponentPreview code={trafficSalesCode}>
                <TrafficSalesCard />
              </ComponentPreview>
            </div>
        </div>
      </div>

      <Footer />
    </SidebarInset>
  )
}