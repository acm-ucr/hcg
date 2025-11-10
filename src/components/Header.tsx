"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
interface HeaderProps {
  title: string;
  headerPicture: StaticImageData;
}

const Header = ({ title, headerPicture }: HeaderProps) => {
  return (
    <div className="relative h-[50vh] w-full">
      <Image
        src={headerPicture}
        alt="General Header"
        fill
        className="object-cover opacity-60"
        priority
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="absolute top-1/2 w-full -translate-y-1/2 p-5 text-center text-5xl font-medium text-white"
      >
        {title}
      </motion.div>
    </div>
  );
};

export default Header;
