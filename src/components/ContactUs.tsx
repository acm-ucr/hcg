import Button from "@/components/Button";

const ContactUs = () => {
  return (
    <div className="flex min-h-100 flex-col items-center justify-center bg-(--color-hcg-black) text-center text-white">
      <div className="flex h-full w-full flex-1 flex-col items-center justify-center bg-[url(../../public/work/contactUsBG.png)] bg-cover bg-center p-6">
        <p className="mb-6 p-6 text-[20px] sm:w-3/4 sm:text-3xl">
          Driven by a passion for consulting, a dedication to transformative
          collaborations, and experience from top firms, we're always eager to
          tackle fresh challenges.
        </p>
        <Button text="Learn More" href="/work"></Button>
      </div>
    </div>
  );
};

export default ContactUs;
