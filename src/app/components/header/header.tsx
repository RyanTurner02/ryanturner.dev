'use client'

import Navbar from "@/app/components/navigation/navbar";
import SidebarHeader from "@/app/components/navigation/sidebar-header";

export default function Header() {
  return (
    <header className="mt-2 sm:mt-4 pb-2 sm:pb-4 mb-4 border-b">
      <SidebarHeader />
      <Navbar />
    </header>
  );
}