import SolutionCard from "@/components/work/SolutionCard";
import { solutionsInfos } from "@/data/SolutionCards";

const Solutions = () => {
  return (
    <div className="mx-auto w-5/6">
      <div className="text-hcg-pastel-brown mb-8 text-center text-3xl font-bold">
        Solutions
      </div>
      <div className="flex flex-row gap-x-4">
        {solutionsInfos.map(({ cardTitle, cardText, imageSrc }, index) => (
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
