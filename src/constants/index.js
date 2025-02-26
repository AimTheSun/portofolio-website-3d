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
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  flowfit,
  taskwise,
  lifecost,
  java,
  codeforall,
  coimbra,
  joao_miguel,
  ricardo,
  hugoalves,
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education", // Changed from "work" to "education"
    title: "Education",
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
    title: "JavaScript, React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer, Nodejs, Java",
    icon: backend,
  },
  {
    title: "Available for Internship/Freelance work",
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
    name: "Java",
    icon: java,
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
];

const experiences = [
  {
    title: "14-Week Programming Bootcamp",
    institution: "Code For All_",
    icon: codeforall,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Intensive training in full-stack web development, focusing on Java, JavaScript, mySql, Spring",
      "Completed real-world projects, enhancing problem-solving and coding skills.",
      "Collaborated with peers to build responsive, user-friendly applications.",
    ],
  },
  {
    title: "Master in Sports Science",
    institution: "University of Coimbra",
    icon: coimbra,
    iconBg: "#E6DEDD",
    date: "2021 - 2023",
    points: [
      "Conducted research on biomechanics and performance optimization in sports.",
      "Developed analytical skills through data-driven studies and presentations.",
      "Gained a strong foundation in teamwork and project management.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Pedro’s been a friend since we were neighbors, and I’ve seen his dedication up close. From our old side projects to random jobs, he’s always one step ahead, mastering trending tech before anyone else. His work ethic is unreal.",
    name: "João Almeida",
    designation: "Junior Developer",
    company: "Code For All_",
    image: joao_miguel,
  },
  {
    testimonial:
      "I worked with Pedro on the FlowFit app, and we won Best Technical Achievement together. He poured his heart into it - late nights, endless testing - and his skills made the difference. That prize was well-earned.",
    name: "Hugo Alves",
    designation: "Front End Developer",
    company: "MC Sonae",
    image: hugoalves,
  },
  {
    testimonial:
      "As a gym buddy, I’ve seen Pedro’s hustle firsthand. He’s a hard worker and a natural at connecting with people - qualities that shine through in his development projects. He’s the real deal.",
    name: "Ricardo Cerqueira",
    designation: "Full Stack Developer",
    company: "Code For All_",
    image: ricardo,
  },
];

const projects = [
  {
    name: "FlowFit – Gym Management Platform",
    description:
      "A platform to optimize gym management, featuring client management, interactive dashboard, QR Code check-in, and real-time reports. Built with HTML, CSS, JavaScript, Java, Spring Boot, MySQL, and AWS. Awarded for impressive technical achievement.",
    tags: [
      { name: "Java", color: "green-text-gradient" },
      { name: "Spring Boot", color: "green-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "AWS", color: "orange-text-gradient" },
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "Node.js", color: "blue-text-gradient" },
    ],
    image: flowfit,
    source_code_link: "https://github.com/AimTheSun/flowfit-webapp",
    live_demo_link: "http://client-flowfit.s3-website-us-east-1.amazonaws.com/",
  },
  {
    name: "LifeCost – Healthcare Cost Estimator",
    description:
      "A web app that estimates medical exam costs, waiting times, and available hospitals using OpenAI and Google Maps APIs. Features a responsive UI with dark/light mode. Built with React and Node.js.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "APIs", color: "orange-text-gradient" },
    ],
    image: lifecost,
    source_code_link: "https://github.com/AimTheSun/lifecost",
    live_demo_link: "https://lifecost.vercel.app/",
  },
  {
    name: "TaskWise – Task Management App",
    description:
      "A task management app built with React and TypeScript, leveraging React Hooks and drag-and-drop functionality. Enhanced understanding of TypeScript integration and component-based architecture.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "Drag-and-Drop", color: "pink-text-gradient" },
    ],
    image: taskwise,
    source_code_link: "https://github.com/AimTheSun/react-typescript-taskwise",
    live_demo_link: "https://aimthesun.github.io/react-typescript-taskwise",
  },
];
export { services, technologies, experiences, testimonials, projects };
