'use client'

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center space-x-3 mb-10">
      <Image src="assets/github/github-mark-light.svg" alt="GitHub Logo" width={25} height={25} />
      <Image src="assets/linkedin/linkedin-light.svg" alt="LinkedIn Logo" width={25} height={25} />
      <Image src="assets/envelope/envelope-light.svg" alt="Email Logo" width={25} height={25} />
    </footer>
  );
}