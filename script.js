const toggleSwitch = document.querySelector('input[type="checkbox"]')
const toggleIcon = document.getElementById('toggle-icon')
const projects = document.getElementById('projects')
const about = document.getElementById('about')

// Open In Progress Project in New Tab
function openProject() {
  window.open("https://github.com/willdelorm/climbing-app", "_blank");
}

// Open LinkedIn in New Tab
function openLinkedIn() {
  window.open("https://linkedin.com/in/willdelorm", "_blank");
}

// Switch Theme
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'light')
    toggleIcon.children[0].classList.replace("fa-moon", "fa-sun")
    localStorage.setItem('theme', 'light')
  } else {
    document.documentElement.setAttribute('data-theme', '')
    toggleIcon.children[0].classList.replace("fa-sun", "fa-moon");
    localStorage.setItem('theme', 'dark')
  }
}

// Event Listeners
toggleSwitch.addEventListener('change', switchTheme)

window.addEventListener('scroll', () => {
  if (window.scrollY >= 500) {
    projects.children[0].style.backgroundColor = "var(--primary-variant)"
  } else {
    projects.children[0].style.backgroundColor = "var(--background)";
  }

  if (window.scrollY >= 1800) {
    about.children[0].style.backgroundColor = "var(--primary-variant)";
  } else {
    about.children[0].style.backgroundColor = "var(--background)";
  }
})

// Check localStorage for Theme
const currentTheme = localStorage.getItem('theme')
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'light') {
    toggleSwitch.checked = true;
  }
}