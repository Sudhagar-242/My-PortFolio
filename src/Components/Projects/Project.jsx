import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Figma to WebDesign",
    description:
      "Translated a Figma UI design into code using semantic HTML and custom CSS. Emphasized design precision, maintaining exact spacing, typography, and layout alignment.Here I Tailored All 10 Designs.",
    image: "/fig_project.png",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://sudhagar-242.github.io/Fig_Converted/",
    git: "https://github.com/Sudhagar-242/Fig_Converted",
  },
  {
    title: "Project Manager",
    description:
      "A basic and user-friendly project manager where users can create tasks and easily drag them between active and finished lists. It helps organize work in a clear and interactive way.",
    image: "/drag_project.png",
    tech: ["TypeScript", "HTML", "CSS"],
    live: "https://sudhagar-242.github.io/Project_Manager/",
    git: "https://github.com/Sudhagar-242/Project_Manager",
  },
  {
    title: "ToDo",
    description:
      "Simple Todo app With LocalStorage Integration,CRUD options and responsive.",
    image: "/Todo.png",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://sudhagar-242.github.io/ToDo-List/",
    git: "https://github.com/Sudhagar-242/ToDo-List",
  },
];

function Project() {
  return (
    <div className="flex flex-wrap justify-around items-between gap-x-12 gap-y-12 py-20">
      {projects.map((project) => (
        <ProjectCard
          key={Math.random()}
          title={project.title}
          description={project.description}
          image={project.image}
          tech={project.tech}
          live={project.live}
          git={project.git}
        />
      ))}
    </div>
  );
}

export default Project;
