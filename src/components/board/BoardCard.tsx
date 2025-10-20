import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export interface BoardCardProps {
  name: string;
  role: string;
  image: StaticImageData;
  linkedin: string;

}

const BoardCard = ({name, role, image, linkedin}: BoardCardProps) => {
  return(
   
   <div className="rounded-lg p-6 flex flex-col items-center">
        <Image src={image} alt={name}  className="rounded-full mx-auto mb-4" />
      
      <div className="text-xl font-semibold text-center">{name}</div>

      <div className="text-gray-600 text-center mb-4">{role}</div>

      <Link href={linkedin} target="_blank">
        <FaLinkedin className="text-hcg-gold width:40px height:40px"/>
      </Link>
</div>
  );
};


export default BoardCard;


