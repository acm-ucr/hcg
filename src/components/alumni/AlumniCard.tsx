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
    <div className="flex w-1/3 flex-col items-center p-6 text-center">
      <Image src={image} alt={name} className="mx-auto mb-4 rounded-full" />

      <div className="mb-2 text-center text-xl">{name}</div>

      <div className="text-hcg-dark-gray mb-2 text-center font-normal">
        {role}
      </div>

      <div className="text-hcg-dark-gray mb-4 basis-6">{currentOccupation}</div>

      <Link href={linkedin} target="_blank">
        <FaLinkedin className="text-hcg-gold h-8 w-8" />
      </Link>
    </div>
  );
};

export default AlumniCard;
