import OnProjectTech from "./OnProjectTech";
import { DiGithubBadge } from "react-icons/di";
import { BsFillRocketFill } from "react-icons/bs";

function OnProject(props) {
  const Colors = ["blue", "green", "purple", "red"];

  return (
    <div className="md:hidden flex w-full  h-full p-6 pt-1 md:absolute top-0 left-0 group-hover:flex flex-col bg-coolblue-100/90">
      <h2 className="text-xl text-center flex-2/12 font-semibold w-full text-white group-hover:text-coolblue-500 mb-1">
        {props.title}
      </h2>
      <p className="font-zilla font-medium tracking-wider w-full flex-6/12 text-sm group-hover:text-coolblue-500">
        {props.description}
      </p>

      <div className="mt-2 w-full flex-2/12">
        {props.tech.map((tech, i) => (
          <OnProjectTech
            key={Math.random()}
            id={Math.random() * 100}
            className={`inline-block  bg-${Colors[i]}-100  text-${Colors[i]}-800 text-[0.8rem] px-2 py-1 rounded-full mr-2`}
          >
            {tech}
          </OnProjectTech>
        ))}
      </div>

      <div className="mt-3 flex justify-between items-center w-full flex-2/12">
        <a
          href={props.live}
          className="text-2xl text-blue-600 hover:rotate-45 transition-all duration-300 delay-150"
        >
          <BsFillRocketFill />
        </a>
        <a
          href={props.git}
          className="text-3xl text-coolblue-300 hover:text-coolblue-500"
        >
          <DiGithubBadge />
        </a>
      </div>
    </div>
  );
}

export default OnProject;
