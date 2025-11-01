import Image, { StaticImageData } from "next/image";

export interface InfoSectionProps {
    title: string;
    text: string;
    image: StaticImageData;
    imageAlt: string;
}

const InfoSection = ({ title, text, image, imageAlt }: InfoSectionProps) => {
    return (
        <div>
            <div className="mx-auto flex w-5/6 flex-row items-center justify-center py-4 md:py-8">
                <div className="flex md:w-1/2 flex-col justify-center space-y-3 md:space-y-6">
                    <div className="text-hcg-pastel-brown text-center md:text-left text-xl sm:text-2xl med:text-3xl font-bold">{title}</div>
                    <p className="flex text-center md:text-left md:w-3/4 items-center justify-center text-sm sm:text-lg md:text-xl font-normal">
                        {text}
                    </p>
                </div>
                <div className="hidden md:flex h-auto w-1/2 justify-center">
                    <Image src={image} alt={imageAlt} />
                </div>

            </div>
            <div className="md:hidden w-5/6 mx-auto mb-5">
                <Image src={image} alt={imageAlt} />
            </div>
        </div>
    );
};

export default InfoSection;
