import React from "react";
import Link from "next/link";
import { footerLinks } from "@/data/FooterLinks";

const Footer = () => {
  return (
    <div className="footer-gradient flex items-end justify-between bg-gradient-to-r px-6 py-4 font-hcg-alt">
      <div className="text-hcg-white flex flex-col p-6">
        <div>Highlander Consulting Group</div>
        <hr className="bg-hcg-white my-2 h-0.5 w-3/4"></hr>
        <div className="space-y-3">
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
