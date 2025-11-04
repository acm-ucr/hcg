import SolutionCard from "@/components/work/SolutionCard";
import { solutionsInfos } from "@/data/SolutionCards";
import Title from "@/components/Title";

const Solutions = () => {
  return (
    <div className="mx-auto w-5/6">
      <div className="mb-8">
        <Title title="Solutions" />
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:gap-4">
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
