import MeetTheTeam from "@/components/board/MeetTheTeam";
import Header from "@/components/Header";
import BoardMapping from "@/components/board/BoardMapping";

const Board = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <MeetTheTeam />
      <Header />
      <BoardMapping />
    </div>
  )
};

export default Board;
