"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
interface HeaderProps {
  title: string;
  headerPicture: StaticImageData;
}

const Header = ({ title, headerPicture }: HeaderProps) => {
  return (
    <div className="relative h-[28vh] w-full md:h-[38vh] xl:h-[52vh]">
      <Image
        src={headerPicture}
        alt="General Header"
        fill
        className="object-cover object-top"
        priority
      />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/2 w-full -translate-y-1/2 p-5 text-center text-3xl font-medium text-white md:text-5xl xl:text-6xl"
      >
        {title}
      </motion.div>
    </div>
  );
};

export default Header;
