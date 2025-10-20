import Image, { StaticImageData } from "next/image";
interface SolutionCardProps {
  cardTitle: string;
  cardText: string;
  imageSrc: StaticImageData;
}

const SolutionCard = ({ cardTitle, cardText, imageSrc }: SolutionCardProps) => {
  return (
    <div className="bg-hcg-pastel-brown-secondary w-1/4 rounded-lg p-5">
      <div className="flex flex-col items-center space-y-8 rounded-lg border-3 border-white p-5 text-center text-white">
        <Image src={imageSrc} alt={"Image of " + cardTitle} />
        <div className="text-xl font-bold">{cardTitle}</div>
        <p className="text-md mb-5">{cardText}</p>
      </div>
    </div>
  );
};

export default SolutionCard;
