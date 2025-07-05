import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "GitHub User Search",
    year: "April2025",
    align: "right",
    image: "../../images/web-img-1.png",
    link: "https://github.com/Sanjana-Bilgoji/Github-Search-UserName",
  },
  {
    name: "Kanban board UI",
    year: "May2025",
    align: "left",
    image: "../../images/web-img-2.png",
    link: "https://github.com/Sanjana-Bilgoji/Kanban-UI/tree/main/kanban-ui",
  },
  {
    name: "YouTube Clone",
    year: "June2025",
    align: "right",
    image: "../../images/web-img-3.png",
    link: "https://github.com/Sanjana-Bilgoji/YouTubeClone",
  },
  {
    name: "Pokedex",
    year: "June2025",
    align: "left",
    image: "../../images/web-img-4.png",
    link: "https://github.com/Sanjana-Bilgoji/Pokedex_Project",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;