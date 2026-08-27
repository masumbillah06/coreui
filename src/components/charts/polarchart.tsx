"use client";

import { useEffect, useRef } from "react";
import {
  Chart,
  PolarAreaController,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js";

Chart.register(
  PolarAreaController,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend
);

export function ChartPolarAreaExample() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart<"polarArea"> | null>(null);

  const data: ChartData<"polarArea"> = {
    labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB",
        ],
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"polarArea"> = {
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

    scales: {
      r: {
        grid: {
          color: "rgba(148, 163, 184, 0.2)",
        },
        ticks: {
          color: "#64748b",
          backdropColor: "transparent",
        },
        angleLines: {
          color: "rgba(148, 163, 184, 0.2)",
        },
        pointLabels: {
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
      type: "polarArea",
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
        <h2 className="text-sm text-slate-700">Polar Area Chart</h2>

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
