import Button from "@/components/Button";

const ErrorMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center h-[75vh]">
      <div className="text-8xl font-bold text-hcg-pastel-brown">
        404
      </div>
      <div className="p-6 text-2xl">Page Not Found</div>
      <Button text="Back To Home" href="/" />
    </div>
  );
};

export default ErrorMessage;
