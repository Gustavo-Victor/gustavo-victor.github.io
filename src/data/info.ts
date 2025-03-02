import project1 from "../assets/projects/kanban-app-image.png";
// import project2 from "../assets/projects/secret-word-game-image.png";
// import project3 from "../assets/projects/get-a-pet-image.png";
import project4 from "../assets/projects/dev-finances-image.png";
import project5 from "../assets/projects/thoughts-image.png";
import project6 from "../assets/projects/js-calculator-image.png";
import project7 from "../assets/projects/cultivation.png"; 
import project8 from "../assets/projects/drum-machine.png";
import project9 from "../assets/projects/imovi.png"


export const HERO_CONTENT = `Estudo e desenvolvo sites e aplicações web com e sem código.`;

export const ABOUT_TEXT = `Sou um estudante de programação dedicado e um pouco curioso para aprender e criar aplicações web práticas e fáceis de usar. Posuo conhecimentos em tecnologias como ReactJS, Node.js, MySQL, PostgreSQL e MongoDB tendo desenvolvido diversos projetos. Atualmente busco minha primeira oportunidade na área.`;

export const ABOUT_INFO = [
    "❤️ Entusiasta da programação e tecnologia",
    "💻 Aplicações, interfaces e APIS com programação e Wordpress",
    "🔨 Projetos otimizados",
    // "🧑‍🎓  Cursando análise e desenvolvimento de sistemas",
    "🎨 Alta fidelidade no layout", 
    // "🚀  Em busca de primeira oportunidade como dev"
]

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
            "Uma aplicação para gerenciar tarefas do dia a dia, com funcionalides como criação, mudança de status, exclusão da tarefa, entre outras.",
        technologies: ["TailwindCSS", "React", "LocalStorage"],
        repositoryURL: "https://github.com/Gustavo-Victor/kanban-app",
        projectURL: "https://kanban-app-five-fawn.vercel.app/"
    },
    {
        title: "Cultivation",
        image: project7,
        description:
            "Blog em Wordpress sobre cultivo de plantas verticais em espaços pequenos.",
        technologies: ["Wordpress", "Elementor", "Astra", "Contact Form 7", "Rank Math SEO"],
        // repositoryURL: "https://github.com/Gustavo-Victor/secret-word-game",
        projectURL: "https://cultivation.com.br"
    },
    {
        title: "Drum Machine",
        image: project8,
        description:
            "Aplicação React que permite ao usuário reproduzir sons de bateria e outros instrumentos musicais.",
        technologies: ["SASS", "React", "Redux"],
        repositoryURL: "https://github.com/Gustavo-Victor/drum-machine",
        projectURL: "https://drum-machine-sage-five.vercel.app/"
    },
    {
        title: "Dev Finances",
        image: project4,
        description:
            "Sistema de gerenciamento de rendas e despesas do mês.",
        technologies: ["HTML", "CSS", "JavaScript"],
        repositoryURL: "https://github.com/Gustavo-Victor/dev-finances",
        projectURL: "https://gustavo-victor.github.io/dev-finances"
    },
    {
        title: "Thoughts",
        image: project5,
        description:
            "Uma plataforma para cadastro e gerenciamento de ideias de usuários sobre qualquer tema.",
        technologies: ["PostgreSQL", "Node.js", "Express", "Handlebars"],
        repositoryURL: "https://github.com/Gustavo-Victor/thoughts",
        projectURL: "https://thoughts-7avl.onrender.com/"
    },
    {
        title: "JS Calculator",
        image: project6,
        description:
            "Aplicação que simula algumas funcionalidades principais de uma calculadora.",
        technologies: ["SASS", "React", "TypeScript"],
        repositoryURL: "https://github.com/Gustavo-Victor/js-calculator",
        projectURL: "https://js-calculator-mu-five.vercel.app/"
    },
    {
        title: "iMovi",
        image: project9,
        description:
            "Site institucional sobre uma marca fictícia do ramo de imóveis.",
        technologies: ["HTML", "CSS", "Bootstrap"],
        repositoryURL: "https://github.com/Gustavo-Victor/imovi",
        projectURL: "https://gustavo-victor.github.io/imovi"
    },
];

export const CONTACT = {
    address: "Campo Limpo Paulista, SP - 13232-550",
    phoneNo: "11 96982-0391 / 11 95960-7447",
    email: "gustavovbs270@gmail.com",
};
