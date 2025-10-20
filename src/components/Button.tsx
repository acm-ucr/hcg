import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
}

const Button = ({ text, href }: ButtonProps) => {
  return (
    <Link
      href={href}
      className="bg-hcg-gold text-hcg-white inline-block rounded-xl p-2 text-xl"
    >
      {text}
    </Link>
  );
};

export default Button;
