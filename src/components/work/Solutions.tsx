import SolutionCard from "@/components/work/SolutionCard";

import Trend from "@/public/work/solutions/trend.webp";

const Solutions = () => {
  return (
    <div>
      <SolutionCard
        cardTitle="MARKET INTELLIGENCE"
        cardText="By deciphering competitor strategies, strengths, and potential vulnerabilities, through comprehensive competitive intelligence research from our team, we are able to provide our clients with a detailed roadmap for their own market positioning and growth. Alongside this, our team uses data models to project sales and cost trends to ensure that our clients can make informed decisions that are underpinned by rich market insights."
        imageSrc={Trend}
      />
    </div>
  );
};

export default Solutions;
