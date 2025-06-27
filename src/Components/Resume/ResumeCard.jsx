import ButtonAnimation from "../UI/Button";
import { FaEye } from "react-icons/fa";

function ResumeCard() {
  return (
    <div className="hidden group-hover:block group-hover:animate-pulse absolute top-0 left-0 w-full h-full transition-all duration-1000 delay-100 ease-in-out rounded-sm  bg-coolblue-100">
      <div className="flex flex-col justify-evenly items-center bg-coolblue-2s00/90 h-full w-full">
        <p className="text-2xl font-nue font-medium tracking-widest text-coolblue-500 ">
          See my resume in New Tab
        </p>
        <a
          className="animate-bounce h-8 w-8 bg-coolblue-200 text-coolblue-400 rounded-lg p-2 hover:bg-coolblue-500 hover:text-coolblue-100"
          href="/SUDHAGAR RESUME.pdf"
          target="_blank"
        >
          <FaEye />
        </a>
      </div>
    </div>
  );
}

export default ResumeCard;
