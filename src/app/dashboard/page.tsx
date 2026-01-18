"use client";

import { useEffect, useMemo, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import SalesChart from "@/components/SalesChart";
import RecentOrders from "@/components/RecentOrders";
import RangeFilter from "@/components/RangeFilter";

type ChartPoint = { day: string; revenue: number; users: number };
type Order = { id: string; customer: string; amount: number; status: string };

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [range, setRange] = useState("7");

  const [stats, setStats] = useState({
    users: 0,
    revenue: 0,
    orders: 0,
    growth: 0,
  });

  const [chart7, setChart7] = useState<ChartPoint[]>([]);
  const [chart30, setChart30] = useState<ChartPoint[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/dashboard");
      const data = await res.json();

      setStats(data.stats);
      setChart7(data.chart7);
      setChart30(data.chart30);
      setOrders(data.orders);
    }
    load();
  }, []);

  const chartData = useMemo(() => {
    return range === "7" ? chart7 : chart30;
  }, [range, chart7, chart30]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col md:ml-64">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-6 flex flex-col gap-6">
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard title="Total Users" value={stats.users.toLocaleString()} />
            <StatCard title="Revenue" value={`₹ ${stats.revenue.toLocaleString()}`} />
            <StatCard title="Orders" value={stats.orders.toLocaleString()} />
            <StatCard title="Growth" value={`+${stats.growth}%`} />
          </section>

          <section className="flex justify-end">
            <RangeFilter value={range} onChange={setRange} />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SalesChart data={chartData} />
            <RecentOrders orders={orders} />
          </section>
        </main>
      </div>
    </div>
  );
}
