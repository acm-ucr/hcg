interface titleProps {
  title: string;
}

const Title = ({ title }: titleProps) => {
  return (
    <div className="text-hcg-pastel-brown translate-y-3/4 text-center text-5xl font-medium">
      {title}
    </div>
  );
};

export default Title;
