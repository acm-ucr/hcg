"use client";
import { motion } from "motion/react";
import AlumniCard from "@/components/alumni/AlumniCard";
import { AlumniData } from "@/data/AlumniData";

const alumniMappingAnimation = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

const AlumniMapping = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {AlumniData.map((member, index) => (
        <motion.div
          key={index}
          {...alumniMappingAnimation(index * 0.15)}
          className="w-1/2 md:w-1/3"
        >
          <AlumniCard
            key={index}
            name={member.name}
            role={member.role}
            currentOccupation={member.currentOccupation}
            image={member.image}
            linkedin={member.linkedin}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AlumniMapping;
