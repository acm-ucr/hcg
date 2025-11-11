"use client";

import navbarLinks from "@/data/NavbarData";
import Link from "next/link";
import Image from "next/image";
import SmallLogo from "@/public/smallLogo.webp";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div className="from-hcg-black to-hcg-gold flex h-24 items-center justify-between bg-linear-to-r p-8">
      <div className="flex w-full">
        <Image src={SmallLogo} alt="SmallLogo" />
      </div>

      <div className="space-between text-hcg-white flex items-center gap-8 pr-8 text-xl text-nowrap">
        {navbarLinks.map(({ name, link }, index) => (
          <Link
            href={link}
            key={index}
            className={link === path ? "text-red-500" : "text-white"}
          >
            {" "}
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
