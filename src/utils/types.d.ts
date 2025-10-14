import { StaticImageData } from "next/image";

export interface InfoSectionProps {
  title: string;
  text: string;
  image: StaticImageData;
  imageAlt: string;
}
