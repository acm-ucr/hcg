import Button from "@/components/Button";
import contactUsBG from "@/public/work/contactUsBG.webp";
import Image from "next/image";

interface ContactUsProps {
  buttonText: string;
  buttonHref: string;
  text: string;
}

const ContactUs = ({ buttonHref, buttonText, text }: ContactUsProps) => {
  return (
    <div className="bg-hcg-black relative flex min-h-100 flex-col items-center justify-center text-center text-white">
      <Image
        src={contactUsBG}
        alt="Gold Stripes"
        objectFit="cover"
        className="absolute z-0 h-full w-full [-webkit-user-drag:none]"
      />
      <p className="z-20 mb-6 w-4/5 p-6 text-[20px] md:w-3/4 md:text-3xl">
        {text}
      </p>
      <div className="z-20">
        <Button text={buttonText} href={buttonHref} />
      </div>
    </div>
  );
};

export default ContactUs;
