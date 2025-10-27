"use client";

import { carouselData } from "@/data/CarouselItems";
import Image from "next/image";

const LogoCarousel = () => {
  return (
    <div className="bg-hcg-white w-full overflow-hidden">
      <div className="animate-scroll flex items-center">
        {carouselData.map(({ name, icon }, idx) => (
          <div
            key={idx}
            className="bg-hcg-white flex items-center justify-center px-4 py-4"
          >
            <Image
              src={icon}
              alt={`${name} logo`}
              className="w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
