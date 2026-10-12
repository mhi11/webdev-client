import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { Si1001Tracklists } from "react-icons/si";
import { HiOutlineScale } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { HiOutlineHeart } from "react-icons/hi2";

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
      </div>
      <br />
      <div className="flex gap-3 text-4xl text-blue-600">
        <MdEmail />
        <HiOutlineHeart />
      </div>
      <br />
      <div className="flex gap-1 text-8xl">
        <Si1001Tracklists />
        <HiOutlineScale />
      </div>
    </div>
  );
}