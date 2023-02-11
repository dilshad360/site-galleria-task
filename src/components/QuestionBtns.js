import { useState } from "react"
import { useStateContext } from "@/lib/context";

export default function QuestionBtns() {

  const { status } = useStateContext();

    return(
        <div className="border-2 p-4 rounded-2xl mt-2">
        <h4>Questions</h4>
        <div className="mt-2">
          <div className="flex">
            <button className="border-2 rounded-full w-8 h-8 m-1">1</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">2</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">3</button>
            <button className={`border-2 rounded-full w-8 h-8 m-1 text-white bg-blue-600 ${status == "red" && "bg-red-400"} ${status == "green" && "bg-green-400"} ${status == "yellow" && "bg-yellow-400"} ${status == "white" && "bg-white text-black"}`}>
              4
            </button>
            <button className="border-2 rounded-full w-8 h-8 m-1">5</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">6</button>
          </div>
          <div className="flex">
            <button className="border-2 rounded-full w-8 h-8 m-1">1</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">2</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">3</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">4</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">5</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">6</button>
          </div>
          <div className="flex">
            <button className="border-2 rounded-full w-8 h-8 m-1">1</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">2</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">3</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">4</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">5</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">6</button>
          </div>
          <div className="flex">
            <button className="border-2 rounded-full w-8 h-8 m-1">1</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">2</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">3</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">4</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">5</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">6</button>
          </div>
          <div className="flex">
            <button className="border-2 rounded-full w-8 h-8 m-1">1</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">2</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">3</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">4</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">5</button>
            <button className="border-2 rounded-full w-8 h-8 m-1">6</button>
          </div>
       
        </div>
      </div>
    )
}