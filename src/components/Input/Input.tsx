import Note from "../Note/Note";
import "./input.css";
// hooks
import { useState, useRef } from "react";
let Input = () => {
  let inputRef: any = useRef(null);
  let [tasks, setTask]: any = useState([]);

  return (
    <>
      <div id="container">
        <div className="border-2 border-red-500 w-[60rem] flex justify-between rounded-lg">
          <input
            ref={inputRef}
            type="text"
            id=""
            placeholder="This is note"
            className="outline-none text-[2rem] w-[94%] rounded-lg"
            style={{ textIndent: "30px" }}
          />
          <button
            onClick={() => {
              if (inputRef.current.value.length > 0) {
                setTask([...tasks, inputRef.current.value]);
                inputRef.current.value = "";
                console.log(tasks);
              }
            }}
            className=" bg-green-500 p-3 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 1)" }}
            >
              <path d="m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z"></path>
            </svg>
          </button>
        </div>

        {tasks.map((e, i) => {
          return <Note key={i}>{e}</Note>;
        })}
      </div>
    </>
  );
};

export default Input;
