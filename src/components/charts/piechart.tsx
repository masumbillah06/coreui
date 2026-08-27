"use client";

import { useEffect, useRef } from "react";
import {
  Chart,
  PieController,
  ArcElement,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js";

Chart.register(PieController, ArcElement, Tooltip, Legend);

export function ChartPieExample() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart<"pie"> | null>(null);

  const data: ChartData<"pie"> = {
    labels: ["Red", "Yellow", "Blue"],
    datasets: [
      {
        backgroundColor: ["#FF6C6C", "#facc15", "#3b82f6"],
        borderColor: "#ffffff",
        borderWidth: 2,
        data: [300, 100, 50],
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#64748b",
          padding: 10,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    chartRef.current?.destroy();

    chartRef.current = new Chart(canvasRef.current, {
      type: "pie",
      data,
      options,
    });

    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, []);

  return (
    <div className="flex h-145 min-w-0 w-full max-w-full flex-col rounded-md border border-slate-300 bg-white">
      <div className="flex shrink-0 items-center justify-between border-b border-slate-300 bg-slate-100 px-4 py-3">
        <h2 className="text-sm text-slate-700">Pie Chart</h2>

        <a
          href="#"
          className="text-sm text-blue-500 underline hover:text-slate-700"
        >
          docs
        </a>
      </div>

      <div className="relative min-h-0 flex-1 p-4">
        <canvas ref={canvasRef} className="block max-w-full" />
      </div>
    </div>
  );
}
