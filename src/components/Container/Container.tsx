import "./container.css";
// components
import { Input } from "../../components";

export default function Container() {
  return (
    <div className="border-2 border-red-500 h-screen flex justify-center">
      <Input />
    </div>
  );
}
