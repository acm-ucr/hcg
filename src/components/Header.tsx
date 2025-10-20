import Image from "next/image";
import StaticImageData from "@/public/work/clientWorkBG.webp";

const Header = () => {
  return (
    <div>
      <Image src={StaticImageData} alt="General Header" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="w-1/2 p-5 text-center text-4xl text-white">
          Meet the Team
        </h1>
      </div>
    </div>
  );
};

export default Header;
