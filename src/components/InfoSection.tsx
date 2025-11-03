import Image, { StaticImageData } from "next/image";

export interface InfoSectionProps {
  title: string;
  text: string;
  image: StaticImageData;
  imageAlt: string;
}

const InfoSection = ({ title, text, image, imageAlt }: InfoSectionProps) => {
  return (
    <div className="mx-auto flex w-5/6 flex-col items-center justify-center py-8 md:flex-row">
      <div className="flex w-full flex-col justify-center space-y-6 md:w-1/2">
        <div className="text-hcg-pastel-brown text-center text-3xl font-bold break-words md:text-left md:text-2xl lg:text-5xl">
          {title}
        </div>
        <p className="text-m justify-center text-center font-normal md:w-3/4 md:text-left md:text-lg">
          {text}
        </p>
      </div>
      <div className="flex h-auto w-full justify-center pt-8 md:w-1/2 md:pt-0">
        <Image src={image} alt={imageAlt} />
      </div>
    </div>
  );
};

export default InfoSection;
