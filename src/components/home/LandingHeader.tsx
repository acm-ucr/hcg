import LandingPageLogo from "@/public/mainLogo.webp";
import Image from "next/image";

const LandingHeader = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <Image
        src={LandingPageLogo}
        alt="Higherlander Consulting Group Club Members"
      />
      <div className="absolute content-center text-center">
        <h2 className="text-3xl">Highlander Consulting Group</h2>
        <p>{`UC Riverside's Premier Consulting Organization`}</p>
      </div>
    </section>
  );
};

export default LandingHeader;
