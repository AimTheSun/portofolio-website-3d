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
  java,
  joao_miguel,
  ricardo,
  hugoalves,
  heritage,
  forever,
  beamimg,
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work Experience",
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
    title: "Full-Stack Developer",
    institution: "BeamWallet",
    icon: backend,
    iconBg: "#383E56",
    date: "Mar 2025 - Aug 2025",
    points: [
      "Sole developer leading the migration of the company's website from WordPress to a modern React.js stack with a custom architecture and integrated CMS.",
      "Implemented headless CMS workflows (Strapi), responsive UI components, transactional email services, and analytics tools (Google Analytics, Meta Pixel), improving site performance and user engagement.",
      "Worked closely with the marketing team to boost the brand's online reach, resulting in measurable growth in user acquisition and site traffic.",
    ],
    link: "https://beamwallet.com/",
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
    name: "BeamWallet – Company Website Migration",
    description:
      "Led the complete migration of BeamWallet from a legacy WordPress stack to a performant, maintainable React-based web application. Owned the full software lifecycle: architecture, frontend development, integration with headless CMS (Strapi), transactional emails, and analytics (Google Analytics, Meta Pixel). Rebuilt the original design while improving responsiveness and performance. Optimized SEO and analytics to enhance online visibility and increase web traffic.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Strapi", color: "green-text-gradient" },
      { name: "Google Analytics", color: "orange-text-gradient" },
      { name: "Meta Pixel", color: "pink-text-gradient" },
    ],
    image: beamimg,
    live_demo_link: "https://beamwallet.com/",
  },
  {
    name: "Forever E-commerce",
    description:
      "Developed an e-commerce platform using the MERN stack (MongoDB, Express.js, React, Node.js) and Stripe for payments. Features include product filtering, cart management, secure checkout, and an admin dashboard for managing products and orders.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Stripe", color: "pink-text-gradient" },
    ],
    image: forever,
    source_code_link: "https://github.com/AimTheSun/ecommerce-forever",
    live_demo_link: "https://forever-frontend-ochre-rho.vercel.app/",
  },
  {
    name: "Heritage – Landing Page",
    description:
      "Modern landing page built with React and Vite, using modern libraries for layout, cards, and typography. Clean, responsive design suitable for a startup or personal brand showcase.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Vite", color: "green-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" },
    ],
    image: heritage,
    source_code_link: "https://github.com/your-repo/heritage", // You can update this
    live_demo_link: "https://heritage-swart.vercel.app",
  },
];
export { services, technologies, experiences, testimonials, projects };
