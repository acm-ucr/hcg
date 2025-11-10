"use client"

import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

interface SolutionCardProps {
    cardTitle: string;
    cardText: string;
    imageSrc: StaticImageData;
}

const SolutionCard = ({ cardTitle, cardText, imageSrc }: SolutionCardProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-hcg-pastel-brown-secondary mx-auto w-7/8 rounded-lg p-6"
        >
            <div className="flex h-full flex-col items-center space-y-8 rounded-lg border-3 border-white px-2 pt-2 text-center text-white">
                <Image src={imageSrc} alt={"Image of " + cardTitle} height={70} className="mt-2" />
                <div className="text-2xl font-bold">{cardTitle}</div>
                <p className="mb-5 text-lg font-thin">{cardText}</p>
            </div>

        </motion.div>
    );
};

export default SolutionCard;
