import React from "react";
import { FaReact } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links =  (dict: Record<string, string>) => [
  {
    name: dict.home,
    hash: "#home",
  },
  {
    name: dict.about,
    hash: "#about",
  },
  {
    name: dict.projects,
    hash: "#projects",
  },
  {
    name: dict.skills,
    hash: "#skills",
  },
  {
    name: dict.experience,
    hash: "#experience",
  },
  {
    name: dict.contact,
    hash: "#contact",
  },
] as const;

export const experiencesData = (dict: Record<string, string>) => [
  {
    title: dict["software.engineer"],
    location: dict["são.paulo.brazil.(remote)"],
    description: dict["description.job.one"],
    company: "Gooxxy",
    type: dict["full.time"],
    icon: React.createElement(FaReact),
    date: dict["jan.2023.present"],
  },
  {
      title: dict["front-end.developer"],
    location: dict["rio.de.janeiro.brazil"],
    description: dict["description.job.two"],
     company: "A.R.Phoenix",
    type: dict["full.time"],
    icon: React.createElement(FaReact),
    date: dict["oct.2021.jan.2023"],
  },
  {
    title: dict["front-end.developer"],
    location: dict["rio.de.janeiro.brazil"],
    description:  dict["description.job.tree"],
    company: "Tools Software",
    type: dict["full.time"],
    icon: React.createElement(FaReact),
    date: dict["oct.2021.jan.2023"],
  },
  {
    title: dict["front-end.developer"],
    location: "Remote",
    description: dict["description.job.four"],
     company: "Freelance",
    type: "Freelance",
    icon: React.createElement(FaReact),
    date: dict["aug.2021.oct.2021"],
  },
] as const;



export const projectsData = (dict: Record<string, string>) => [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "SASS",
  "Styled Components",
  "Azure",
  "Prisma",
  "MongoDB",
  "Redux",
  "ContextAPI",
  "GraphQL",
  "NestJs",
  "Express",
  "PostgreSQL",
  "Bootstrap 5",
  "Angular +9",
  "Micro Front-End",
  "Single SPA",
  "Docker",
] as const;
