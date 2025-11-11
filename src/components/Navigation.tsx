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
  const [visibility, toggleVisibility] = useState(true);

  const toggleIconVisibility = () => {
    toggleVisibility(!visibility);
  };

  return (
    <div className="from-hcg-black to-hcg-gold flex h-24 items-center justify-between bg-linear-to-r p-8">
      <div className="flex w-full">
        <Image src={SmallLogo} alt="SmallLogo" />
      </div>

      <div className="space-between text-hcg-white flex hidden h-auto items-center gap-8 pr-8 text-xl text-nowrap md:inline-flex">
        {navbarLinks.map(({ name, link }, index) => (
          <Link href={link} key={index}>
            {" "}
            {name}
          </Link>
        ))}
      </div>

      <div
        className={
          visibility
            ? "space-between text-hcg-white fixed top-5 top-[20%] z-10 flex w-[100%] flex-col items-center gap-8 pr-8 text-5xl text-nowrap md:inline-flex lg:hidden"
            : "hidden"
        }
      >
        {navbarLinks.map(({ name, link }, index) => (
          <Link
            href={link}
            key={index}
            onClick={() => {
              // selected(name);
              toggleIconVisibility();
            }}
          >
            {" "}
            {name}
          </Link>
        ))}
      </div>

      <button onClick={toggleIconVisibility}>
        {visibility ? (
          <HiXMark className="text-hcg-white flex text-5xl md:inline lg:hidden" />
        ) : (
          <FaBars className="text-hcg-white flex text-4xl md:inline lg:hidden" />
        )}
      </button>
    </div>
  );
};

export default Navigation;
