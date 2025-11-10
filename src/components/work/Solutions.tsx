"use client";
import { motion } from "motion/react";

import SolutionCard from "@/components/work/SolutionCard";
import { solutionsInfos } from "@/data/SolutionCards";
import Title from "@/components/Title";

const Solutions = () => {
  return (
    <div className="mx-auto w-5/6">
      <div className="mb-10">
        <Title title="Solutions" />
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:gap-4">
        {solutionsInfos.map(({ cardTitle, cardText, imageSrc }, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1.0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
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
  );
};

export default Solutions;
