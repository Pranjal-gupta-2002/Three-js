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
      id: "service",
      title: "Service",
      
    },
    {
      id: "internship",
      title:"Internship"
      
    },
    {
      id: "about",
      title: "About",
      
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "App Development",
      icon: mobile,
    },
    {
      title: "Coding",
      icon: backend,
    },
    {
      title: "Graphic Designing",
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
      title: "Web Development",
      icon: starbucks,
      iconBg: "#383E56",
      no : '1',
      // date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js ,basic Html css Javascript and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "App Development",
      icon: tesla,
      iconBg: "#E6DEDD",
      no : '2',
      tcolor:'#383E56',
      // date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining app applications using React-native,Flutter and other related technologies.",
        "Integration of third-party services and APIs for added functionality.",
        "You will learn the use of analytics and user feedback to make data-driven improvement.",
        "Assisment with app-deployment and submission to app stores.",
      ],
    },
    {
      title: "Graphics",
      // company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      // date: "",
      no : '3',
      points: [
        "Learn graphic designing using Adobe Photoshop,Illustrator,Indesign and other related technologies.",
        "Here you will learn a combination of typography,images and other visual elements to convey a message.",
        "The goal of Simplbyte is to teach you branding and marketing through Graphic design.",
        "By taking part in Simplbyte program will enhance your adaptation quality to learn new Tech.",
      ],
    },
    {
      title: "Java Development",
      // company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      no : '4',
      tcolor:'#383E56',
      // date: "Jan 2023 - Present",
      points: [
        "Java has built-in support for network programming and distributed computing.",
        "Java is easy to learn and widely taught in universities and coding bootcamps.",
        "Java's object-oriented approach allows for code reuse and easier maintenance over time.",
        "Java's multithreading support improves application performance and responsiveness.",
        "Java's extensive standard library provides developers with a wide range of pre-built functions and tools.."
      ],
    },  {
      title: "Data science",
      // company_name: "Meta",
      icon: meta,
      iconBg: "#383E56",
      no : '5',
      // date: "Jan 2023 - Present",
      points: [
        "Data science uses a variety of statistical and machine learning techniques to uncover patterns and relationships in data.",
        "The ultimate goal of data science is to use data to solve complex problems and make predictions about future outcomes.",
        "Data scientists often work with programming languages such as Python and R, and use tools such as SQL, Hadoop, and Spark to manipulate and analyze data.",
        "Ethical considerations are important in data science, particularly with regard to data privacy, bias, and the responsible use of AI and machine learning.",
      ],
    },
  ];
  

  
  
  
  export { services, technologies, experiences };