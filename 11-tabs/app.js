const tabBtns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const about = document.querySelector(".about");

// John smilgas way of doing

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  if (id) {
    tabBtns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
  }

  articles.forEach((article) => {
    article.classList.remove("active");
  });

  const element = document.getElementById(id);
  element.classList.add("active");
});

// My way of doing

// tabBtns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     tabBtns.forEach((btn) => {
//       if (btn.classList.contains("active")) {
//         btn.classList.remove("active");
//       }
//     });
//     e.currentTarget.classList.add("active");
//     let data = e.currentTarget.dataset.id;
//     tabContent(data);
//   });
// });

// function tabContent(tab) {
//   contents.forEach((content) => {
//     content.classList.remove("active");
//     if (tab == content.id) {
//       content.classList.add("active");
//       console.dir(content);
//     }
//   });
// }
