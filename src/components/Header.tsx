import Image, { StaticImageData } from "next/image";

interface HeaderProps {
  title: string;
  headerPicture: StaticImageData;
}

const Header = ({ title, headerPicture }: HeaderProps) => {
  return (
    <div className="relative h-[28vh] w-full md:h-[38vh] xl:h-[52vh]">
      <Image
        src={headerPicture}
        alt="General Header"
        fill
        className="object-cover object-top opacity-60"
        priority
      />
      <div className="absolute top-1/2 w-full -translate-y-1/2 p-5 text-center text-3xl font-medium text-white md:text-5xl xl:text-6xl">
        {title}
      </div>
    </div>
  );
};

export default Header;
