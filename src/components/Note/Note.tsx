import "./note.css";
// hooks
import { useRef, useId } from "react";

export default function Note(props) {
  let taskRef: any = useRef(null);
  let Id = useId();
  return (
    <div
      id={Id}
      ref={taskRef}
      className=" bg-yellow-500 items-center rounded-md font-medium 
                 pl-10 flex justify-between h-[4rem] text-[1.5rem] capitalize pr-3 my-6"
    >
      {props.children}
      {/* ======================================================================== */}
      {/* onclick event */}
      {/* ======================================================================== */}
      <button
        onClick={() => {
          let thisTask = document.getElementById(
            taskRef.current.id
          ) as HTMLDivElement;
          thisTask.remove();
        }}
        className="bg-yellow-500 h-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          style={{ fill: " red" }}
        >
          <path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"></path>
          <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path>
        </svg>
      </button>
    </div>
  );
}
