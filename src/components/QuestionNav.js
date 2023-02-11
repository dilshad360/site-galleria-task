import Profile from "./Profile";
import QuestionBtns from "./QuestionBtns";
import { useStateContext } from "@/lib/context";

export default function QuestionNav() {

  const { setStatus } = useStateContext();

  return (
    <div className="px-3">
      <Profile />
      <QuestionBtns/>
      <div className="mt-4 flex justify-center flex-col items-center">
        <div>
        <button className="border-2 border-neutral-200 px-4 py-1 rounded-3xl mx-1 w-32" onClick={()=>{setStatus("white")}}>Empty</button>
        <button className="border-2 border-blue-600 px-4 py-1 rounded-3xl mx-1 bg-blue-600 text-white w-32" onClick={()=>{setStatus("")}}>Submitted</button>
        </div>
        <div className="mt-1">
        <button className="border-2 px-4 py-1 rounded-3xl mx-1 bg-yellow-400 text-white w-32" onClick={()=>{setStatus("yellow")}}>Review</button>
        <button className="border-2 px-4 py-1 rounded-3xl mx-1 bg-red-600 text-white w-32" onClick={()=>{setStatus("red")}}>Unanswered</button>
        </div>
      </div>
    </div>
  );
}
