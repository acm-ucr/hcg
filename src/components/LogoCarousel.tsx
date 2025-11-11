"use client";

import { carouselData } from "@/data/CarouselItems";
import Image from "next/image";
import { motion } from "motion/react";

const LogoCarousel = () => {
  const duplicatedData = [
    ...carouselData,
    ...carouselData,
    ...carouselData,
    ...carouselData,
  ];
  const totalWidth = carouselData.length * 192;
  return (
    <div className="bg-hcg-white w-full overflow-hidden">
      <motion.div
        className="flex items-center"
        animate={{ x: [0, -totalWidth] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedData.map(({ name, icon }, idx) => (
          <div
            key={idx}
            className="bg-hcg-white flex w-48 flex-shrink-0 items-center justify-center px-8 py-4"
          >
            <Image
              src={icon}
              alt={`${name} logo`}
              className="w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;
