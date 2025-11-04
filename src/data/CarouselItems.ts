import AlaskaAirlines from "@/public/about/logos/AlaskaAirlines.webp";
import alinea from "@/public/about/logos/alinea.webp";
import AMD from "@/public/about/logos/AMD.webp";
import BofA from "@/public/about/logos/BankofAmerica.webp";
import BeReal from "@/public/about/logos/BeReal.webp";
import BlackRock from "@/public/about/logos/BlackRock.webp";
import Boeing from "@/public/about/logos/Boeing.webp";
import { StaticImageData } from "next/image";

interface CarouselDataItem {
  name: string;
  icon: StaticImageData;
}

export const carouselData: CarouselDataItem[] = [
  { name: "AlaskaAirlines", icon: AlaskaAirlines },
  { name: "alinea", icon: alinea },
  { name: "AMD", icon: AMD },
  { name: "BofA", icon: BofA },
  { name: "BeReal", icon: BeReal },
  { name: "BlackRock", icon: BlackRock },
  { name: "Boeing", icon: Boeing },
];
