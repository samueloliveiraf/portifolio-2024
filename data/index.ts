import {
  HiHome,
  HiMiniCubeTransparent,
  HiMiniCog,
  HiMiniNewspaper,
  HiMiniUserCircle,
} from "react-icons/hi2";

import ProjectImg1 from "@/public/img/project1.png";
import ProjectImg2 from "@/public/img/project2.png";
import ProjectImg3 from "@/public/img/project3.png";
import Logo1 from "@/public/img/logo1.png";
import Logo2 from "@/public/img/logo2.png";
import Logo3 from "@/public/img/logo3.png";
import Avatar1 from "@/public/img/avatar1.png";
import Avatar2 from "@/public/img/avatar2.png";
import Avatar3 from "@/public/img/avatar3.png";
import Avatar4 from "@/public/img/avatar4.png";
import JavaScript from "@/public/svg/javascript.svg";
import Linux from "@/public/svg/linux.svg";
import Vue from "@/public/svg/vue-9.svg";
import Django from "@/public/svg/django.svg";
import Python from "@/public/svg/python.svg";
import Node from "@/public/svg/node.svg";

export const navItems = [
  {
    name: "Home",
    href: "#home",
    icon: HiHome,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: HiMiniCubeTransparent,
  },
  {
    name: "Services",
    href: "#services",
    icon: HiMiniCog,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: HiMiniUserCircle,
  },
];

export const projectsItems = [
  {
    title: "SAS Website",
    image: ProjectImg1,
  },
  {
    title: "Social Mendia Website",
    image: ProjectImg2,
  },
  {
    title: "Admin Panel Website",
    image: ProjectImg3,
  },
];

export const skillsItems = [
  {
    name: "Python",
    description:
      "",
    logo: Python,
  },
  {
    name: "JavaScript",
    description:
      "",
    logo: JavaScript,
  },
  {
    name: "Django",
    description:
      "",
    logo: Django,
  },
  {
    name: "Linux",
    description:
      "",
    logo: Linux,
  },
  {
    name: "Vue",
    description:
      "",
    logo: Vue,
  },
  {
    name: "Node",
    description:
      "",
    logo: Node,
  },
];

export const servicesItems = [
  {
    title: "Web Scraping",
    description:
      "Tenho conhecimento em Web Scraping, utilizando Python e JavaScript para extrair e processar dados da web. Domínio bibliotecas como BeautifulSoup, Scrapy e Requests, além de criar automações para acessar e estruturar informações de forma eficiente.",
    logo: Logo3,
  },
  {
    title: "Desenvolvedor Web",
    description:
      "Sou Desenvolvedor Web especializado em Python, com experiência sólida na criação de APIs utilizando os principais frameworks como Flask, Django e FastAPI. Também desenvolvo sites completos com Django e possuo habilidades em front-end, utilizando Vue.js e JavaScript. Além disso, sei também Node.js, permitindo integração eficiente entre front-end e back-end.",
    logo: Logo1,
  },
  {
    title: "Dev Ops",
    description:
      "Tenho experiência em DevOps, com habilidades em subir aplicações no servidor utilizando Docker, SupervisorD ou PM2. Tenho mais de 4 anos de prática em Linux, incluindo configuração e gerenciamento de servidores, verificações de segurança e automação de processos. Possuo conhecimentos básicos em AWS e GCP e sou capaz de configurar ferramentas de segurança, como o GoTeleport, para fortalecer a proteção de servidores Linux",
    logo: Logo2,
  },
];

export const testimonialsItems = [
  {
    name: "Tony",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Avatar1,
  },
  {
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Avatar2,
  },
  {
    name: "Roddin",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Avatar3,
  },
  {
    name: "Jane",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Avatar4,
  },
];
