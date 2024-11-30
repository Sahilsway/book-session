"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <main className="text-center">
        <h1 className="text-2xl font-bold mb-4">Hello</h1>
        <Link
          href="/consultants"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
        >
          Go to Consultants
        </Link>
      </main>
    </div>
  );
}
