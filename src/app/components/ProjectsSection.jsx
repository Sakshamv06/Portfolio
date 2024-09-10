"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "SamCode",
    description: "My Portfolio showcasing my skills",
    image: "/images/projects/p1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sakshamv06/Portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "SaVyaMo",
    description: "A project Management app for managing data of Developers and Managers using Python Django ",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sakshamv06/SaVyaMo",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "CWC 2023 Analysis",
    description: "This project focuses on analyzing the data from the Cricket World Cup 2023 using Python. The aim was to extract meaningful insights and trends from match statistics, player performances, and team strategies throughout the tournament.",
    image: "/images/projects/4.png",
    tag: ["All", "Data Analysis"],
    gitUrl: "https://github.com/Sakshamv06/CWC2023",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "To-Do",
    description: "A to-do list web application that allows users to sign in/sign up using Clerk. Database management is handled through MongoDB Atlas with Prisma as the ORM.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sakshamv06/To_Do",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "DevOps CI/CD Pipeline for To-Do App",
    description: "Developed and automated a CI/CD pipeline using Jenkins and Docker. The pipeline pushes the to-do app code into a Docker server, streamlining the deployment process",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sakshamv06/To_Do",
    previewUrl: "/",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data Analysis"
          isSelected={tag === "Data Analysis"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
