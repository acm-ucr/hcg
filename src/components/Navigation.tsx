"use client";

import navbarLinks from "@/data/NavbarData";
import Link from "next/link";
import Image from "next/image";
import SmallLogo from "@/public/smallLogo.webp";
import { FaBars } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import { useState, useEffect } from "react";

const Navigation = () => {
  // const [select, selected] = useState("");
  const [visibility, toggleVisibility] = useState(false);

  const toggleIconVisibility = () => {
    toggleVisibility(!visibility);
  };


  return (
    <div>
      <div className="from-hcg-black to-hcg-gold inset-x-0 fixed top-0 z-[60] flex h-24 items-center justify-between bg-linear-to-r p-2">
        <div className="flex w-full sticky">
          <Image src={SmallLogo} alt="SmallLogo" />
        </div>

        <div className="space-between text-hcg-white  hidden h-auto items-center gap-8 pr-8 text-xl md:flex">
          {navbarLinks.map(({ name, link }, index) => (
            <Link href={link} key={index}>
              {name}
            </Link>
          ))}
        </div>

        <button
          className="text-hcg-white flex text-5xl sm:inline md:hidden"
          onClick={toggleIconVisibility}
        >
          {visibility ? <HiXMark /> : <FaBars />}
        </button>
      </div>

      {visibility && (
  <div className="from-hcg-black to-hcg-gold text-hcg-white fixed top-24 left-0 right-0 z-50 flex flex-col items-center justify-start bg-linear-to-r md:hidden">
    <div className="flex w-full max-w-xl flex-col gap-8 py-8">
      {navbarLinks.map(({ name, link }, index) => (
        <Link
          href={link}
          key={index}
          className="w-full px-4 py-4 text-center text-3xl"
          onClick={toggleIconVisibility}
        >
          {name}
        </Link>
      ))}
    </div>
  </div>
)}

    </div>
  );
};

export default Navigation;
