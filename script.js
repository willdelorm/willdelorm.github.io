const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById("toggle-icon");
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");
const images = Array.from(document.querySelectorAll("img"));

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

// Open Github Profile in New Tab
function openGithub() {
  window.open("https://github.com/willdelorm", "_blank");
}

// Toggle Display of Menu on Mobile
function toggleMenu() {
  navMenu.style.display = navMenu.style.display === "none" ? "block" : "none";
}

// Event Listeners
toggleSwitch.addEventListener("change", switchTheme);
menuIcon.addEventListener("click", toggleMenu);
