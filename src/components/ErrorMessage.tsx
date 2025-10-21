import Button from "@/components/Button";

const ErrorMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
      <div className="text-[120px] font-bold text-(--color-hcg-pastel-brown) sm:text-[300px]">
        404
      </div>
      <div className="p-6 text-2xl sm:text-3xl">Page Not Found</div>
      <Button text="Back To Home" href="/" />
    </div>
  );
};

export default ErrorMessage;
