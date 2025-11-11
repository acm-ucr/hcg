import Button from "@/components/Button";

const OurTeam = () => {
  return (
    <div className="bg-hcg-gray py-8 text-center">
      <div className="text-hcg-black mb-6 text-2xl font-semibold md:text-3xl">
        Our Team
      </div>
      <p className="text-hcg-black text-md mx-auto mb-8 w-2/3 md:text-lg lg:w-1/3">
        Our members come from all majors and bring leadership experiences from a
        wide variety of professional backgrounds:
      </p>
      <Button text="Learn More" href="/work" />
    </div>
  );
};

export default OurTeam;
