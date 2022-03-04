const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector("button");
const colorName = document.querySelector(".color");
const body = document.body;

btn.addEventListener("click", () => {
  let rand = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[rand];
  colorName.textContent = colors[rand];
});
