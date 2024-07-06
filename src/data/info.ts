import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque unde sapiente harum maiores eligendi, quisquam, labore similique laudantium voluptatum blanditiis eveniet enim. Cupiditate placeat esse, incidunt quo nemo fugiat nulla!`;

export const ABOUT_TEXT = `Sou um estudante de programação dedicado e versável, curioso por aprender e criar aplicações web práticas e fáceis de usar. Posuo conhecimentos em tecnologias como ReactJS, Node.js, MySQL, PostgreSQL e MongoDB tendo desenvolvido diversos projetos. Atualmente busco minha primeira oportunidade na área.`;

export const EXPERIENCES = [
    {
        year: "2023 - Presente",
        role: "Desenvolvedor Full Stack Senior",
        company: "Google Inc.",
        description: `Liderei equipe de desenvolvimento e manutenção de aplicações web utilizando JavaScript, React.js e Node.js. Implementação de APIs RESTful e integração com bancos de dados MongoDB. Colaborou com as partes interessadas para definir os requisitos e cronogramas do projeto.`,
        technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    },
    {
        year: "2022 - 2023",
        role: "Desenvolvedor Front-End",
        company: "Adobe",
        description: `Projetei e desenvolvi interfaces de usuário para aplicações web usando Next.js e React. Trabalhei em estreita colaboração com desenvolvedores de back-end para integrar componentes de front-end com APIs Node.js. Implementou designs responsivos e desempenho de front-end otimizado.`,
        technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
    },
    {
        year: "2021 - 2022",
        role: "Desnvolvedor Full-Stack",
        company: "Facebook",
        description: `Desenvolvi e manti aplicações web usando JavaScript, React.js e Node.js. Projetei e implementei APIs RESTful para comunicação de dados. Colaborei com equipes multifuncionais para entregar produtos de software de alta qualidade dentro do prazo.`,
        technologies: ["Python", "Svelte", "Three.js", "Postgres"],
    },
    // {
    //     year: "2020 - 2021",
    //     role: "Software Engineer",
    //     company: "Paypal",
    //     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    //     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
    // },
];

export const PROJECTS = [
    {
        title: "Kanban App",
        image: project1,
        description:
            "Uma aplicação para gerenciar tarefas do dia a dia, com funcionalides como criação, mudança de status, exclusão e alternação de tema da aplicação.",
        technologies: ["HTML", "TailwindCSS", "React"],
        repositoryURL: "https://github.com/Gustavo-Victor/kanban-app",
        projectURL: "https://kanban-app-five-fawn.vercel.app/"
    },
    {
        title: "ReactGram",
        image: project2,
        description:
            "Uma aplicação fullstack que simula algumas funcionalidades principais de uma rede social como gerenciamento de perfis, posts, likes, comentários, etc.",
        technologies: ["HTML", "CSS", "React", "Redux", "MongoDB", "Node.js", "Express", "JWT"],
        repositoryURL: "https://github.com/Gustavo-Victor/reactgram",
        projectURL: "https://reactgram-4yia.onrender.com/login"
    },
    {
        title: "Get a Pet",
        image: project3,
        description:
            "Aplicação fullstack que simula um sistema de adoção de pets, com funcionalidades como gerenciamento de usuários, pets, agendamento para adoção, entre outras.",
        technologies: ["HTML", "CSS", "React", "MongoDB", "Node.js", "Express", "JWT"],
        repositoryURL: "https://github.com/Gustavo-Victor/get-a-pet",
        projectURL: "https://get-a-pet-mpw4.onrender.com/"
    },
    {
        title: "Dev Finances",
        image: project4,
        description:
            "Sistema de gerenciamento de rendas e despesas do mês.",
        technologies: ["HTML", "CSS", "JS"],
        repositoryURL: "https://github.com/Gustavo-Victor/dev-finances",
        projectURL: "https://gustavo-victor.github.io/dev-finances"
    },
    {
        title: "Thoughts",
        image: project4,
        description:
            "Uma plataforma para cadastro e gerenciamento de ideias de usuários sobre algum tema.",
        technologies: ["HTML", "CSS", "PostgreSQL", "Node.js", "Express", "Handlebars"],
        repositoryURL: "https://github.com/Gustavo-Victor/thoughts",
        projectURL: "https://thoughts-7avl.onrender.com/"
    },
    {
        title: "JS Calculator",
        image: project4,
        description:
            "Aplicação React com TypeScript que simula algumas funcionalidades principais de uma calculadora.",
        technologies: ["HTML", "SASS", "TypeScript", "React"],
        repositoryURL: "https://github.com/Gustavo-Victor/js-calculator",
        projectURL: "https://js-calculator-mu-five.vercel.app/"
    },
];

export const CONTACT = {
    address: "Rua das Primaveras, 380, Parque Internacional",
    phoneNo: "+55 (11) 96982-0391 / +55 (11) 95960-7447",
    email: "gustavovbs270@gmail.com",
};
