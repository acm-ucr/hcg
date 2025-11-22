"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

type CarouselItem = {
  name: string;
  icon: StaticImageData;
};

const LogoCarousel = ({ data }: { data: CarouselItem[] }) => {
  const duplicatedData = [...data, ...data, ...data, ...data];
  const totalWidth = data.length * 192;
  const SPEED = 70;
  const duration = totalWidth / SPEED;
  return (
    <div className="bg-hcg-white w-full overflow-hidden">
      <motion.div
        className="flex items-center"
        animate={{ x: [0, -totalWidth] }}
        transition={{
          duration,
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
