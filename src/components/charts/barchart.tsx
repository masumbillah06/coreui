"use client";

import { useEffect, useRef } from "react";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export function ChartBarExample() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart<"bar"> | null>(null);

  const data: ChartData<"bar"> = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ],
    datasets: [
      {
        label: "GitHub Commits",
        backgroundColor: "#f87979",
        borderColor: "#f87979",
        data: [40, 20, 12, 39, 10, 40, 39],
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        labels: {
          color: "#64748b",
        },
      },
    },

    scales: {
      x: {
        grid: {
          color: "rgba(148, 163, 184, 0.2)",
        },
        ticks: {
          color: "#64748b",
        },
      },

      y: {
        grid: {
          color: "rgba(148, 163, 184, 0.2)",
        },
        ticks: {
          color: "#64748b",
        },
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    chartRef.current?.destroy();

    chartRef.current = new Chart(canvasRef.current, {
      type: "bar",
      data,
      options,
    });

    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, []);

  return (
    <div className="flex h-85 min-w-0 w-full max-w-full flex-col rounded-md border border-slate-300 bg-white">
      <div className="flex shrink-0 items-center justify-between bg-slate-100 border-b border-slate-300 px-4 py-3">
        <h2 className="text-sm text-slate-700">Bar Chart</h2>
        <a href="#" className="text-sm underline text-blue-500 hover:text-slate-700">
          docs
        </a>
      </div>
      <div className="relative min-h-0 flex-1 p-4">
        <canvas ref={canvasRef} className="block max-w-full" />
      </div>
    </div>
  );
}