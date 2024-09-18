'use client'

import "@/app/styles/links.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="hidden sm:flex justify-around">
      <div>
        <Link className="header-link" href="/">Ryan Turner</Link>
      </div>
      <div className="space-x-10">
        <Link className="header-link" href="/projects">Projects</Link>
        <Link className="header-link" href="/games">Games</Link>
        <Link className="header-link" href="/contact">Contact</Link>
      </div>
    </nav>
  );
}