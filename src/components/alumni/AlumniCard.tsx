"use client";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export interface AlumniCardProps {
  name: string;
  role: Uppercase<string>;
  image: StaticImageData;
  currentOccupation?: string;
  linkedin: string;
}

const cardAnimation = {
   whileHover: { scale: 1.1 }
}

const AlumniCard = ({
  image,
  name,
  role,
  currentOccupation,
  linkedin,
}: AlumniCardProps) => {
  return (
    <div className="flex h-full flex-col items-center p-6 text-center">
      <Image src={image} alt={name} className="mb-4 rounded-full" />

      <div className="mb-2 text-xl">{name}</div>

      <div className="text-hcg-dark-gray mb-2 font-normal">{role}</div>

      <div className="text-hcg-dark-gray mb-4">{currentOccupation}</div>
      <motion.div {...cardAnimation}>
        <Link href={linkedin} target="_blank" className="mt-auto">
          <FaLinkedin className="text-hcg-gold h-8 w-8" />
        </Link>
      </motion.div>
    </div>
  );
};

export default AlumniCard;
