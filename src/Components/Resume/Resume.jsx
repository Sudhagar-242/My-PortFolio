import ResumeCard from "./ResumeCard";
import ButtonAnimation from "../UI/Button";
import { LuDownload } from "react-icons/lu";

function Resume() {
  return (
    <section
      id="Resume"
      className="w-full md:h-[100svh] bg-coolblue-300/10 text-coolblue-300"
    >
      <h1 className="text-7xl text-center hiderzoom text-coolblue-500 pt-8">
        Resume
      </h1>
      <div className="w-full flex h-full flex-col md:flex-row">
        <div className=" flex-2/6 relative h-[60%] mx-[5%] mt-[5%]">
          <div className="m-auto mt-[5%] h-full w-fit group relative rounded-lg">
            <img
              src="/SUDHAGAR RESUME.jpg"
              alt="resume"
              className=" h-full relative rounded-lg hiderzoomquick"
            />
            <ResumeCard />
          </div>
        </div>

        <div className="flex-4/6 py-[8%] px-[3%] flex flex-col">
          <p className="flex-4/6 pt-[10%] text-2xl tracking-wider font-zilla font-[300] hiderup">
            I’m a passionate front-end developer with a strong foundation in
            HTML, CSS, JavaScript, and modern frameworks like React. As a
            fresher, I’ve built several personal and academic projects to
            sharpen my skills and demonstrate my ability to create responsive,
            user-friendly web interfaces.
          </p>
          <div className="flex-2/6">
            <ButtonAnimation
              className="flex-2/6 text-coolblue-500 bg-coolblue-100/40 w-[50svh] md:w-2/5 h-fit m-auto text-2xl hiderzoomquick"
              iconstyle="group-hover:text-coolblue-100 pl-4"
              typestyle=""
              scrollcolor={"group-hover:bg-coolblue-300"}
              icon={<LuDownload />}
              type={"Download"}
              href="/SUDHAGAR RESUME.pdf"
              download
            >
              Download
            </ButtonAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
