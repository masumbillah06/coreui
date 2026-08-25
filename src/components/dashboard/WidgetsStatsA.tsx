"use client";

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

// ─────────────────────────────────────────────
// Chart Data
// ─────────────────────────────────────────────

const primaryData = [
  { name: "January", value: 65 },
  { name: "February", value: 59 },
  { name: "March", value: 84 },
  { name: "April", value: 84 },
  { name: "May", value: 51 },
  { name: "June", value: 55 },
  { name: "July", value: 40 },
];

const infoData = [
  { name: "January", value: 1 },
  { name: "February", value: 18 },
  { name: "March", value: 9 },
  { name: "April", value: 17 },
  { name: "May", value: 34 },
  { name: "June", value: 22 },
  { name: "July", value: 11 },
];

const warningData = [
  { name: "January", value: 78 },
  { name: "February", value: 81 },
  { name: "March", value: 80 },
  { name: "April", value: 45 },
  { name: "May", value: 34 },
  { name: "June", value: 12 },
  { name: "July", value: 40 },
];

const dangerData = [
  { name: "January", value: 78 },
  { name: "February", value: 81 },
  { name: "March", value: 45 },
  { name: "April", value: 34 },
  { name: "May", value: 12 },
  { name: "June", value: 40 },
  { name: "July", value: 85 },
  { name: "August", value: 65 },
  { name: "September", value: 23 },
  { name: "October", value: 12 },
  { name: "November", value: 98 },
  { name: "December", value: 34 },
  { name: "January", value: 84 },
  { name: "February", value: 67 },
  { name: "March", value: 82 },
  { name: "April", value: 70 },
];

// ─────────────────────────────────────────────
// Dropdown
// ─────────────────────────────────────────────

function WidgetMenu() {
  return (
    <div className="relative">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center rounded-md p-1 text-white/80 transition hover:bg-white/10 hover:text-white">
          <MoreVertical className="h-5 w-5" />
        </summary>

        <div className="absolute right-0 top-8 z-50 w-48 overflow-hidden rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
          <button
            type="button"
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            Action
          </button>

          <button
            type="button"
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            Another action
          </button>

          <button
            type="button"
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            Something else here...
          </button>

          <button
            type="button"
            disabled
            className="block w-full cursor-not-allowed px-4 py-2 text-left text-sm text-gray-400"
          >
            Disabled action
          </button>
        </div>
      </details>
    </div>
  );
}

// ─────────────────────────────────────────────
// Stats Card
// ─────────────────────────────────────────────

interface StatsCardProps {
  value: string;
  percentage: string;
  title: string;
  background: string;
  children: React.ReactNode;
}

function StatsCard({
  value,
  percentage,
  title,
  background,
  children,
}: StatsCardProps) {
  return (
    <div
      className={`w-full min-w-0 overflow-hidden rounded-md p-5 text-white shadow-sm ${background}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="min-w-0">
          <div className="whitespace-nowrap text-2xl font-semibold leading-none">
            {value}

            <span className="ml-2 text-sm font-normal text-white/80">
              ({percentage}
              <ArrowUp className="ml-1 inline-block h-4 w-4" />)
            </span>
          </div>

          <p className="mt-2 whitespace-nowrap text-sm text-white/80">
            {title}
          </p>
        </div>

        <WidgetMenu />
      </div>

      {/* Chart */}
      <div className="mt-3 h-12.5 w-full">
        {children}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────

export default function WidgetStatsA() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

      {/* Primary Card */}
      <StatsCard
        value="$9.000"
        percentage="40.9%"
        title="Widget title"
        background="bg-[#5856d6]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={primaryData}>
            <XAxis dataKey="name" hide />
            <YAxis domain={[30, 89]} hide />

            <Line
              type="monotone"
              dataKey="value"
              stroke="rgba(255,255,255,0.55)"
              strokeWidth={1}
              dot={{
                r: 4,
                fill: "#5856d6",
                stroke: "#5856d6",
              }}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </StatsCard>

      {/* Info Card */}
      <StatsCard
        value="$9.000"
        percentage="40.9%"
        title="Widget title"
        background="bg-[#39f]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={infoData}>
            <XAxis dataKey="name" hide />
            <YAxis domain={[-9, 39]} hide />

            <Line
              type="monotone"
              dataKey="value"
              stroke="rgba(255,255,255,0.55)"
              strokeWidth={1}
              dot={{
                r: 4,
                fill: "#39f",
                stroke: "#39f",
              }}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </StatsCard>

      {/* Warning Card */}
      <StatsCard
        value="$9.000"
        percentage="40.9%"
        title="Widget title"
        background="bg-[#f9b115]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={warningData}>
            <XAxis dataKey="name" hide />
            <YAxis hide />

            <Area
              type="monotone"
              dataKey="value"
              stroke="rgba(255,255,255,0.55)"
              strokeWidth={2}
              fill="rgba(255,255,255,0.2)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </StatsCard>

      {/* Danger Card */}
      <StatsCard
        value="$9.000"
        percentage="40.9%"
        title="Widget title"
        background="bg-[#e55353]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dangerData}>
            <XAxis dataKey="name" hide />
            <YAxis hide />

            <Bar
              dataKey="value"
              fill="rgba(255,255,255,0.2)"
              barSize={8}
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </StatsCard>

    </div>
  );
}