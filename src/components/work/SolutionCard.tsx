import Image, { StaticImageData } from "next/image";
interface SolutionCardProps {
  cardTitle: string;
  cardText: string;
  imageSrc: StaticImageData;
}

const SolutionCard = ({ cardTitle, cardText, imageSrc }: SolutionCardProps) => {
  return (
    <div className="max-w-lg rounded-lg bg-[#bfa57f] p-5">
      <div className="flex flex-col items-center space-y-10 rounded-lg border-3 border-white p-5 text-center text-white">
        <Image
          src={imageSrc}
          alt={"Image of " + cardTitle}
          width={60}
          height={60}
        />
        <h1 className="text-3xl font-bold">{cardTitle}</h1>
        <p className="mb-5 text-xl">{cardText}</p>
      </div>
    </div>
  );
};

export default SolutionCard;
