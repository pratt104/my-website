"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const login = () => {
    document.cookie = `auth=true; path=/;`;
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border w-full max-w-sm">
        <h1 className="text-xl font-bold">Login</h1>

        <input
          className="border w-full mt-4 px-3 py-2 rounded-lg"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full mt-4 bg-black text-white py-2 rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
}
