import Header from "@/components/Header";
import Title from "@/components/Title";
import BoardMapping from "@/components/board/BoardMapping";

import workHeader from "@/public/work/clientWorkBG.webp";

const Board = () => {
  return (
    <div className="">
      <Header title="Meet the Team" headerPicture={workHeader} />
      <Title />
      <BoardMapping />
    </div>
  );
};

export default Board;
