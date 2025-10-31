interface titleProps {
  title: string;
  color?: string;
}

const Title = ({ title, color }: titleProps) => {
  return (
    <div
      className={`${color || "text-hcg-pastel-brown"} translate-y-1/4 py-4 text-center text-5xl font-medium`}
    >
      {title}
    </div>
  );
};

export default Title;
