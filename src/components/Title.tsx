"use client";
interface titleProps {
  title: string;
  color?: string;
  className?: string;
}

const Title = ({ title, color, className }: titleProps) => {
  return (
    <div
      className={`${color || "text-hcg-pastel-brown"} py-3 text-center text-3xl font-medium md:text-4xl ${className || ""}`}
    >
      {title}
    </div>
  );
};

export default Title;
