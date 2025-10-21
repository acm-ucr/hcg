import Header from "@/components/Header";
import AlumniMapping from "@/components/alumni/AlumniMapping";

import workHeader from "@/public/alumni/alumniBG.webp";

const Alumni = () => {
  return (
    <div>
      <Header title="Alumni" headerPicture={workHeader} />
      <AlumniMapping />
    </div>
  );
};

export default Alumni;
