var progressBars = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementById("skills-container");
window.addEventListener("scroll", checkScroll);
var animationDone = false;

function initialiseBars() {
  for (let bar of progressBars) {
    bar.style.width = 0 + "%";
  }
}

initialiseBars();

function fillBars() {
  for (let bar of progressBars) {
    let targetWidth = bar.getAttribute("data-bar-width");
    let currentWidth = 0;
    let interval = setInterval(function () {
      if (currentWidth > targetWidth) {
        clearInterval(interval);
        return;
      }
      currentWidth++;
      bar.style.width = currentWidth + "%";
    }, 15);
  }
}

function checkScroll() {
  var coordinates = skillsContainer.getBoundingClientRect();
  if (!animationDone && coordinates.top <= window.innerHeight) {
    animationDone = true;
    fillBars();
  } else if (coordinates.top > window.innerHeight) {
    animationDone = false;
    initialiseBars();
  }
}

const skills = [
  {
    name: "JavaScript",
    percentage: 95,
    className: "ninety-five-percent mb-orange",
  },
  {
    name: "TypeScript",
    percentage: 95,
    className: "ninety-five-percent mb-blue",
  },

  { name: "Next.js", percentage: 90, className: "ninety-percent mb-teal" },
  {
    name: "React.js",
    percentage: 95,
    className: "ninety-five-percent mb-light-purple",
  },
  {
    name: "Bootstrap",
    percentage: 90,
    className: "ninety-percent mb-teal",
  },
  {
    name: "Tailwind",
    percentage: 85,
    className: "eighty-five-percent mb-light-purple",
  },
  {
    name: "Node.js",
    percentage: 75,
    className: "seventy-five-percent mb-blue",
  },
  { name: "Express.js", percentage: 70, className: "seventy-percent mb-orange" },
  { name: "Redux", percentage: 90, className: "ninety-percent mb-blue" },
  { name: "Java", percentage: 75, className: "seventy-five-percent mb-teal" },
  { name: "DSA", percentage: 85, className: "eighty-five-percent mb-orange" },
  {
    name: "SQL",
    percentage: 50,
    className: "fifty-percent mb-light-purple",
  },
  { name: "MongoDB", percentage: 60, className: "sixty-percent mb-orange" },
  { name: "RDS", percentage: 80, className: "eighty-percent mb-light-purple" },

  { name: "AWS", percentage: 85, className: "eighty-five-percent mb-blue" },
  { name: "Docker", percentage: 90, className: "ninety-percent mb-teal" },
  { name: "CI/CD", percentage: 90, className: "ninety-percent mb-light-purple" },
  { name: "Git", percentage: 95, className: "ninety-five-percent mb-orange" },
  {
    name: "Linux/CLI",
    percentage: 75,
    className: "seventy-five-percent mb-teal",
  },

  {
    name: "Amazon CloudWatch",
    percentage: 85,
    className: "seventy-five-percent mb-blue",
  },
  {
    name: "Logging/Metrics",
    percentage: 75,
    className: "seventy-five-percent mb-teal",
  },

  {
    name: "API integration",
    percentage: 95,
    className: "ninety-five-percent mb-blue",
  },
  { name: "Versioning", percentage: 90, className: "ninety-percent mb-light-purple" },
  {
    name: "Postman",
    percentage: 95,
    className: "eighty-five-percent mb-orange",
  },
  { name: "Jest", percentage: 50, className: "fifty-percent mb-blue" },
  { name: "Playwright", percentage: 50, className: "fifty-percent mb-orange" },
  {
    name: "React Testing Library",
    percentage: 50,
    className: "fifty-percent mb-teal",
  },
];

function renderSkills() {
  const container = document.getElementById("skills-container");
  skills.forEach((skill) => {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill-progress");

    skillDiv.innerHTML = `
      <div class="${skill.className}" data-bar-width="${skill.percentage}">
        <div class="skill-name">
          <span>${skill.name}</span>
        </div>
      </div>
    `;
    container.appendChild(skillDiv);
  });
}

document.addEventListener("DOMContentLoaded", renderSkills);
