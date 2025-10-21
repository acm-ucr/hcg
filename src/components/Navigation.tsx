import navbarLinks from "@/data/NavbarData";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="from-hcg-black to-hcg-gold items-centeer flex h-24 justify-between bg-linear-to-r p-8">
      <div className="flex max-w-xl items-center justify-center">
        <img src="smallLogo.webp" alt="Logo" className="h-50 w-50" />
      </div>

      <div className="space-between text-hcg-white flex items-center gap-8 pr-8 text-xl">
        {navbarLinks.map(({ name, link }, index) => (
          <Link href={link} key={index}>
            {" "}
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
