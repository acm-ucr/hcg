"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";

export interface BoardCardProps {
  name: string;
  role: string;
  image: StaticImageData;
  linkedin: string;
}

const boardCardAimation = {
  whileHover: { scale: 1.1 },
};

const BoardCard = ({ name, role, image, linkedin }: BoardCardProps) => {
  return (
    <div className="flex flex-col items-center p-8 text-center">
      <Image src={image} alt={name} className="mx-auto mb-4 rounded-full" />

      <div className="text-center text-xl font-semibold">{name}</div>

      <div className="text-hcg-dark-gray mb-4 text-center">{role}</div>
      <motion.div {...boardCardAimation}>
        <Link href={linkedin} target="_blank">
          <FaLinkedin className="text-hcg-gold h-12 w-12" />
        </Link>
      </motion.div>
    </div>
  );
};

export default BoardCard;
