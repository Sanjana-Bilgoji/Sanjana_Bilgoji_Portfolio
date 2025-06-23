import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Java Developer Intern",
    company: "Hulk Hire Tech",
    date: "09/2024 - 11/2024",
    responsibilities: [
      "Developing and maintaining Java applications.",
      "Participating in large scale application.",
      "Working on the Agile Methodology and Microservices Archtectures.",
    ],
  },
  {
    job: "Web Developement Intern",
    company: "Compsoft technologies",
    date: "04/2022 - 06/2022",
    responsibilities: [
      "Developed a School Management System using JavaScript, HTML, CSS and MySQL.",
      "Collaborated with a team to design and implement features.",
      "Assisted in debugging and testing web applications.",
    ],
  },
  {
    job: "Softeware QA Intern",
    company: "TopGrep Tech Pvt Ltd",
    date: "12/2024 - 02/2025",
    responsibilities: [
      "Conducting software testing to identify bugs and issues.",
      "Collaborating with developers to resolve issues.",
      "Creating and executing test plans and cases.",
    ],
  },
];


const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;

