"use client";
import Button from "@/components/Button";
import { motion } from "motion/react";

const errorMessageAnimation = {
  initial: { y: -60 },
  whileInView: { y: 0 },
  transition: { duration: 0.5 },
};

const ErrorMessage = () => {
  return (
    <div className="flex h-[75vh] flex-col items-center justify-center p-6 text-center">
      <motion.div {...errorMessageAnimation}>
        <div className="text-hcg-pastel-brown text-8xl font-bold">404</div>
        <div className="p-6 text-2xl">Page Not Found</div>
      </motion.div>
      <Button text="Back To Home" href="/" />
    </div>
  );
};

export default ErrorMessage;
