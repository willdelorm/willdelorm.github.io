const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById("toggle-icon");
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");
const heroImg = document.getElementById("hero");
const projects = document.getElementById("projects");
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
  } else {
    document.documentElement.setAttribute("data-theme", "");
    toggleIcon.children[0].classList.replace("fa-sun", "fa-moon");
    switchImageTheme("primary");
  }
}

// Toggle Display of Menu on Mobile
function toggleMenu() {
  navMenu.style.display = navMenu.style.display === "none" ? "block" : "none";
}

// Event Listeners
window.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight / 2 >= projects.offsetTop) {
    projects.children[0].style.backgroundColor = "var(--primary-variant)";
  } else {
    projects.children[0].style.backgroundColor = "var(--background)";
  }

  if (window.scrollY + window.innerHeight / 2 >= about.offsetTop) {
    about.children[0].style.backgroundColor = "var(--primary-variant)";
  } else {
    about.children[0].style.backgroundColor = "var(--background)";
  }
});

toggleSwitch.addEventListener("change", switchTheme);

menuIcon.addEventListener("click", toggleMenu);
