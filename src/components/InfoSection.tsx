import Image, { StaticImageData } from "next/image";

export interface InfoSectionProps {
  title: string;
  text: string;
  image: StaticImageData;
  imageAlt: string;
}

const InfoSection = ({ title, text, image, imageAlt }: InfoSectionProps) => {
  return (
    <div>
      <div className="mx-auto flex w-5/6 flex-row items-center justify-center py-4 md:py-8">
        <div className="flex flex-col justify-center space-y-3 md:w-1/2 md:space-y-6">
          <div className="text-hcg-pastel-brown med:text-3xl text-center text-xl font-bold sm:text-2xl md:text-left">
            {title}
          </div>
          <p className="flex items-center justify-center text-center text-sm font-normal sm:text-lg md:w-3/4 md:text-left md:text-xl">
            {text}
          </p>
        </div>
        <div className="hidden h-auto w-1/2 justify-center md:flex">
          <Image src={image} alt={imageAlt} />
        </div>
      </div>
      <div className="mx-auto mb-5 w-5/6 md:hidden">
        <Image src={image} alt={imageAlt} />
      </div>
    </div>
  );
};

export default InfoSection;
