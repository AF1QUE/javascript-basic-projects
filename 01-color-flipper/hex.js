const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("button");
const colorName = document.querySelector(".color");
const body = document.body;

btn.addEventListener("click", () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let rand = Math.floor(Math.random() * hex.length);
    color += hex[rand];
  }

  body.style.backgroundColor = color;
  colorName.textContent = color;
});
