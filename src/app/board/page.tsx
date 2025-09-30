import MeetTheTeam from "@/components/board/MeetTheTeam";
import Header from "@/components/Header";
import BoardCard from "@/components/board/BoardCard";

const Board = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <MeetTheTeam />
      <Header />
      <BoardCard />
    </div>
  )
};

export default Board;
