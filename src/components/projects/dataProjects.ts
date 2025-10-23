import { StaticImageData } from "next/image";
import Vivo from "@/assets/vivo.jpg";
import LTD from "@/assets/LTD.png";
import Livelo from "@/assets/livelo.png";
import Yamalog from "@/assets/yamalog.jpg";
import RealDistribuidora from "@/assets/real_distribuidora.jpg";
import SelectLog from "@/assets/shellSelect.jpg";
import MyPharma from "@/assets/mypharma.webp";
import BrasilCard from "@/assets/brasilcard.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  technologies: string[];
  details: string;
  link: string;
}

 export const projects: Project[] = [
  {
    id: 1,
    title: "LTD Comodities",
    description:
      "Desenvolvi soluções Front-End para e-commerce no projeto LTD Commodities, utilizando Oracle Storefront Framework (OSF) e Oracle CX Commerce, combinando essas tecnologias com React, React Hooks e Redux, o que garantiu a escalabilidade da plataforma.",
    image: LTD,
    technologies: [
      "html",
      "css",
      "js",
      "react",
      "Jira",
      "GitHub",
      "Git",
      "Oracle",
    ],
    details: `LTD Comodities era um cliente da Compass.uol, consultoria que atuei por 4 anos, meu papel nesse cliente foi Desenvolver soluções Front-End para e-commerce utilizando Oracle Storefront Framework (OSF) e Oracle CX Commerce, combinados com React, React Hooks e Redux, garantindo a escalabilidade da plataforma. Atuei criando interfaces dinâmicas e de alta performance utilizando JavaScript, React.js, HTML5 e CSS, aplicando o Design System da empresa para garantir consistência visual e uma experiência de usuário otimizada. Participei de equipes multidisciplinares utilizando metodologias ágeis, gerenciando o progresso de tarefas no Jira e controle de versão do código com Git e Bitbucket.`,
    link: "https://www.ltdcommodities.com/",
  },
  {
    id: 2,
    title: "Livelo",
    description:
      "Desenvolvi soluções Front-End para e-commerce no projeto Livelo utilizando Oracle Storefront Framework (OSF) e Oracle CX Commerce, combinando essas tecnologias com Knockout, React, jest, React Testing Library, React Hooks e Redux.",
    image: Livelo,
    technologies: [
      "html",
      "css",
      "js",
      "react",
      "Jira",
      "GitHub",
      "Git",
      "Oracle",
      "Jest",
      "Jquery",
    ],
    details: `Livelo era um cliente da Compass.uol, consultoria que atuei por 4 anos, meu papel nesse cliente foi Desenvolver soluções Front-End para e-commerce utilizando Oracle Storefront Framework (OSF) e Oracle CX Commerce, combinados com knockout, Jquery, React, React Testing Library, React Hooks e Redux, garantindo a escalabilidade da plataforma. Atuei criando interfaces dinâmicas e de alta performance utilizando JavaScript, React.js, HTML5 e CSS, aplicando o Design System da empresa para garantir consistência visual e uma experiência de usuário otimizada. Participei de equipes multidisciplinares utilizando metodologias ágeis, gerenciando o progresso de tarefas no Jira e controle de versão do código com Git e Bitbucket.`,
    link: "https://www.livelo.com.br/shopping",
  },
  {
    id: 3,
    title: "Vivo Empresas",
    description:
      "Desenvolvi soluções Back end e Front-End para e-commerce no projeto Vivo Empresas, utilizando Adobe Expirience Manager (AEM) combinando essas tecnologias com Java, Vue.js e React.js, o que garantiu a escalabilidade do ecommerce B2B.",
    image: Vivo,
    technologies: [
      "html",
      "css",
      "Java",
      "js",
      "react",
      "Jira",
      "Azure",
      "Git",
      "Jest",
    ],
    details: `Vivo Empresas era um cliente da Compass.uol, consultoria que atuei por 4 anos, meu papel nesse cliente foi Desenvolver soluções Back end e Front-End para e-commerce utilizando Adobe Expirience Manager (AEM) combinando essas tecnologias com Java, Vue.js e React.js, o que garantiu a escalabilidade do ecommerce B2B. Atuei customizando o painel de usuário do gerenciador de conteúdo (AEM) e criando e editando modelos de produtos e conteúdo utilizando o Java, Sling, OSGI, etc, e no front atuei criando e editando componentes para as páginas. Participei de equipes multidisciplinares utilizando metodologias ágeis, gerenciando o progresso de tarefas no Jira e controle de versão do código com Git e Azure.`,
    link: "https://vivo.com.br/para-empresas",
  },
  {
    id: 4,
    title: "Shell SelectLog",
    description:
      "Desenvolvi soluções Front-End para e-commerce B2B no projeto Shell SelectLog, utilizando Oracle Storefront Framework (OSF) e Oracle CX Commerce, combinando essas tecnologias com React, React Hooks e Redux, o que garantiu a escalabilidade da plataforma.",
    image: SelectLog,
    technologies: [
      "html",
      "css",
      "js",
      "react",
      "Jira",
      "GitHub",
      "Git",
      "Oracle",
    ],
    details: `Shell SelectLog era um cliente da Compass.uol, consultoria que atuei por 4 anos, meu papel nesse cliente foi Desenvolver soluções Front-End para e-commerce utilizando Oracle Storefront Framework (OSF) e Oracle CX Commerce, combinados com React, React Hooks e Redux, garantindo a escalabilidade da plataforma. Atuei criando interfaces dinâmicas e de alta performance utilizando JavaScript, React.js, HTML5 e CSS, aplicando o Design System da empresa para garantir consistência visual e uma experiência de usuário otimizada. Participei de equipes multidisciplinares utilizando metodologias ágeis, gerenciando o progresso de tarefas no Jira e controle de versão do código com Git e Bitbucket.`,
    link: "https://www.shellselectlog.com.br/login",
  },
  {
    id: 5,
    title: "Norte Sul Real Distribuidora",
    description:
      "Desenvolvi soluções Front-End para e-commerce B2B no projeto Norte Sul Real Distribuidora, utilizando Oracle Storefront Framework (OSF) e Oracle CX Commerce, combinando essas tecnologias com React, React Hooks e Redux, o que garantiu a escalabilidade da plataforma.",
    image: RealDistribuidora,
    technologies: [
      "html",
      "css",
      "js",
      "react",
      "Jira",
      "GitHub",
      "Git",
      "Oracle",
    ],
    details: `Norte Sul Real Distribuidora era um cliente da Compass.uol, consultoria que atuei por 4 anos, meu papel nesse cliente foi Desenvolver soluções Front-End para e-commerce utilizando Oracle Storefront Framework (OSF) e Oracle CX Commerce, combinados com React, React Hooks e Redux, garantindo a escalabilidade da plataforma. Atuei criando interfaces dinâmicas e de alta performance utilizando JavaScript, React.js, HTML5 e CSS, aplicando o Design System da empresa para garantir consistência visual e uma experiência de usuário otimizada. Participei de equipes multidisciplinares utilizando metodologias ágeis, gerenciando o progresso de tarefas no Jira e controle de versão do código com Git e Bitbucket.`,
    link: "https://www.nortesulreal.com.br/",
  },
  {
    id: 6,
    title: "Yamalog",
    description:
      "Atuei no desenvolvimento do site institucional da yamalog da empresa yamaha utilizando Oracle Storefront Framework (OSF) e Oracle CX Commerce, combinando essas tecnologias com React, React Hooks e Redux.  ",
    image: Yamalog,
    technologies: [
      "html",
      "css",
      "js",
      "react",
      "Jira",
      "GitHub",
      "Git",
      "Oracle",
    ],
    details: `Yamalog era um cliente da Compass.uol, consultoria que atuei por 4 anos, meu papel nesse cliente foi Desenvolver o site institucional utilizando Oracle Storefront Framework (OSF) e Oracle CX Commerce, combinados com React, React Hooks e Redux. Atuei criando interfaces dinâmicas e de alta performance utilizando JavaScript, React.js, HTML5 e CSS, aplicando o Design System da empresa para garantir consistência visual e uma experiência de usuário otimizada. Participei de equipes multidisciplinares junto ao cliente utilizando metodologias ágeis, gerenciando o progresso de tarefas no Jira e controle de versão do código com Git e Bitbucket.`,
    link: "https://www.yamalog.com.br/",
  },
  {
    id: 7,
    title: "MyPharma / Farmácias E-commerce | By GrupoSC",
    description:
      "Atuei no Suporte e integração de banco de dados na Farmácias E-commerce | By GrupoSC que na época era a MyPharma,",
    image: MyPharma,
    technologies: [
      "html",
      "css",
      "js",
      "react",
      "Jira",
      "GitHub",
      "Git",
      "MySql",
    ],
    details: `A MyPharma é um ecommerce de fármacia,  eu atuei fornecendo suporte técnico de alta qualidade, solucionando bugs de forma ágil e garantindo a estabilidade do sistema, assegurando o pleno funcionamento da plataforma, integrando bancos de dados locais com o site de e-commerce, garantindo a consistência e atualização eficiente dos dados, utilizando as melhores práticas de integração e segurança, desenvolvendo consultas SQL para integração entre o site e sistemas de farmácias físicas, utilizando MySQL, PostgreSQL e Firebird, assegurando troca segura de dados e aplicando metodologias ágeis no desenvolvimento de novos recursos e melhorias contínuas, garantindo entregas rápidas, consistentes e dentro dos prazos estabelecidos.`,
    link: "https://admin.mypharma.com.br/",
  },
  {
    id: 8,
    title: "BrasilCard / Grupo Adriano Cobuccio",
    description:
      "Atuo como desenvolvedor Front-End em uma plataforma digital voltada para a análise e administração de crédito ao consumidor no grupo Adriano Cobuccio para o banco digital brasilCard.",
    image: BrasilCard,
    technologies: [
      "html",
      "css",
      "js",
      "react",
      "Jira",
      "GitHub",
      "Git",
      "Azure",
    ],
    details: `Atuo como Desenvolvedor Front-End em uma plataforma digital voltada para a análise e administração de crédito ao consumidor. Sou responsável por desenvolver interfaces modernas, responsivas e de alta performance, garantindo uma experiência fluida e intuitiva para os usuários finais. Utilizo tecnologias como React.js, Next.js, JavaScript, TypeScript, Git e Azure para construir soluções escaláveis e integradas, alinhadas às melhores práticas de desenvolvimento e usabilidade. Trabalho em colaboração com times multidisciplinares, focando em qualidade de código, manutenabilidade e entregas ágeis. Sempre em busca de inovação, busco unir performance e design para transformar requisitos complexos em aplicações eficientes e acessíveis.`,
    link: "https://www.brasilcard.net/",
  },
];
