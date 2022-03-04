// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navBlock = document.querySelector(".links");
const toggleBtn = document.querySelector(".nav-toggle");

toggleBtn.addEventListener("click", () => {
  navBlock.classList.toggle("show-links");
});
