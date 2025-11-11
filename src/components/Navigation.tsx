"use client";

import navbarLinks from "@/data/NavbarData";
import Link from "next/link";
import Image from "next/image";
import SmallLogo from "@/public/smallLogo.webp";
import { FaBars } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import { useState } from "react";

const Navigation = () => {
  // const [select, selected] = useState("");
  const [visibility, toggleVisibility] = useState(false);

  const toggleIconVisibility = () => {
    toggleVisibility(!visibility);
  };

  return (
    <div>
      <div className="flex h-24 items-center fixed inset-x-0 top-0 z-[60] from-hcg-black to-hcg-gold bg-linear-to-r justify-between p-8">
        <div className="flex w-full">
          <Image src={SmallLogo} alt="SmallLogo" />
        </div>

        <div className="space-between text-hcg-white hidden h-auto items-center gap-8 pr-8 text-xl text-nowrap md:inline-flex">
          {navbarLinks.map(({ name, link }, index) => (
            <Link href={link} key={index}>
              {name}
            </Link>
          ))}
        </div>

        <button 
          className="text-hcg-white flex text-5xl md:inline lg:hidden"
          onClick={toggleIconVisibility}>
          {visibility ? (
            <HiXMark/>
          ) : (
            <FaBars/>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Below */}
      {visibility && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-start bg-linear-to-r from-hcg-black to-hcg-gold md:hidden text-hcg-white whitespace-nowrap"
        >
          <div className="pt-24 w-full max-w-xl px-5 flex flex-col items-stretch gap-8">
            {navbarLinks.map(({ name, link }, index) => (
              <Link
                href={link}
                key={index}
                className="w-full text-center text-5xl px-4 py-4"
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
