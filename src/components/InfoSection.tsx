import { InfoSectionProps } from "@/utils/types";
import Image from "next/image";

const InfoSection = ({ title, text, image, imageAlt }: InfoSectionProps) => {
  return (
    <div className="mx-auto flex min-h-[90vh] w-9/10 flex-row items-center justify-center">
      <div className="flex w-1/2 flex-col justify-center space-y-6">
        <h2 className="text-5xl leading-relaxed font-[700] text-[#7A6A58]">
          {title}
        </h2>
        <p className="flex w-3/4 items-center justify-center text-2xl font-[400]">
          {text}
        </p>
      </div>
      <div className="align-center flex h-auto w-1/2 justify-center">
        <Image src={image} alt={imageAlt} className="h-2xl w-2xl" />
      </div>
    </div>
  );
};

export default InfoSection;
