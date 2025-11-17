"use client";
import { motion } from "motion/react";

import SolutionCard from "@/components/work/SolutionCard";
import { solutionsInfos } from "@/data/SolutionCards";
import Title from "@/components/Title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import leftArrow from "@/public/work/leftArrow.svg";
import rightArrow from "@/public/work/rightArrow.svg";
import { useState, useEffect } from "react";

const Solutions = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateCarouselState = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    updateCarouselState();

    carouselApi.on("select", updateCarouselState);

    return () => {
      carouselApi.off("select", updateCarouselState);
    };
  }, [carouselApi]);

  const scrollToIndex = (index: number) => {
    carouselApi?.scrollTo(index);
  };

  return (
    <div>
      <div className="mx-auto hidden w-5/6 md:block">
        <div className="mb-8">
          <Title title="Solutions" />
        </div>
        <div className="mx-auto flex flex-col gap-4 md:flex-row md:gap-6">
          {solutionsInfos.map(({ cardTitle, cardText, imageSrc }, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1.0 }}
              whileHover={{ scale: 1.03 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="w-full md:w-1/3"
            >
              <SolutionCard
                cardTitle={cardTitle}
                cardText={cardText}
                imageSrc={imageSrc}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-6 md:hidden">
        <div>
          <button onClick={() => scrollToIndex(currentIndex - 1)}>
            <Image src={leftArrow} alt="Left Arrow" />
          </button>
        </div>
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-2/3"
        >
          <CarouselContent>
            {solutionsInfos.map(({ cardTitle, cardText, imageSrc }, index) => (
              <CarouselItem key={index}>
                <SolutionCard
                  cardTitle={cardTitle}
                  cardText={cardText}
                  imageSrc={imageSrc}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div>
          <button onClick={() => scrollToIndex(currentIndex + 1)}>
            <Image src={rightArrow} alt="Right Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
