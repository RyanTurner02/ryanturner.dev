'use client'

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center space-x-3">
      <Image src="assets/github/github-mark-light.svg" alt="GitHub Light Logo" width={25} height={25} />
      <Image src="assets/envelope/envelope-light.svg" alt="GitHub Light Logo" width={25} height={25} />
    </footer>
  );
}