import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IconType } from "react-icons";

interface FooterLink {
  icon: IconType;
  url: string;
}

export const footerLinks: FooterLink[] = [
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/ucrhcg/",
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/company/highlander-consulting-group-hcg/",
  },
];
