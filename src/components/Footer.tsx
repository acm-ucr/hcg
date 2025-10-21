import Link from "next/link";
import { footerLinks } from "@/data/FooterLinks";

const Footer = () => {
  return (
    <div className="from-hcg-black to-hcg-gold flex items-end justify-between bg-linear-to-r px-6 py-4">
      <div className="text-hcg-white flex flex-col p-6">
        <div className="w-fit border-b-2 border-white pb-2">
          Highlander Consulting Group
        </div>
        <div className="space-y-3 pt-2">
          <div>900 University Ave, Riverside, CA 92521</div>
          <div>Est. 2022</div>
        </div>
      </div>
      <div className="flex space-x-4">
        {footerLinks.map(({ icon: Icon, url }, idx) => (
          <Link key={idx} href={url} target="_blank">
            <Icon className="h-8 w-8 text-white" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
