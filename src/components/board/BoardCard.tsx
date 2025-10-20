import Image, { StaticImageData } from "next/image";

export interface BoardCardProps {
  name: string;
  role: string;
  image: StaticImageData;
  linkedin: string;
  image1: StaticImageData;
}

const BoardCard = ({ name, role, image, linkedin, image1 }: BoardCardProps) => {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white p-6">
      <Image src={image} alt={name} className="mx-auto mb-4 rounded-full" />

      <div className="text-center text-xl font-semibold">{name}</div>

      <div className="mb-4 text-center text-gray-600">{role}</div>

      <a href={linkedin}>
        <Image src={image1} alt="LinkedIn" />
      </a>
    </div>
  );
};

export default BoardCard;
