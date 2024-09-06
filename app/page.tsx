import Image from "next/image";
import RecurringDatePicker from "./components/MyDatePicker";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-12 ">
    <RecurringDatePicker />
    <a href="https://github.com/AaadityaG/PearlThoughts-Task-datepicker" target="_blanck" className="text-blue-400 opacity-20">Click here ot see Code on Github</a>
    </div>
  );
}
