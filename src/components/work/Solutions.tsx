import SolutionCard from "@/components/work/SolutionCard";
import { SolutionsInfo } from "@/data/SolutionCards";

const Solutions = () => {
  return (
    <div className="mx-[5%]">
      <h1 className="text-hcg-pastel-brown mb-15 text-center text-6xl font-bold">
        Solutions
      </h1>
      <div className="grid grid-cols-3">
        {SolutionsInfo.map(({ cardTitle, cardText, imageSrc }, index) => (
          <SolutionCard
            key={index}
            cardTitle={cardTitle}
            cardText={cardText}
            imageSrc={imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Solutions;
