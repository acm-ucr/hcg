"use client";
import BoardCard from "@/components/board/BoardCard";
import { boardInfo } from "@/data/BoardData";
import { motion } from "motion/react";

const BoardMapping = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center">
      {boardInfo.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.3 }}
          viewport={{ once: true }}
          className="flex w-1/2 justify-center md:w-1/3"
        >
          <BoardCard
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
