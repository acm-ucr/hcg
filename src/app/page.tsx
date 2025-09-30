import AboutUs from "@/components/home/AboutUs";
import OurTeam from "@/components/home/OurTeam";
import Carousel from "@/components/home/LogoCarousel";
import Clients from "@/components/home/Clients";
import MailingList from "@/components/home/MailingList";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <AboutUs />
      <OurTeam />
      <Carousel />
      <Clients />
      <MailingList />
    </div>
  );
};

export default Home;
