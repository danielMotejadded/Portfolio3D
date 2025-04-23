import {
  web,
  mobile,
  creator,
  redux,
  mongodb,
  docker,
  backend,
  starbucks,
  javascript,
  tesla,
  typescript,
  shopify,
  html,
  tripguide,
  meta,
  carrent,
  jobit,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
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
    title: "JS Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: creator,
  },
  {
    title: "Intrested in Backend",
    icon: backend,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "HTML",
    company_name: "",
    icon: html,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "HTML was my first web technology which i was learning, and that is pretty logical as it is fundament of websites. I have a decent knowledge about it, although there are almost always new things to learn.",
    ],
  },
  {
    title: "CSS",
    company_name: "",
    icon: css,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "I created couple of websites using CSS without any framework to get the basics right. Also i have some projects in which i used plain HTML and CSS. ",
    ],
  },
  {
    title: "Javscript",
    company_name: "",
    icon: javascript,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "I am still learning JS which is my first high level language which i realy dive into. I want to understand also how it works under the hood, cause it helps alot with developing. ",
    ],
  },
  {
    title: "Learning React",
    company_name: "",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "This  is JS library which i chose to learn or I'm currently learning. Although i had some previous experience with it",
    ],
  },
  {
    title: "Learning Typescript",
    company_name: "",
    icon: typescript,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Also I'm learning Typescript as it makes writing in react easier  ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Electrical and Automation services page ",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "JS Game",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Canvas",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
