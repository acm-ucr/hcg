"use client";
import { motion } from "motion/react";
import Button from "@/components/Button";

const OurTeam = () => {
  return (
    <div className="bg-hcg-gray py-8 text-center">
      <div className="text-hcg-black mb-6 text-2xl font-semibold md:text-3xl">
        Our Team
      </div>
      <p className="text-hcg-black text-md mx-auto mb-8 w-2/3 md:text-lg lg:w-1/3">
        Our members come from all majors and bring leadership experiences from a
        wide variety of professional backgrounds:
      </p>
      <motion.div
        whileHover={{
          scale: [1, 1.2, 1.3, 1.75],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "20%", "50%", "0%"],
        }}
      >
        <Button text="Learn More" href="/work" />
      </motion.div>
    </div>
  );
};

export default OurTeam;
