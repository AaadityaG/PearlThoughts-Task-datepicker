import Image from "next/image";
import RecurringDatePicker from "./components/MyDatePicker";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-12 ">
    <RecurringDatePicker />
    <div className="flex gap-5 ">

    <a href="https://github.com/AaadityaG/PearlThoughts-Task-datepicker" target="_blanck" className="text-blue-400 opacity-40">Click here to see Code on Github</a>
    <a href="https://youtu.be/6S-yAzUMxWA" target="_blanck" className="text-blue-400 opacity-40">Click here to see the video</a>

    </div>
    </div>
  );
}
