import Header from "@/components/Header";
import BoardMapping from "@/components/board/BoardMapping";

import workHeader from "@/public/work/clientWorkBG.webp";

const Board = () => {
  return (
    <div className="">
      <Header title="Meet the Team" headerPicture={workHeader} />
      <BoardMapping />
    </div>
  );
};

export default Board;
