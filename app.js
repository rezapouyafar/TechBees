// Scroll to top
// push test
const scrolltp = document.querySelector("#scrolltp");
scrolltp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", function () {
  if (window.scrollY >= 700) {
    scrolltp.style.opacity = 1;
  } else {
    scrolltp.style.opacity = 0;
  }
});

// Theme

const themeToggle = document.querySelector(".checkbox");
const body = document.querySelector("body");
const darkmode = localStorage.getItem("dark");

if (darkmode) {

  // Get Dark mode from local storage
  body.classList.add("dark");
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", function () {
  body.classList.toggle("dark");
    
  //  Set Local storage for Dark Mode
  if (body.classList.contains("dark")) {
    localStorage.setItem("dark", "active");
  } else {
    localStorage.removeItem("dark");
  }
});
