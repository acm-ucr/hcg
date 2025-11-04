import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
}

const Button = ({ text, href }: ButtonProps) => {
  return (
    <Link
      href={href}
      className="bg-hcg-gold text-hcg-white inline-block rounded-md px-4 py-2 text-sm font-thin"
    >
      {text}
    </Link>
  );
};

export default Button;
