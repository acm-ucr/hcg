// board data here
import { StaticImageData } from "next/image";
import AramImg from "@/public/board/AramNarang.webp";
import FarisImg from "@/public/board/FarisMohammady.webp";
import AlexImg from "@/public/board/AlexSin.webp";
import HarnoorImg from "@/public/board/HarnoorKaur.webp";
import MilanImg from "@/public/board/MilanMohamed.webp";
import AnanyaImg from "@/public/board/AnanyaGowrishankar.webp";

interface BoardInfoProps {
  name: string;
  title: string;
  image: StaticImageData;
  linkedin: string;
}

export const boardInfo: BoardInfoProps[] = [
  {
    name: "Aram Narang",
    title: "CO-PRESIDENT",
    image: AramImg,
    linkedin: "https://www.linkedin.com/in/aram-narang/",
  },
  {
    name: "Faris Mohammady",
    title: "CO-PRESIDENT",
    image: FarisImg,
    linkedin: "https://www.linkedin.com/in/faris-mohammady/",
  },
  {
    name: "Alex Sin",
    title: "INTERNAL VICE PRESIDENT",
    image: AlexImg,
    linkedin: "https://www.linkedin.com/in/alexsin605/",
  },
  {
    name: "Harnoor Kaur",
    title: "EXTERNAL VICE PRESIDENT",
    image: HarnoorImg,
    linkedin: "https://www.linkedin.com/in/harnoor-kaurr/",
  },
  {
    name: "Milan Mohamed",
    title: "DIRECTOR OF MARKETING",
    image: MilanImg,
    linkedin: "https://www.linkedin.com/in/milan-mohamed/",
  },
  {
    name: "Ananya Gowrishankar",
    title: "HEAD OF CONSULTING",
    image: AnanyaImg,
    linkedin: "https://www.linkedin.com/in/ananya-gowrishankar-/",
  },
];
