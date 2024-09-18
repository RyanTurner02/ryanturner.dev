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

  const displayLinks = () => {
    return (
      <div className="flex justify-center pt-4 border-t">
        <div className="flex flex-col text-center">
        <Link className="header-link my-1" href="/projects">Projects</Link>
        <Link className="header-link my-1" href="/games">Games</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex sm:hidden justify-between ml-4 mr-4 mb-4">
        <Link className="header-link" href="/">Ryan Turner</Link>
        { 
          toggleSidebarImage() 
        }
      </div>
      {
        isDisplaying && displayLinks()
      }
    </div>
  );
}