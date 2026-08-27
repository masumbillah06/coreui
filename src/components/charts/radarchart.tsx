"use client";

import { useEffect, useRef } from "react";
import {
  Chart,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js";

Chart.register(
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export function ChartRadarExample() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart<"radar"> | null>(null);

  const data: ChartData<"radar"> = {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(100, 116, 139, 0.2)",
        borderColor: "#64748b",
        pointBackgroundColor: "#64748b",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#64748b",
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderColor: "#3b82f6",
        pointBackgroundColor: "#3b82f6",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#3b82f6",
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
      },
    ],
  };

  const options: ChartOptions<"radar"> = {
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
        angleLines: {
          color: "rgba(148, 163, 184, 0.2)",
        },
        ticks: {
          color: "#64748b",
          backdropColor: "transparent",
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
      type: "radar",
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
        <h2 className="text-sm text-slate-700">Radar Chart</h2>

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
