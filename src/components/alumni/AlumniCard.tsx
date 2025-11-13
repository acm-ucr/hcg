import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export interface AlumniCardProps {
  name: string;
  role: Uppercase<string>;
  image: StaticImageData;
  currentOccupation?: string;
  linkedin: string;
}

const AlumniCard = ({
  image,
  name,
  role,
  currentOccupation,
  linkedin,
}: AlumniCardProps) => {
  return (
    <div className="flex h-[55vh] flex-col items-center p-4 text-center md:h-[45vh] xl:h-full">
      <Image src={image} alt={name} className="mb-4 rounded-full" />

      <div className="mb-2 text-xl">{name}</div>

      <div className="text-hcg-dark-gray mb-2 font-normal">{role}</div>

      <div className="text-hcg-dark-gray mb-4">{currentOccupation}</div>

      <Link href={linkedin} target="_blank">
        <FaLinkedin className="text-hcg-gold h-8 w-8" />
      </Link>
    </div>
  );
};

export default AlumniCard;
