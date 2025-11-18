"use client";
import { motion } from "motion/react";
import AlumniCard from "@/components/alumni/AlumniCard";
import { AlumniData } from "@/data/AlumniData";

const mappingAnimation = (delay = 0) => ({
  initial: { opacity: 0.75, scale: 0.85 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, delay },
});

const AlumniMapping = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {AlumniData.map((member, index) => (
        <motion.div
          key={index}
          {...mappingAnimation(index * 0.15)}
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
