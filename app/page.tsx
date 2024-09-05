import Image from "next/image";
import DatePicker from "./components/DatePicker";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
    {/* <h1>Hello World</h1> */}
    <DatePicker />
    </div>
  );
}
