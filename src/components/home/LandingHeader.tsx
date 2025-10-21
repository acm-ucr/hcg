import LandingPageLogo from "@/public/mainLogo.webp";
import Image from "next/image";

const LandingHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={LandingPageLogo}
        alt="Higherlander Consulting Group Club Members"
      />
      <div className="text-hcg-white absolute content-center text-center">
        <div className="text-3xl font-bold">Highlander Consulting Group</div>
        <div>{`UC Riverside's Premier Consulting Organization`}</div>
      </div>
    </div>
  );
};

export default LandingHeader;
