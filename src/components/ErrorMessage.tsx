import Button from "@/components/Button";

const ErrorMessage = () => {
  return (
    <div className="flex h-[75vh] flex-col items-center justify-center p-6 text-center">
      <div className="text-hcg-pastel-brown text-8xl font-bold">404</div>
      <div className="p-6 text-2xl">Page Not Found</div>
      <Button text="Back To Home" href="/" />
    </div>
  );
};

export default ErrorMessage;
