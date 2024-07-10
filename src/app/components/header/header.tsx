'use client'

import Navbar from "@/app/components/navigation/navbar";
import Sidebar from "@/app/components/navigation/sidebar";

export default function Header() {
  return (
    <header className="mt-2 sm:mt-4 pb-2 sm:pb-4 mb-4 border-b">
      <Sidebar />
      <Navbar />
    </header>
  );
}