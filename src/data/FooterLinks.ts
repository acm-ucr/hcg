import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons";

interface FooterLink {
  name: string;
  icon: IconType;
  url: string;
}

export const footerLinks: FooterLink[] = [
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "",
  },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    url: "",
  },
];
