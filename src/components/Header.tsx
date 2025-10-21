import Image, { StaticImageData } from "next/image";

interface HeaderProps {
  title: string;
  headerPicture: StaticImageData;
}

const Header = ({ title, headerPicture }: HeaderProps) => {
  return (
    <div className="flex">
      <Image
        src={headerPicture}
        alt="General Header"
        className="h-[75vh] opacity-60"
      />
      <div className="absolute top-[35vh] w-full justify-center p-5 text-center text-5xl font-medium text-white opacity-100">
        {title}
      </div>
    </div>
  );
};

export default Header;
