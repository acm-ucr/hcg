"use client";
import Button from "@/components/Button";
import contactUsBG from "@/public/work/contactUsBG.webp";
import Title from "@/components/Title";
import Image from "next/image";
import { motion } from "motion/react";

interface ContactUsProps {
  buttonText: string;
  buttonHref: string;
  text: string;
  titleText?: string;
}

const ContactUs = ({
  buttonHref,
  buttonText,
  text,
  titleText,
}: ContactUsProps) => {
  return (
    <div className="bg-hcg-black relative mt-8 flex min-h-100 flex-col items-center justify-center text-center text-white">
      <Image
        src={contactUsBG}
        alt="Gold Stripes"
        objectFit="cover"
        className="absolute z-0 h-full w-full"
      />
      {titleText && <Title title={titleText} color="text-white" />}
      <p className="text-md z-20 mb-6 w-4/5 p-6 md:w-3/4 md:text-xl">{text}</p>
      <motion.div whileHover={{ scale: 1.2 }} className="z-20">
        <Button text={buttonText} href={buttonHref} />
      </motion.div>
    </div>
  );
};

export default ContactUs;
