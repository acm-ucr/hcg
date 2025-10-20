import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import Clients from "@/components/work/Clients";
import Solutions from "@/components/work/Solutions";
import ContactUs from "@/components/work/ContactUs";

import OurServicesImage from "@/public/work/ourServices.webp";

const Work = () => {
  return (
    <div>
      <Header />
      <InfoSection
        title="Our Services"
        text="Established in fall 2022 as the first and only consulting club on campus, Highlander Consulting Group is driven by a mission to offer members real-world experience through partnerships with diverse firms. We're dedicated to creating and delivering top-tier solutions that drive measurable results."
        image={OurServicesImage}
        imageAlt="Our Services"
      />
      <Clients />
      <Solutions />
      <ContactUs />
    </div>
  );
};

export default Work;
