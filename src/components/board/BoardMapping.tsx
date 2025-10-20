import BoardCard from "./BoardCard";
import Alex from "@/public/board/AlexSin.webp";

const BoardMapping = () => {
  return (
    <div>
      <BoardCard
        name="Aram Narang"
        role="CO-PRESIDENT"
        image={Alex}
        linkedin="https: www.linkedin.com/in/aram-narang"
        image1={Alex}
      />
    </div>
  );
};

export default BoardMapping;
