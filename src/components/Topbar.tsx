import ThemeToggle from "@/components/ThemeToggle";

type TopbarProps = {
  onMenuClick: () => void;
};

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="w-full bg-white dark:bg-gray-900 dark:text-white border-b px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          className="md:hidden px-3 py-2 bg-black text-white rounded-lg text-sm"
          onClick={onMenuClick}
        >
          ☰
        </button>

        <h1 className="text-lg font-bold">Overview</h1>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />

        <button className="px-4 py-2 bg-black text-white rounded-lg text-sm dark:bg-white dark:text-black">
          Logout
        </button>
      </div>
    </header>
  );
}
