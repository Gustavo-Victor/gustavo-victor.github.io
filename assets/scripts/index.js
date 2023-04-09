//elements 
const navMenu = window.document.getElementById("nav__menu"); 
const navLinks = window.document.querySelectorAll(".nav__link"); 
const skillsDataEl = window.document.querySelector(".skills__data"); 
const skillsArr = [
    {id: "html", name: "HTML5", iconClass: "bx bxl-html5 skill__icon", color: "#DD4B25"},
    {id: "css", name: "CSS3", iconClass: "bx bxl-css3 skill__icon", color: "#2862E9"},
    {id: "javascript", name: "JavaScript", iconClass: "bx bxl-javascript skill__icon", color: "#F7DF1E"},
    {id: "reactjs", name: "ReactJS", iconClass: "bx bxl-react skill__icon", color: "#5ED3F3"},
    {id: "typescript", name: "TypeScript", iconClass: "bx bxl-typescript skill__icon", color: "#2F74C0"},
    {id: "bootstrap", name: "Bootstrap", iconClass: "bx bxl-bootstrap skill__icon", color: "#7910F2"},
    {id: "jquery", name: "jQuery", iconClass: "bx bxl-jquery skill__icon", color: "#1066A9"},
    {id: "sass", name: "SASS", iconClass: "bx bxl-sass skill__icon", color: "#C76395"},
    {id: "mongodb", name: "MongoDB", iconClass: "bx bxl-mongodb skill__icon", color: "#118D4D"}
]


//functions 
const showMenu = (navId, toggleId) => {
    const navEl = window.document.getElementById(navId), 
          toggleEl = window.document.getElementById(toggleId);
    
    if(navEl && toggleEl) {
        toggleEl.addEventListener("click", () => {
            navEl.classList.toggle("show"); 
        });
    };
};


function diplayIcons() {
    skillsArr.forEach(iconObj => {
        let skillSingleDiv = window.document.createElement("div");
        skillSingleDiv.setAttribute("id", iconObj.id); 
        skillSingleDiv.setAttribute("class", "skill_single"); 
        
        let iconTitle = window.document.createElement("h3"); 
        iconTitle.textContent = `${iconObj.name}`; 
        
        let iconEl = window.document.createElement("i"); 
        iconEl.setAttribute("class", iconObj.iconClass); 
        
        iconEl.addEventListener("mouseenter", () => {
            iconEl.style.color = iconObj.color;  
        }); 
        
        iconEl.addEventListener("mouseout", () => {
            iconEl.style.color = "#4070f4";  
        }); 
        
        skillSingleDiv.append(iconTitle);
        skillSingleDiv.append(iconEl); 
        
        skillsDataEl.append(skillSingleDiv);         
    });
}

function activeLink() {
    navLinks.forEach(link => {
        link.classList.remove("active"); 
    });
    this.classList.add("active"); 
    navMenu.classList.remove("show"); 
}; 



//event, loops and calls to functions
//menu show 
showMenu("nav__menu", "nav__toggle"); 

//active menu links
navLinks.forEach(link => {
    link.addEventListener("click", activeLink); 
});

//display icons
diplayIcons();


/*
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
*/