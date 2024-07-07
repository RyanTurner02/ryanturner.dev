'use client'

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-around">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div className="space-x-10">
        <Link href="/projects">Projects</Link>
        <Link href="/games">Games</Link>
      </div>
    </nav>
  );
}