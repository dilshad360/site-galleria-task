import SubjectNav from "./SubjectNav";
import Qimg from "../assets/qimg.jpg";
import Image from "next/image";
import { useStateContext } from "@/lib/context";

export default function Question() {

  const { setStatus } = useStateContext();

  return (
    <div>
      <div className="flex justify-between">
        <h4 className="text-red-500 font-semibold text-xl">
          TIME LEFT : 07:51
        </h4>
        <SubjectNav />
      </div>
      <div className="border-2 p-6 rounded-2xl mt-4 flex">
        <div className="flex-1">
          <h3 className="text-lg text-neutral-600">Question Instruction</h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
        <div className="w-1 bg-neutral-300 rounded-lg mx-4"></div>
        <div className="flex-1">
          <h3 className="text-lg text-neutral-600">Question Instruction</h3>
          <p className="mt-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </p>
          <div className="mt-2 flex">
            <div>
              <div>
                <input className="mx-2" type="radio"></input>
                <label>Option 1</label>
              </div>
              <div>
                <input className="mx-2" type="radio"></input>
                <label>Option 2</label>
              </div>
              <div>
                <input className="mx-2" type="radio"></input>
                <label>Option 3</label>
              </div>
              <div>
                <input className="mx-2" type="radio"></input>
                <label>Option 4</label>
              </div>
            </div>
            <div className="w-40 mx-10">
                <Image className="border-2 rounded-xl" src={Qimg} alt="question_image" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-2">
        <button className="border-2 border-blue-600 px-4 py-1 rounded-3xl mx-1 bg-blue-600 text-white w-32">Previous</button>
        <button className="border-2 border-blue-600 px-4 py-1 rounded-3xl mx-1 bg-blue-600 text-white w-32" onClick={()=>{setStatus("green")}}>Next</button>
      </div>
    </div>
  );
}
