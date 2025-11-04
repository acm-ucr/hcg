import Image, { StaticImageData } from "next/image";

export interface InfoSectionProps {
  title: string;
  text: string;
  image: StaticImageData;
  imageAlt: string;
}

const InfoSection = ({ title, text, image, imageAlt }: InfoSectionProps) => {
  return (
    <div className="mx-auto flex w-5/6 flex-row items-center justify-center py-8">
      <div className="flex w-1/2 flex-col justify-center space-y-6">
        <div className="text-hcg-pastel-brown text-3xl font-bold">{title}</div>
        <p className="flex w-3/4 items-center justify-center text-xl font-normal">
          {text}
        </p>
      </div>
      <div className="flex h-auto w-1/2 justify-center">
        <Image src={image} alt={imageAlt} />
      </div>
    </div>
  );
};

export default InfoSection;
