import Link from "next/link";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed z-50 top-0 left-0 h-full w-64 bg-black text-white p-4
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:flex md:flex-col
        `}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Dashboard</h2>

          {/* Close button (mobile only) */}
          <button
            className="md:hidden text-white text-xl"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-3 text-sm">
          <Link href="/dashboard" className="hover:text-gray-300" onClick={onClose}>
            Overview
          </Link>
          <Link href="/dashboard/reports" className="hover:text-gray-300" onClick={onClose}>
            Reports
          </Link>
          <Link href="/dashboard/settings" className="hover:text-gray-300" onClick={onClose}>
            Settings
          </Link>
        </nav>
      </aside>
    </>
  );
}
