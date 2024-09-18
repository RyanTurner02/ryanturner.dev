'use client'

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center space-x-3 mt-auto mb-10">
      <Link href="https://github.com/RyanTurner02">
        <Image src="assets/github/github-mark-light.svg" alt="GitHub Logo" width={25} height={25} />
      </Link>

      <Link href="https://www.linkedin.com/in/ryanturner02/">
        <Image src="assets/linkedin/linkedin-light.svg" alt="LinkedIn Logo" width={25} height={25} />
      </Link>
    </footer>
  );
}