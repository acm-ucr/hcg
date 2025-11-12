"use client";
import AlumniCard from "@/components/alumni/AlumniCard";
import { AlumniData } from "@/data/AlumniData";

const AlumniMapping = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center">
      {AlumniData.map((member, index) => (
        <div key={index} className="flex w-1/2 justify-center md:w-1/3">
          <AlumniCard
            key={index}
            name={member.name}
            role={member.role}
            currentOccupation={member.currentOccupation}
            image={member.image}
            linkedin={member.linkedin}
          />
        </div>
      ))}
    </div>
  );
};

export default AlumniMapping;
