import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export interface BoardCardProps {
  name: string;
  role: string;
  image: StaticImageData;
  linkedin: string;
}

const BoardCard = ({ name, role, image, linkedin }: BoardCardProps) => {
  return (
    
    <div className="w-1/3 flex flex-col items-center text-center p-6">
      <Image src={image} alt={name} className="mx-auto mb-4 rounded-full" />

      <div className="text-center text-xl font-semibold">{name}</div>

      <div className="text-hcg-dark-gray mb-4 text-center">{role}</div>

      <Link href={linkedin} target="_blank">
        <FaLinkedin className="text-hcg-gold h-8 w-8" />
      </Link>
    </div>
  );
};

export default BoardCard;
