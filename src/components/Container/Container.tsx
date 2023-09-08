import "./container.css";
// components
import { Input, TodoContainer } from "../../components";
export default function Container() {
  return (
    <div className="border-2 border-red-500 h-screen flex flex-col items-center">
      <Input></Input>
      <TodoContainer notes={"s"} />
    </div>
  );
}
