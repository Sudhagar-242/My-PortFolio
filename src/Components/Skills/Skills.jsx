import React, { useState } from "react";
import Skill from "./skill";
import SkillSelector from "./SkillSelector";
import {
  DiHtml5,
  DiCss3Full,
  DiReact,
  DiGithubBadge,
  DiJsBadge,
  DiNodejsSmall,
} from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss, SiVercel } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

const LangSkills = [
  { icon: <DiHtml5 />, tech: "HTML" },
  { icon: <DiCss3Full />, tech: "CSS" },
  { icon: <DiJsBadge />, tech: "JavaScript" },
  { icon: <BiLogoTypescript />, tech: "TypeScript" },
];

const FrameSkills = [
  { icon: <DiReact />, tech: "React" },
  { icon: <DiNodejsSmall />, tech: "Node JS" },
  { icon: <SiTailwindcss />, tech: "Tailwind CSS" },
];

const ToolsSkills = [
  { icon: <DiGithubBadge />, tech: "Git" },
  { icon: <VscVscodeInsiders />, tech: "VS Code" },
  { icon: <SiVercel />, tech: "Vercel" },
];

function Skills() {
  const [WhichSet, setWhichSet] = useState("Languages");

  function TechClicked(data) {
    setWhichSet(data);
  }

  return (
    <section
      className="p-6 bg-coolblue-400/70 text-coolblue-200 h-[50svh] pt-12 pb-14 rounded-lg6"
      id="Skills"
    >
      <h1 className="text-3xl font-bold mb-6 text-center">Skills</h1>
      {WhichSet === "Languages" && <Skill skills={LangSkills} />}
      {WhichSet === "Frameworks" && <Skill skills={FrameSkills} />}
      {WhichSet === "Tools" && <Skill skills={ToolsSkills} />}
      <SkillSelector Selected={WhichSet} OnTechSelection={TechClicked} />
    </section>
  );
}

export default Skills;
