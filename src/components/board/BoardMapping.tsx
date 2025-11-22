"use client";
import { motion } from "motion/react";
import MemberCard from "@/components/MemberCard";
import { boardInfo } from "@/data/BoardData";

const boardMappingAnimation = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

const BoardMapping = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {boardInfo.map((member, index) => (
        <motion.div
          key={index}
          {...boardMappingAnimation(index * 0.15)}
          className="w-1/2 md:w-1/3"
        >
          <MemberCard
            key={index}
            name={member.name}
            role={member.title}
            image={member.image}
            linkedin={member.linkedin}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default BoardMapping;
