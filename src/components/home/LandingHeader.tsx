import LandingPageLogo from "@/public/groupPhoto.webp";
import Image from "next/image";

const LandingHeader = () => {
  return (
    <div className="relative flex h-[75vh] w-full flex-col items-center justify-center">
      <Image
        src={LandingPageLogo}
        alt="General Header"
        fill
        className="object-cover opacity-100"
        priority
      />

      <div className="text-hcg-white absolute content-center text-center opacity-100">
        <div className="text-5xl font-bold">Highlander Consulting Group</div>
        <div>UC Riverside's Premier Consulting Organization</div>
      </div>
    </div>
  );
};

export default LandingHeader;
