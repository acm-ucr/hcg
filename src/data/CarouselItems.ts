import AlaskaAirlines from "@/public/about/logos/AlaskaAirlines.webp";
import alinea from "@/public/about/logos/alinea.webp";
import AMD from "@/public/about/logos/AMD.webp";
import BofA from "@/public/about/logos/BankofAmerica.webp";
import BeReal from "@/public/about/logos/BeReal.webp";
import BlackRock from "@/public/about/logos/BlackRock.webp";
import Boeing from "@/public/about/logos/Boeing.webp";
import CapitalGroup from "@/public/about/logos/CapitalGroup.webp";
import Deloitt from "@/public/about/logos/Deloitte.webp";
import Disney from "@/public/about/logos/Disney.webp";
import EY from "@/public/about/logos/EY.webp";
import JPMorgan from "@/public/about/logos/JPMorgan.webp";
import KPMG from "@/public/about/logos/KPMG.webp";
import Nasa from "@/public/about/logos/NASA.webp";
import Nvidia from "@/public/about/logos/Nvidia.webp";
import Oaktree from "@/public/about/logos/Oaktree.webp";
import Paramount from "@/public/about/logos/Paramount.webp";
import Pepsico from "@/public/about/logos/PepsiCo.webp";
import PWC from "@/public/about/logos/pwc.webp";
import ServiceNow from "@/public/about/logos/servicenow.webp";
import Tesla from "@/public/about/logos/Tesla.webp";
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
  { name: "CapitalGroup", icon: CapitalGroup },
  { name: "Deloitt", icon: Deloitt },
  { name: "Disney", icon: Disney },
  { name: "EY", icon: EY },
  { name: "JPMorgan", icon: JPMorgan },
  { name: "KPMG", icon: KPMG },
  { name: "Nasa", icon: Nasa },
  { name: "Nvidia", icon: Nvidia },
  { name: "Oaktree", icon: Oaktree },
  { name: "Paramount", icon: Paramount },
  { name: "Pepsico", icon: Pepsico },
  { name: "PWC", icon: PWC },
  { name: "ServiceNow", icon: ServiceNow },
  { name: "Tesla", icon: Tesla },
];
