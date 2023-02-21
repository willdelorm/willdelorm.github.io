const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById("toggle-icon");
const heroImg = document.getElementById("hero");
const projectsHeader = document.getElementById("projects");
const images = Array.from(document.querySelectorAll("img"));
const about = document.getElementById("about");
const contact = document.getElementById("contact");

// Open In Progress Project in New Tab
function openProject() {
  window.open("https://github.com/willdelorm/climbing-app", "_blank");
}

// Open LinkedIn in New Tab
function openLinkedIn() {
  window.open("https://linkedin.com/in/willdelorm", "_blank");
}

// Switch Theme on Images
function switchImageTheme(theme) {
  let newSrc = "";
  images.forEach((img) => {
    theme === "primary"
      ? (img.src = img.src.replace("secondary", "primary"))
      : (img.src = img.src.replace("primary", "secondary"));
  });
}

// Switch Theme
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
    toggleIcon.children[0].classList.replace("fa-moon", "fa-sun");
    switchImageTheme("secondary");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "");
    toggleIcon.children[0].classList.replace("fa-sun", "fa-moon");
    switchImageTheme("primary");
    localStorage.setItem("theme", "dark");
  }
}

// Event Listeners
window.addEventListener("scroll", () => {
  if (window.scrollY >= 500) {
    projectsHeader.children[0].style.backgroundColor = "var(--primary-variant)";
  } else {
    projectsHeader.children[0].style.backgroundColor = "var(--background)";
  }

  if (window.scrollY >= 1700) {
    about.children[0].style.backgroundColor = "var(--primary-variant)";
  } else {
    about.children[0].style.backgroundColor = "var(--background)";
  }
});

toggleSwitch.addEventListener("change", switchTheme);

// Check localStorage for Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "light") {
    toggleSwitch.checked = true;
  }
}
