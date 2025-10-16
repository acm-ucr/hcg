import Link from "next/link";

interface ButtonProps {
  text: string; // the text shown on the button
  href: string; // where button links to
}

const Button = ({ text, href }: ButtonProps) => {
  return (
    <Link
      href={href}
      className="bg-hcg-gold text-hcg-white inline-block rounded-xl p-5 text-3xl font-extralight"
    >
      {text}
    </Link>
  );
};

export default Button;
