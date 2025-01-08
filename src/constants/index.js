import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AI/ML Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Quality Assurance",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Quality Assurance Engineer",
    company_name: "Matrox Video",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2024 - April 2025 (Expected)",
    points: [
      "Currently involved in designing and executing test plans, developing automated test scripts, and collaborating with cross functional teams to ensure software reliability and performance. This role provides hands-on experiance with hardware and software integration.",
      "Played a key role in the succesful release of the Extio 3 model box by identyfing and addressing defects during the final build phase.",
      "Contributed to ensuring the product met the quality standards and was ready for its scheduled December launch.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];



const projects = [
  {
    name: "Air Canada",
    description:
      "Machine learning model to predict Air Canada customer seat preferences using pricing strategies, seat availability, and trip details to optimize decision-making and improve customer insights.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "NumPy",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/JustynePhan/AirCanada-SeatPredictor",
  },
  {
    name: "Travel App",
    description:
      "A travel app concept designed to simplify trip planning with intuitive user interfaces and innovative features for a seamless user experience.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/JustynePhan/Camping_UI_UX",
  },
  {
    name: "Lunar Lander",
    description:
      "Lunar Lander simulation using python and gym library. Designed neural network, trained AI, and implemented DQN agent. Developed realistic rocket trajectory optimization with discrete thrust actions. ",
    tags: [
      {
        name: "Pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "DQN",
        color: "green-text-gradient",
      },
      {
        name: "Gymnasium",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/JustynePhan/Lunar-landing-project",
  },
];

export { services, technologies, experiences, projects };
