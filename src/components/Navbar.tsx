import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-lg font-bold">My Website</h1>

      <div className="flex gap-6 text-sm">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link href="/dashboard" className="hover:text-gray-300">
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
