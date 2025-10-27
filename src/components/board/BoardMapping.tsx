import BoardCard from "./BoardCard";
import { boardInfo } from "@/data/BoardData";

const BoardMapping = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center">
      {boardInfo.map((member, index) => (
        <BoardCard
          key={index}
          name={member.name}
          role={member.title}
          image={member.image}
          linkedin={member.linkedin}
        />
      ))}
    </div>
  );
};

export default BoardMapping;
