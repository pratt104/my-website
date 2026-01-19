"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

type ChartData = {
  day: string;
  revenue: number;
  users: number;
};

type SalesChartProps = {
  data: ChartData[];
};

export default function SalesChart({ data }: SalesChartProps) {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow-sm border dark:border-gray-700 p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Revenue vs Users</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last period summary
        </p>
      </div>

      {/* ✅ Fixed height wrapper to prevent width/height -1 warning */}
      <div className="h-[260px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Line type="monotone" dataKey="revenue" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="users" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
