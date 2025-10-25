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
  figma,
  docker,

  carrent,
  jobit,
  tripguide,
  flutter,
  python,
  php,
  laravel,
  firebase,
  mysql,
  postgresql,
  dart,
  ginteknoloji,
  gbbbilisim,
  nlkbilgiteknolojileri,
  uygurotomasyonvemühendislik,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
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
    title: "Full Stack Developer",
    company_name: "Gin Teknoloji",
    icon: ginteknoloji,
    iconBg: "#E6DEDD",
    date: "2025 - Present",
    points: [
      "Developing and maintaining mobile applications using modern frameworks and technologies.",
      "Building responsive web applications and implementing frontend/backend solutions.",
      "Designing and integrating RESTful APIs for seamless data communication.",
      "Working with SQL databases for data management and optimization.",
      "Creating user interfaces and implementing UI/UX designs for web and mobile platforms.",
      "Collaborating with cross-functional teams to deliver high-quality software solutions.",
    ],
  },
  {
    title: "Mobile App Developer",
    company_name: "Gaziantep Bilişim",
    icon: gbbbilisim,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Developed and maintained mobile applications using Flutter and Firebase.",
      "Built RESTful APIs with Laravel and PHP for mobile app backends.",
      "Implemented real-time features and cloud storage solutions using Firebase.",
      "Tested and debugged mobile applications using Postman for API integration.",
    ],
  },
  {
    title: "Mobile App Developer",
    company_name: "Gaziantep Bilişim",
    icon: gbbbilisim,
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
    icon: nlkbilgiteknolojileri,
    iconBg: "#E6DEDD",
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
    icon: uygurotomasyonvemühendislik,
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
    image: null, // TODO: Add project image
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
    image: null,
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
    image: null, 
    source_code_link: "https://github.com/ibrahimysr",
  },
  {
    name: "Falcının Dünyası",
    description:
      "A comprehensive fortune-telling mobile app featuring daily horoscopes, tarot and coffee cup readings, dream interpretation, and personalized daily predictions. Users can save their fortune history and track insights over time.",
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
        name: "dart",
        color: "pink-text-gradient",
      },
    ],
    image: null,
    source_code_link: "https://github.com/ibrahimysr",
    play_store_link: "https://play.google.com/store/apps/details?id=com.falcinin_dunyasi&hl=tr",
  },
  {
    name: "Akiloji - Language Learning App",
    description:
      "An advanced language learning platform with categorized quizzes, vocabulary trainer, instant translation, and online competitions. Features daily challenges, audio/visual questions, multiplayer interactions, and progressive learning series.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: null,
    source_code_link: "https://github.com/ibrahimysr",
    play_store_link: "https://play.google.com/store/apps/details?id=com.ginteknoloji.akiloji&hl=tr",
  },
  {
    name: "Dijital Demokrasi Mobile",
    description:
      "A democratic engagement platform where users create discussions, submit proposals, and participate in polls. Features include user following, blogs with comments/likes, gamification with points and badges for active contributors.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: null,
    source_code_link: "https://github.com/ibrahimysr",
    play_store_link: "https://play.google.com/store/search?q=dijital%20demokrasi&c=apps&hl=tr",
  },
  {
    name: "Akıllı Ev Teknolojileri",
    description:
      "A smart home control mobile application for a custom IoT system. Provides complete home automation control including lighting, climate, security, and appliances management from a single intuitive mobile interface.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "iot",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: null,
    source_code_link: "https://github.com/ibrahimysr",
  },
  {
    name: "dijitaldemokrasi.org",
    description:
      "A full-stack web platform for democratic participation and civic engagement. Built from scratch with Laravel, featuring discussion forums, proposal systems, polls, and interactive community features for citizens.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: null, 
    source_code_link: "https://dijitaldemokrasi.org",
    live_link: "https://dijitaldemokrasi.org",
  },
  {
    name: "ginteknoloji.com",
    description:
      "Corporate website for Gin Teknoloji, a technology solutions company. Complete website development including company portfolio, services showcase, contact systems, and modern responsive design.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: null, 
    source_code_link: "https://ginteknoloji.com",
    live_link: "https://ginteknoloji.com",
  },
  {
    name: "deta.org.tr",
    description:
      "Full-stack website development for DETA organization. Features include content management, news and events systems, member portal, and comprehensive organizational information architecture.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: null, 
    source_code_link: "https://deta.org.tr",
    live_link: "https://deta.org.tr",
  },
  {
    name: "kardeslikdernegi.org",
    description:
      "Complete website solution for Kardeşlik Derneği (Brotherhood Association). Includes donation systems, volunteer management, event calendar, blog posts, and member area with secure authentication.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: null, 
    source_code_link: "https://kardeslikdernegi.org",
    live_link: "https://kardeslikdernegi.org",
  },
  {
    name: "fixyou.com.tr",
    description:
      "A comprehensive service platform for repair and maintenance solutions. Full-stack development with service booking system, technician management, customer portal, real-time tracking, and payment integration.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: null, 
    source_code_link: "https://fixyou.com.tr",
    live_link: "https://fixyou.com.tr",
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
    title: "Microsoft Azure Fundamentals",
    organization: "Miuul",
    year: "2024",
  },
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

export { services, technologies, experiences, projects, achievements, certifications, education };
