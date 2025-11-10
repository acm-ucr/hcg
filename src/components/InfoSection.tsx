"use client";

import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import Title from "@/components/Title";

export interface InfoSectionProps {
  title: string;
  text: string;
  image: StaticImageData;
  imageAlt: string;
}

const InfoSection = ({ title, text, image, imageAlt }: InfoSectionProps) => {
  return (
    <div>
      <div className="mx-auto flex w-5/6 flex-row items-center justify-center py-4 md:py-8">
        <div className="flex flex-col justify-center space-y-3 md:w-1/2 md:space-y-6">
          <Title
            title={title}
            color={"text-hcg-pastel-brown"}
            className={
              "med:text-3xl text-center text-xl font-bold sm:text-2xl md:text-left"
            }
          />
          <motion.p
            className="flex items-center justify-center text-center text-sm font-normal sm:text-lg md:w-3/4 md:text-left md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            {text}
          </motion.p>
        </div>
        <motion.div
          className="hidden h-auto w-1/2 justify-center md:flex"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, scale: { type: "spring", bounce: 0.5 } }}
          viewport={{ once: true, amount: "all" }}
        >
          <Image src={image} alt={imageAlt} />
        </motion.div>
      </div>
      <div className="mx-auto mb-5 w-5/6 md:hidden">
        <Image src={image} alt={imageAlt} />
      </div>
    </div>
  );
};

export default InfoSection;
