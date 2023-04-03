//projects section
const projectsGrid = window.document.querySelector(".projects-grid");

//data
const projects = [
    {
        title: "Dev Finances",
        image: "./assets/images/devfinances.webp",
        url: "https://github.com/Gustavo-Victor/dev-finances/"
    },
    {
        title: "Quote Machine",
        image: "./assets/images/quote-machine.webp",
        url: "https://github.com/Gustavo-Victor/quote-machine/"
    },
    {
        title: "Markdown Previewer",
        image: "./assets/images/markdown-previewer.webp",
        url: "https://github.com/Gustavo-Victor/markdown-previewer/"
    },
    {
        title: "JS Calculator",
        image: "./assets/images/js-calculator.webp",
        url: "https://github.com/Gustavo-Victor/js-calculator/"
    },
    {
        title: "Github Finder",
        image: "./assets/images/github-finder.webp",
        url: "https://github.com/Gustavo-Victor/github-finder/"
    },
    {
        title: "Pomodoro Clock",
        image: "./assets/images/pomodoro-clock.webp",
        url: "https://github.com/Gustavo-Victor/pomodoro-clock/"
    }
];

//display projects
projects.forEach((project, index) => {
    let proj = document.createElement('a');
    proj.setAttribute('class', "project project-tile");
    proj.setAttribute("href", project.url);
    proj.setAttribute("target", "_blank");

    let proj_img = document.createElement("img");
    proj_img.setAttribute("class", "project-image");
    proj_img.setAttribute("src", project.image);
    proj_img.setAttribute("alt", project.title);
    proj_img.setAttribute("title", project.title);

    let proj_p = document.createElement("p");
    proj_p.setAttribute("class", "project-title");
    proj_p.textContent = project.title;

    proj.append(proj_img);
    proj.append(proj_p);

    projectsGrid.append(proj);
})