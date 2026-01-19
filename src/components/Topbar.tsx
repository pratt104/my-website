"use client";

import { useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Topbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-300 dark:border-gray-700 px-6 py-4 bg-white dark:bg-gray-900">
      <h2 className="text-lg font-bold text-black dark:text-white">Overview</h2>

      <div className="flex gap-3">
        <ThemeToggle />

        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg bg-black text-white font-semibold hover:opacity-90"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
