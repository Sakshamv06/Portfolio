"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend Development : React, Next.js</li>
        <li>Backend Development : Node.js</li>
        <li>Databases : MongoDB, Prisma, SQL, PostgreSQL</li>
        <li>DevOps Tools : Docker, Jenkins, GitLab, Podman, Ansible</li>
        <li>Version Control : Git, GitHub, GitLab</li>
        <li>Programming Languages : Java, JavaScript, Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>MCA : Vivekananda Institute of Professional Studies (2022-2024)  </li>
        <li>BCA : Shri Guru Tegh Bahadhur Institute of Management and Information Technology (2019-2022) </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "Experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Python Developer Intern : AllSoft Solution (Summer Internship 2021)</li>
        <li>DevOps Intern : Keen and Able Computers Private Limited (April 2024 - Till Present)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpeg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate and motivated software engineer with a background in MCA and a strong interest in DevOps, full-stack development, and automation.
            I have experience working with technologies like Docker, Jenkins, Next.js, MongoDB, and more.
            My journey into the tech world has been driven by a deep desire to learn and apply the latest tools and practices in the software industry.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Experience")}
              active={tab === "Experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
