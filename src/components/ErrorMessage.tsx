"use client"
import Button from "@/components/Button";
import { motion } from "motion/react";


const ErrorMessage = () => {
	return (
		<div className="flex h-[75vh] flex-col items-center justify-center p-6 text-center">
			<motion.div
				animate={{ opacity: [0.2, 1, 0.5, 1, 0.3, 1, 0.8, 0.2, 1, 0.5, 1, 0.3, 1, 0.8, 1, 1, 1, 1, 1, 1, 1, 1, 1] }}
				transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
			>
				<div className="text-hcg-pastel-brown text-8xl font-bold">404</div>
			</motion.div>
			<div className="p-6 text-2xl">Page Not Found</div>
			<Button text="Back To Home" href="/" />
		</div>
	);
};

export default ErrorMessage;
