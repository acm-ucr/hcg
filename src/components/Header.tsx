import Image, { StaticImageData } from "next/image";

interface HeaderProps {
  title: string;
  headerPicture: StaticImageData;
}

const Header = ({ title, headerPicture }: HeaderProps) => {
  return (
    <div className="relative h-[50vh] w-full">
      <Image
        src={headerPicture}
        alt="General Header"
        fill
        className="object-cover opacity-60"
        priority
      />
      <div className="absolute top-1/2 w-full -translate-y-1/2 p-5 text-center text-5xl font-medium text-white">
        {title}
      </div>
    </div>
  );
};

export default Header;
