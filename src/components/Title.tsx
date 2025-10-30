interface titleProps {
  title: string;
}

const Title = ({ title }: titleProps) => {
  return (
    <div className="text-hcg-pastel-brown translate-y-1/4 text-center text-5xl font-medium py-4">
      {title}
    </div>
  );
};

export default Title;
