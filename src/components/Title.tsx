"use client";
interface titleProps {
  title: string;
  color?: string;
  className?: string;
}

const Title = ({ title, color, className }: titleProps) => {
  return (
    <div
      className={`${color || "text-hcg-pastel-brown"} translate-y-1/4 py-4 text-center text-2xl font-medium md:text-3xl ${className || ""}`}
    >
      {title}
    </div>
  );
};

export default Title;
