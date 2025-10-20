import LandingHeader from "@/components/home/LandingHeader";
import InfoSection from "@/components/InfoSection";
import OurTeam from "@/components/home/OurTeam";
import Carousel from "@/components/home/LogoCarousel";
import Clients from "@/components/home/Clients";
import MailingList from "@/components/home/MailingList";

const Home = () => {
  return (
    <div>
      <LandingHeader />
      <InfoSection />
      <OurTeam />
      <Carousel />
      <Clients />
      <MailingList />
    </div>
  );
};

export default Home;
