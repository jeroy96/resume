let home = document.querySelector(".home");
let projects = document.querySelector(".projects");
let skills = document.querySelector(".skills");

home.addEventListener('click', () => {
    home.classList.add = 'active';
    home.classList.remove = 'white';
    projects.classList.add = 'white';
    projects.classList.remove = 'active';
    skills.classList.add = 'white';
    skills.classList.remove = 'active';
});

projects.addEventListener('click', () => {
    home.classList.add = 'white';
    home.classList.remove = 'active';
    projects.classList.add = 'active';
    projects.classList.remove = 'white';
    skills.classList.add = 'white';
    skills.classList.remove = 'active';
});

skills.addEventListener('click', () => {
    home.classList.add = 'white';
    home.classList.remove = 'active';
    projects.classList.add = 'white';
    projects.classList.remove = 'active';
    skills.classList.add = 'active';
    skills.classList.remove = 'white';
});