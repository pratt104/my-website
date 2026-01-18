"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
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
    <div className="bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow-sm border p-4 h-[320px]">
      <h2 className="text-lg font-bold mb-4">Revenue vs Users</h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" strokeWidth={3} />
          <Line type="monotone" dataKey="users" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
