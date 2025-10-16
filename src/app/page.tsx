import LandingHeader from "@/components/home/LandingHeader";
import InfoSection from "@/components/InfoSection";
import OurTeam from "@/components/home/OurTeam";
import Carousel from "@/components/home/LogoCarousel";
import Clients from "@/components/home/Clients";
import MailingList from "@/components/home/MailingList";
import Button from "@/components/Button";

const Home = () => {
  return (
    <div>
      <LandingHeader />
      <InfoSection />
      <OurTeam />
      <Carousel />
      <Clients />
      <MailingList />
      <Button text="Back to Home" href="hcg-website/src/app/page.tsx" />
    </div>
  );
};

export default Home;
