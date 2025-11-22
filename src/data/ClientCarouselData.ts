import alinea from "@/public/work/logos/alinea.webp";
import BeReal from "@/public/work/logos/BeReal.webp";
import bookit from "@/public/work/logos/bookit.webp";
import Capturely from "@/public/work/logos/Capturely.webp";
import EdgeSoundResearch from "@/public/work/logos/EdgeSoundResearch.webp";
import EthosHealth from "@/public/work/logos/EthosHealth.webp";
import Quokka from "@/public/work/logos/Quokka.webp";
import uruit from "@/public/work/logos/uruit.webp";
import { StaticImageData } from "next/image";

interface ClientCarouselDataItem {
  name: string;
  icon: StaticImageData;
}

export const clientCarouselData: ClientCarouselDataItem[] = [
  { name: "alinea", icon: alinea },
  { name: "BeReal", icon: BeReal },
  { name: "bookit", icon: bookit },
  { name: "Capturely", icon: Capturely },
  { name: "EdgeSoundResearch", icon: EdgeSoundResearch },
  { name: "EthosHealth", icon: EthosHealth },
  { name: "Quokka", icon: Quokka },
  { name: "uruit", icon: uruit },
];
