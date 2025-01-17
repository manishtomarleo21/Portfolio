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
    amazon,
    news,
    arcgate,
    beyoung,
    razor,
    bolt,
    reactlator,
    extension,
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "NextJS",
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
      title: "Research Analyst",
      company_name: "ArcGate",
      icon: arcgate,
      iconBg: "#383E56",
      date: "Sep 2018 - Jan 2021",
      points: [
        "Role: Conduct in-depth research and analysis to provide valuable insights and data-driven recommendations.",
        "Data Collection: Gather, organize, and analyze data from various sources, including databases, surveys, and literature",
        "Market Research: Perform market and industry analysis to identify trends, opportunities, and threats.",
        "Competitor Analysis: Analyze competitors' strategies, products, and performance to inform decision-making.",
      ],
    },
    {
      title: "Customer Service",
      company_name: "BeYoung",
      icon: beyoung,
      iconBg: "#E6DEDD",
      date: "August 2020 - Aug 2021",
      points: [
        "Role: Collaborate with the Customer Representative Management team to ensure excellent customer service and satisfaction.",
        "Customer Support: Provide timely and effective responses to customer inquiries, complaints, and requests.",
        "Issue Resolution: Assist in resolving customer issues, concerns, and escalations in a professional and efficient manne.",
        "Data Analysis: Analyze customer feedback and data to identify trends and areas for improvement.",
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
      name: "Razor - The Game Engine",
      description:
        "Razor is an early-stage interactive application and rendering engine designed primarily for Windows. While the project is still in its infancy, nearly every aspect of the repository is being developed as a hands-on learning experience and out of personal interest.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "OpenGL",
          color: "green-text-gradient",
        },
        {
          name: "GLAD",
          color: "pink-text-gradient",
        },
        {
          name: "Imgui",
          color: "blue-text-gradient",
        },
      ],
      image: razor,
      source_code_link: "https://github.com/manishtomarleo21/Razor",
      host_link: null
    },
    {
      name: "Bolt - Chat App",
      description:
        "Bolt ChatApp is a full-stack real-time chat application built using modern web technologies. The app allows users to send messages, share media, and interact with an AI-powered chat assistant using Google Gemini AI.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
      ],
      image: bolt,
      source_code_link: "https://github.com/manishtomarleo21/Bolt-ChatApp",
      host_link: "https://bolt-chatapp.onrender.com/login"
    },
    {
      name: "ReactLator Transcribe-Translator App",
      description:
        "ReactLator is a React-based web application that allows users to record, transcribe, and translate audio using cutting-edge technologies.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Xenova/Transformers",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: reactlator,
      source_code_link: "https://github.com/manishtomarleo21/ReactLator-Transcribe-Translator-App",
      host_link: "https://react-lator-transcribe-translator-app.vercel.app/"
    },
    {
      name: "YouTube Zoom Chrome Extension",
      description:
        "Enhance your YouTube experience with smooth zoom and pan controls. This Chrome extension allows you to zoom in and out on YouTube videos, and even pan the video while zoomed in, all with simple keyboard and mouse gestures.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Manifest",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: extension,
      source_code_link: "https://github.com/manishtomarleo21/YouTube-Zoom-Extension",
      host_link: null
    },
    {
      name: "Amazon clone",
      description:
        "Amazon clone streamlines shopping with product categories, enabling merchants to list multiple products in the same group for easy exploration by user.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: amazon,
      source_code_link: "https://github.com/manishtomarleo21/amazone-app",
      host_link: "https://e-app-48d03.web.app/"
    },
    {
      name: "News App",
      description:
        "Web application that enables users to search for news of world. The purpose of the project is to develop an application which will display news articles. User can browse news.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "BootStrap",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: news,
      source_code_link: "https://github.com/manishtomarleo21/newsapp",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };