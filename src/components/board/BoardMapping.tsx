import BoardCard from "./BoardCard";
import { boardInfo } from "@/data/BoardData";

const BoardMapping = () => {
  const topRow = boardInfo.slice(0, 3);
  const bottomRow = boardInfo.slice(3);
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 justify-items-center gap-40 md:grid-cols-3">
        {topRow.map((member, index) => (
          <BoardCard
            key={index}
            name={member.name}
            role={member.title}
            image={member.image}
            linkedin={member.linkedin}
          />
        ))}
      </div>

      <div className="mb-10 grid grid-cols-1 justify-items-center gap-40 md:grid-cols-2">
        {bottomRow.map((member, index) => (
          <BoardCard
            key={index + 3}
            name={member.name}
            role={member.title}
            image={member.image}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardMapping;
