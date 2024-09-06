import Image from "next/image";
import DatePicker from "./components/MyDatePicker";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center font-suse">
    <DatePicker />
    </div>
  );
}
