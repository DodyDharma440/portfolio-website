import React from "react";
import {
  FaFacebook,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaLinkedin,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiStorybook,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { GrGolang } from "react-icons/gr";
import {
  HiCode,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
} from "react-icons/hi";

const socials = [
  { icon: FaGithub, href: "https://github.com/DodyDharma440" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/dodi-aditya-237154206",
  },
  { icon: FaInstagram, href: "https://instagram.com/dodi.aditya_" },
  { icon: FaFacebook, href: "https://facebook.com/dodyaridharma" },
  { icon: FaTwitter, href: "https://twitter.com/dodiaditya_" },
];

const skills = [
  { label: "JavaScript", icon: SiJavascript },
  { label: "TypeScript", icon: SiTypescript },
  { label: "HTML", icon: FaHtml5 },
  { label: "CSS", icon: DiCss3 },
  { label: "ReactJS", icon: FaReact },
  { label: "NextJS", icon: SiNextdotjs },
  { label: "Figma", icon: FaFigma },
  { label: "Express", icon: SiExpress },
  { label: "NodeJS", icon: FaNodeJs },
  { label: "Storybook", icon: SiStorybook },
  { label: "NPM", icon: FaNpm },
];

const experience = [
  {
    title: "Frontend Developer at Dimedika",
    duration: "Oct 2021 - Present",
    description:
      "At Dimedika, I developed a web-based application to do a Covid-19 test",
  },
  {
    title: "Frontend Developer at PT. Ganeshcom Mitra Solusi Digital",
    duration: "Aug 2021 - Present",
    description:
      "Contributed to several projects, my role as a frontend developer is to maintain the UI of an application by adjusting to wireframe and UI/UX design",
  },
];

const educations = [
  {
    title: "STMIK Primakara",
    duration: "Sep 2022 - Present",
    description:
      "I am currently a fresh student or still in early semester. Here I majored in informatics engineering to develop skills in the IT field",
  },
  {
    title: "SMK N 1 Manggis",
    duration: "Jul 2018 - Jun 2021",
    description:
      "In high school I majored in computer and network engineering. This is where I started to learn about IT. But after graduating I prefer to develop my knowledge as a web developer rather than a network technician",
  },
];

const Home = () => {
  return (
    <>
      <section className="min-h-[450px] flex flex-col justify-center">
        <div className="grid grid-cols-2 items-center">
          <div className="col-span-2 md:col-span-1">
            <h1 className="font-semibold text-4xl tracking-normal leading-[50px]">
              <div className="flex">
                Hello <div className="animate-shake w-fit ml-2">👋🏼</div>
              </div>
              I'm Dodi Aditya
            </h1>
            <h2 className="text-lg my-3 font-semibold text-blue-900 dark:text-blue-400">
              Frontend Developer
            </h2>
            <div className="mb-4 mt-1 bg-gray-600 w-[100px] h-[2px]" />
            <div className="flex">
              {socials.map(({ icon: Icon, href }, index) => {
                return (
                  <a href={href} key={index} target="_blank">
                    <div className="p-[6px] mr-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 rounded-md transform transition-transform hover:-translate-y-[2px] text-gray-600 dark:text-gray-400">
                      <Icon size={20} />
                    </div>
                  </a>
                );
              })}
            </div>
            <Link to="/projects">
              <button className="my-6 border border-gray-200 dark:border-gray-700 rounded px-4 py-2 relative hover:bg-gray-300 dark:hover:bg-gray-800 hover:bg-opacity-30">
                See Projects
              </button>
            </Link>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="rounded-full border-4 border-blue-900 dark:border-blue-400 w-[250px] my-4 ml-auto mr-auto md:mr-0 md:my-0 md:ml-auto h-[250px] bg-black">
              <img
                className="overflow-hidden rounded-full"
                loading="lazy"
                src="/dodi.jpg"
                alt="Dodi Aditya Photo"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-12">
        <h1 className="text-3xl my-3 font-semibold text-blue-900 dark:text-blue-400">
          # About Me
        </h1>
        <hr className="my-4 dark:border-gray-700 border-4 w-[80%]" />
        <p className="leading-8 dark:text-gray-300">
          Hello, my name is I Made Dodi Aditya Ari Dharma or you can call me
          Dodi. I was born on May 12, 2003, and now I'm still 19 years old.
          Currently I work as a frontend developer and also a student majoring
          in informatics engineering. I am interested in exploring knowledge in
          the field of technology, especially in the field of web development. I
          have an honest personality, able to work in a team, and also always
          respect others. My hobbies are coding, playing games, and playing
          Balinese traditional music.
        </p>
      </section>
      <section className="mt-12">
        <h1 className="text-3xl my-3 font-semibold text-blue-900 dark:text-blue-400">
          # My Skills
        </h1>
        <hr className="my-4 dark:border-gray-700 border-4 w-[80%]" />
        <p className="leading-8 dark:text-gray-300 mb-4">
          This is my skill or tech stack that i use for work.
        </p>
        <div className="grid grid-cols-12 gap-6">
          {skills.map(({ icon: Icon, label }, index) => {
            return (
              <div
                className="flex items-center col-span-6 md:col-span-4 text-gray-600 dark:text-gray-300"
                key={index}
              >
                <Icon />
                <span className="ml-2">{label}</span>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mt-12">
        <h1 className="text-3xl my-3 font-semibold text-blue-900 dark:text-blue-400">
          # Experience
        </h1>
        <hr className="my-4 dark:border-gray-700 border-4 w-[80%]" />
        <p className="mb-6">
          This is my work experience after graduating from high school at June
          2021
        </p>
        <div className="border-l-4 border-l-blue-900 dark:border-l-blue-400 ml-6">
          {experience.map((experience, index) => {
            return (
              <div
                key={index}
                className="flex relative transform -translate-x-[22px] mb-8"
              >
                <div className="w-10 absolute h-10 rounded-full flex items-center justify-center text-white  bg-blue-900 dark:bg-blue-400">
                  <HiCode size={24} />
                </div>
                <div className="ml-[56px] mt-1">
                  <div className="mb-3">
                    <h5 className="font-semibold text-lg mb-1">
                      {experience.title}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {experience.duration}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mt-12">
        <h1 className="text-3xl my-3 font-semibold text-blue-900 dark:text-blue-400">
          # Educations
        </h1>
        <hr className="my-4 dark:border-gray-700 border-4 w-[80%]" />
        <p className="mb-6">
          Here I only show education starting from high school
        </p>
        <div className="border-l-4 border-l-blue-900 dark:border-l-blue-400 ml-6">
          {educations.map((education, index) => {
            const Icon = education.duration.includes("Present")
              ? HiOutlineBookOpen
              : HiOutlineAcademicCap;

            return (
              <div
                key={index}
                className="flex relative transform -translate-x-[22px] mb-8"
              >
                <div className="w-10 absolute h-10 rounded-full flex items-center justify-center text-white  bg-blue-900 dark:bg-blue-400">
                  <Icon size={24} />
                </div>
                <div className="ml-[56px] mt-1">
                  <div className="mb-3">
                    <h5 className="font-semibold text-lg mb-1">
                      {education.title}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {education.duration}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed">
                    {education.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
