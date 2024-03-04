
const projects = [
    { name: "Jumping Letters" },
    { name: "Notification Bell" },
    { name: "Scroll Indicator" },
    { name: "Pet Adoption" },
    { name: "Calculator" },
    { name: "Everyday" }
];

{
    document.body.style.backgroundImage = "url('./assets/images/bg.jpg')";
    }

function populateProjects() {
    const projectsList = document.getElementById('projects');
    projects.forEach((project, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = project.name;
        listItem.classList.add(`project${index + 1}`); 
        projectsList.appendChild(listItem);
    });
}

window.onload = populateProjects;


