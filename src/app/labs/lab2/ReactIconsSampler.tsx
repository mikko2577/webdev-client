import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineAlarm } from "react-icons/md";
import { HiOutlineHeart } from "react-icons/hi2";
import { DiAndroid } from "react-icons/di";
import { DiApple } from "react-icons/di";



export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        <MdOutlineAlarm id="wd-ai-icon-md" className="text-4xl text-blue-600" />
        <HiOutlineHeart id="wd-ai-icon-hi2" className="text-4xl text-blue-600" />
        <DiAndroid id="wd-my-icon-1" className="text-4xl text-red-900" />
        <DiApple id="wd-my-icon-2" className="text-4xl text-green-900" />
      </div>
    </div>
  );
}