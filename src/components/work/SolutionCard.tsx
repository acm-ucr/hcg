import Image, { StaticImageData } from "next/image";
interface SolutionCardProps {
	cardTitle: string,
	cardText: string,
	imageSrc: StaticImageData
}

const SolutionCard = ({cardTitle, cardText, imageSrc}: SolutionCardProps) => {
	return (
		<div className="max-w-lg bg-[#bfa57f] p-5 rounded-lg">
			<div className= "flex flex-col items-center text-center p-5 space-y-10 text-white rounded-lg border-3 border-white">
				<Image
					src={imageSrc}
					alt={"Image of " + cardTitle}
					width={60}
					height={60}
				/>
				<h1 className="font-bold text-3xl">{cardTitle}</h1>
				<p className="text-xl mb-5">{cardText}</p>
			</div>
		</div>
	);
};

export default SolutionCard;
