// const value = document.querySelector("#value");
// let counter = 0;
// const btns = document.querySelectorAll(".btn");
// const btnIncrease = document.querySelector(".increase");
// const btnDecrease = document.querySelector(".decrease");
// const btnReset = document.querySelector(".reset");

// /* Advanced Way */

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const styles = e.currentTarget.classList;

//     if (styles.contains("increase")) {
//       counter++;
//     } else if (styles.contains("decrease")) {
//       counter--;
//     } else {
//       counter = 0;
//     }
//     console.log(counter);

//     value.textContent = counter;

//     if (counter > 0) {
//       value.style.color = "green";
//     } else if (counter < 0) {
//       value.style.color = "red";
//     } else {
//       value.style.color = "#112A42";
//     }
//   });
// });

// // OLD WAY

// // btnIncrease.addEventListener("click", () => {
// //   counter++;
// //   value.textContent = counter;
// //   checkStatus();
// // });

// // btnReset.addEventListener("click", () => {
// //   counter = 0;
// //   value.textContent = counter;
// //   checkStatus();
// // });

// // btnDecrease.addEventListener("click", () => {
// //   counter--;
// //   value.textContent = counter;
// //   checkStatus();
// // });

// // function checkStatus() {
// //   if (value.textContent > 0) {
// //     value.style.color = "green";
// //   } else if (value.textContent < 0) {
// //     value.style.color = "red";
// //   } else {
// //     value.style.color = "#112A42";
// //   }
// // }
