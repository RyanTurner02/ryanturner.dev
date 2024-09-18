'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function SidebarHeader() {
  const [isDisplaying, setIsDisplaying] = useState(false);
  
  const toggleSidebar = () => {
    setIsDisplaying(!isDisplaying);
  };

  const hamburgerImage = <Image src="assets/hamburger/hamburger.svg" alt="" onClick={toggleSidebar} width={25} height={25} />;
  const xmarkImage = <Image src="assets/xmark/xmark.svg" alt="" onClick={toggleSidebar} width={25} height={25} />;

  const toggleSidebarImage = () => {
    return isDisplaying ? xmarkImage : hamburgerImage;
  };

  return (
    <div className="flex sm:hidden justify-between ml-4 mr-4">
      <Link className="header-link" href="/">Ryan Turner</Link>
      { toggleSidebarImage() }
    </div>
  );
}