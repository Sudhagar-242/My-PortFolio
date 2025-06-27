import EachSkill from "./EachSkill";

function Skill(props) {
  return (
    <div className="flex w-full justify-evenly flex-wrap h-5/12 items-center">
      {props.skills.map((skill) => (
        <EachSkill
          icon={skill.icon}
          tech={skill.tech}
          key={Math.random() * 10}
        />
      ))}
    </div>
  );
}

export default Skill;
