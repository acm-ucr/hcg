import Image, { StaticImageData } from "next/image";
interface SolutionCardProps {
  cardTitle: string;
  cardText: string;
  imageSrc: StaticImageData;
}

const SolutionCard = ({ cardTitle, cardText, imageSrc }: SolutionCardProps) => {
  return (
    <div className="bg-hcg-pastel-brown-secondary rounded-lg p-6 w-7/8 mx-auto">
      <div className="flex flex-col items-center space-y-8 rounded-lg border-3 border-white p-7 text-center text-white h-full">
        <Image src={imageSrc} alt={"Image of " + cardTitle} height={70} />
        <div className="text-4xl font-bold">{cardTitle}</div>
        <p className="mb-5 text-2xl font-thin">{cardText}</p>
      </div>
    </div>
  );
};

export default SolutionCard;
