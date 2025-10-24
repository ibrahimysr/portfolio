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
  flutter,
  python,
  php,
  laravel,
  firebase,
  mysql,
  postgresql,
  dart,
  tensorflow,
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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI/ML Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Python",
    icon: python,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Mobile App Developer",
    company_name: "Gaziantep Bilişim",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Developing and maintaining mobile applications using Flutter and Firebase.",
      "Building RESTful APIs with Laravel and PHP for mobile app backends.",
      "Implementing real-time features and cloud storage solutions using Firebase.",
      "Testing and debugging mobile applications using Postman for API integration.",
    ],
  },
  {
    title: "Mobile App Developer",
    company_name: "Gaziantep Bilişim",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Developed cross-platform mobile applications with Flutter framework.",
      "Integrated Firebase services for authentication, database, and cloud storage.",
      "Collaborated with team members to deliver high-quality mobile solutions.",
      "Performed API testing and integration using Postman.",
    ],
  },
  {
    title: "AI/ML Developer",
    company_name: "NLK Bilgi Teknolojileri A.Ş",
    icon: shopify,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Worked on artificial intelligence and machine learning projects.",
      "Developed computer vision applications using deep learning algorithms.",
      "Implemented image processing solutions for real-world problems.",
      "Utilized Python and TensorFlow for AI model development.",
    ],
  },
  {
    title: "Automation Technician",
    company_name: "Uygur Otomasyon ve Mühendislik",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2019",
    points: [
      "Worked with industrial automation technologies and systems.",
      "Developed PLC programming solutions for automation processes.",
      "Gained hands-on experience in automation engineering.",
      "Collaborated with engineering teams on automation projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Thanks to İbrahim's mobile application, our operations have become much more efficient. His technical knowledge and problem-solving skills are excellent.",
    name: "Fatih Kirazoğlu",
    designation: "Automation Teacher",
    company: "OSB Technical College",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "His performance in artificial intelligence projects and learning speed are admirable. He is a developer with a bright future.",
    name: "Ali Yılmaz",
    designation: "Project Manager",
    company: "NLK Bilgi Teknolojileri",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    testimonial:
      "The applications he developed with Flutter are both user-friendly and high-performance. I definitely recommend him.",
    name: "Ayşe Demir",
    designation: "Product Manager",
    company: "Gaziantep Bilişim",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const projects = [
  {
    name: "Star Storyteller",
    description:
      "An interactive story reading mobile app for children developed with Flutter. Published on the App Store, featuring AI-powered storytelling to develop children's imagination with engaging narratives.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ibrahimysr",
  },
  {
    name: "AI-Powered Eye Care App",
    description:
      "A comprehensive health application offering tests, exercises, and eye disease detection. Features include personalized diet planning with API integrations and database optimization for health data management.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ibrahimysr",
  },
  {
    name: "E-Commerce Platform",
    description:
      "A full-featured restaurant e-commerce mobile application developed with Flutter. Features include user authentication, real-time database, cloud storage, and comprehensive API testing with Postman.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ibrahimysr",
  },
];

// Achievements and Certifications
const achievements = [
  {
    title: "TEKNOFEST 2024",
    description: "Industrial Digital Technologies Competition - Participated with innovative technology solutions",
    year: "2024",
  },
  {
    title: "Software Captain",
    description: "SAVTEK Community - Led software development initiatives and mentored team members",
    year: "2022",
  },
];

const certifications = [
  {
    title: "Flutter Development",
    organization: "Udemy",
    year: "2022",
  },
  {
    title: "SQL Database Management",
    organization: "Udemy",
    year: "2022",
  },
  {
    title: "C# Programming",
    organization: "Udemy",
    year: "2023",
  },
  {
    title: "Data Science and Artificial Intelligence",
    organization: "Udemy",
    year: "2023",
  },
];

const education = [
  {
    school: "Selçuk University",
    degree: "Bachelor of Computer Engineering",
    duration: "2021 - 2025",
    gpa: "3.35 / 4.00",
  },
  {
    school: "OSB Technical and Industrial Vocational High School",
    degree: "Automation Technologies Technician",
    duration: "2017 - 2021",
  },
];

export { services, technologies, experiences, testimonials, projects, achievements, certifications, education };
