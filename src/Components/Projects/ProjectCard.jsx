import OnProject from "./OnProject";

function ProjectCard(props) {
  return (
    <div className="md:w-[20rem] md:h-[15rem] w-full shadow-lg rounded-lg flex flex-col md:inline-block md:overflow-hidden relative group border-coolblue-300 border-2 hiderup">
      <img
        className="w-full h-full object-cover group-hover:scale-115 transition-all duration-500"
        src={props.image}
        alt="Project image"
      />
      <OnProject
        title={props.title}
        description={props.description}
        live={props.live}
        git={props.git}
        tech={props.tech}
      />
    </div>
  );
}

export default ProjectCard;
