"use client"

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

const metrics = [
  { label: "Visits", value: "29.703 Users (40%)", color: "#20b455", width: "40%" },
  { label: "Unique", value: "24.093 Users (20%)", color: "#2f8cff", width: "20%" },
  { label: "Pageviews", value: "78.706 Views (60%)", color: "#f7a500", width: "60%" },
  { label: "New Users", value: "22.123 Users (80%)", color: "#eb5757", width: "80%" },
  { label: "Bounce Rate", value: "(40.15%)", color: "#5b57d8", width: "40.15%" },
]

export function ChartAreaLegend() {
  return (
    <Card className="gap-0 rounded-md border border-[#d5dbe3] py-0 shadow-none">
      <CardHeader className="flex flex-row items-start justify-between gap-4 px-4 pb-0 pt-4 sm:px-5">
        <div>
          <CardTitle className="text-[23px] font-normal leading-6 text-[#1f2937]">Traffic</CardTitle>
          <p className="mt-1 text-[13px] text-[#697586]">October - April 2026</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex h-9.5 w-75 items-center justify-between rounded-md border border-[#d5dbe3] bg-white px-3 text-[16px] text-[#344054] max-sm:w-47.5 max-sm:text-sm">
            <span>10/1/2025</span>
            <ArrowRight className="h-5 w-5 text-[#b7bdc6]" />
            <span>4/30/2026</span>
            <CalendarDays className="h-4 w-4 text-[#9aa3af]" />
          </div>
          <button type="button" aria-label="Download traffic report" className="flex h-9.5 w-10.5 items-center justify-center rounded-md bg-[#5856d6] text-white">
            <Download className="h-4.25 w-4.25" />
          </button>
        </div>
      </CardHeader>
      <div className="px-3 pt-8 sm:px-4">
        <ChartContainer config={chartConfig} className="h-72.5 aspect-auto w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 4,
              right: 12,
              top: 4,
              bottom: 4,
            }}
          >
            <CartesianGrid stroke="#d5dbe3" vertical={false} />
            <YAxis
              domain={[0, 250]}
              ticks={[0, 100, 200, 250]}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#344054", fontSize: 12 }}
              width={38}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={{ stroke: "#cbd5e1" }}
              tickMargin={9}
              tick={{ fill: "#344054", fontSize: 12 }}
            />
            <Area
              dataKey="visits"
              type="natural"
              fill="#ddecfb"
              fillOpacity={0.7}
              stroke="#2f8cff"
              strokeWidth={2}
            />
            <Area
              dataKey="users"
              type="natural"
              fill="transparent"
              stroke="#1b9b4b"
              strokeWidth={2}
            />
            <ReferenceLine y={65} stroke="#ed777e" strokeDasharray="7 5" />
          </AreaChart>
        </ChartContainer>
      </div>
      <CardFooter className="grid grid-cols-2 gap-5 rounded-none border-t border-[#d5dbe3] bg-white px-4 py-3 sm:grid-cols-5 sm:gap-6 sm:px-5">
        {metrics.map((metric) => (
          <div key={metric.label} className="min-w-0 text-center">
            <p className="text-[16px] text-[#64748b]">{metric.label}</p>
            <p className="mt-1 whitespace-nowrap text-[16px] font-semibold text-[#1f2937]">{metric.value}</p>
            <div className="mt-3 h-1 w-full rounded-sm bg-[#e5e9ee]">
              <div className="h-full rounded-sm" style={{ backgroundColor: metric.color, width: metric.width }} />
            </div>
          </div>
        ))}
      </CardFooter>
    </Card>
  )
}