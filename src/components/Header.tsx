import Image from "next/image";
import StaticImageData from "@/public/work/clientWorkBG.webp";

const Header = () => {
  const textStyle = {
    position: "absolute",
    top: "75%",
    left: "36.5%",
    color: "white",
    fontSize: "35pt",
  };

  return (
    <div>
      <Image src={StaticImageData} alt="General Header"></Image>
      <div style={textStyle}>Meet the Team</div>
    </div>
  );
};

export default Header;
