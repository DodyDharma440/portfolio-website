import { ProjectCard } from "../../components";
import { IProject } from "../../interfaces/data";

const projects: IProject[] = [
  {
    title: "Dimedika",
    description:
      "Application for clinics that are used to carry out a Covid-19 test and immediately print a test result letter containing a qr code.",
    stacks: [
      "TypeScript",
      "React",
      "NextJS",
      "Material UI",
      "React Query",
      "React Table",
    ],
    duration: "Oct 2021 - Des 2021",
    image: "/dimedika.png",
  },
  {
    title: "Dimedika v2",
    description:
      "Application for clinics management. Can be used for clinic staff or doctor to manage checkup for their patient.",
    stacks: [
      "TypeScript",
      "React",
      "NextJS",
      "Mantine",
      "React Query",
      "React Table",
      "Next Auth",
    ],
    duration: "Apr 2023 - Now",
    image: "/dimedika-2.png",
  },
  {
    title: "SISKA Universitas Pertamina",
    description:
      "An academic system used by students, lecturers and staff at Pertamina University. in this project I am the maintainer in the frontend division.",
    stacks: [
      "TypeScript",
      "React",
      "NextJS",
      "Mantine",
      "React Query",
      "React Table",
    ],
    duration: "Apr 2022 - Now",
  },
  {
    title: "SSO Universitas Pertamina",
    description:
      "Is a Single Sign On (SSO) system for applications owned by Pertamina University.",
    stacks: [
      "TypeScript",
      "React",
      "NextJS",
      "Mantine",
      "React Query",
      "React Table",
    ],
    duration: "Mar 2022 - Now",
    image: "/siska-sso.png",
  },
  {
    title: "SISKA React UI",
    description:
      "An npm package for the Pertamina University SISKA and SSO projects. In this project I made it like a monorepo, so 1 repository has 4 npm packages, namely @siska-up-ui/react for the central package, @siska-up-ui/fetcher to handle data to the API, @siska-up-ui/xlsx to handle import export excel, and @siska-up-ui/pdf to handle generate pdf document. For documentation and component testing here I use Storybook. In this project 95% I do myself.",
    stacks: [
      "TypeScript",
      "React",
      "Storybook",
      "Mantine",
      "React Query",
      "React Table",
      "NPM",
      "Gitlab Registry",
      "Yargs",
    ],
    duration: "Mar 2022 - Now",
    image: "/siska-ui.png",
  },
  {
    title: "THU Finance",
    description:
      "A finance system that can calculate budgets, invoices, purchases, etc. This system belongs to Trihasco Utama company.",
    stacks: [
      "JavaScript",
      "React",
      "NextJS",
      "Chakra UI",
      "Redux Thunk",
      "React Table",
    ],
    duration: "Aug 2021 - Jun 2022",
    image: "/finance.png",
  },
  {
    title: "Company Profile HIPMI Denpasar",
    description:
      "A company profile for HIPMI Denpasar, contains a static blog and to view member profiles.",
    stacks: ["TypeScript", "React", "NextJS", "Tailwind CSS"],
    duration: "Feb 2022 - May 2022",
    image: "/hipmi.png",
  },
  {
    title: "AIMS Engine Calculation",
    description:
      "System for calculating corrosion, pipeline, lifting, etc. for PHE",
    stacks: ["JavaScript", "React", "Prime React", "Zustand"],
    duration: "Sep 2021 - Now",
  },
  {
    title: "MIL Marketplace",
    description:
      "A Web3 marketplace for booking mentors, with payments using crypto",
    stacks: [
      "TypeScript",
      "React",
      "NextJS",
      "Chakra UI",
      "React Query",
      "React Table",
      "EthersJS",
      "Wagmi",
    ],
    duration: "Oct 2022 - Apr 2023",
    image: "/mil.png",
  },
  {
    title: "Terminal Portfolio Website (Practice Project)",
    description:
      "Portfolio website with UI like zsh terminal on Mac with powerlevel10k theme.",
    stacks: ["TypeScript", "React", "Tailwind CSS"],
    duration: "Jul 2023",
    image: "/terminal.png",
  },
  {
    title: "Music Player (Practice Project)",
    description:
      "Online music player using Sportify API and implement Spotify OAuth",
    stacks: ["TypeScript", "Angular", "NgRx", "Tailwind CSS", "Spotify API"],
    duration: "Jul 2023",
    image: "/music.png",
  },
  {
    title: "Africa Animals (Practice Project)",
    description:
      "Animals list application with static JSON data. Can be installed on Mac using Mac Catalyst Technology",
    stacks: ["Swift", "SwiftUI"],
    duration: "Mar 2023",
    image: "/animals.png",
  },
  {
    title: "Cookbook App (Practice Project)",
    description:
      "A mobile application used to search for recipes and their ingredients",
    stacks: ["JavaScript", "React Native", "Redux Thunk", "Figma"],
    duration: "Apr 2021",
    image: "/cookbook.png",
  },
  {
    title: "Simple Blog API (Practice Project)",
    description:
      "Simple blog API containing articles, comments, and user management",
    stacks: ["Golang", "Gin", "Gorm", "Swaggo", "PostgreSQL"],
    duration: "Jul 2022",
  },
];

const Projects = () => {
  return (
    <section className="mt-12">
      <h1 className="text-3xl my-3 font-semibold text-blue-900 dark:text-blue-400">
        Projects ({projects.length})
      </h1>
      <hr className="my-4 dark:border-gray-700 border-4 w-[50%]" />
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, index) => {
          return (
            <div className="col-span-1">
              <ProjectCard key={index} project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
