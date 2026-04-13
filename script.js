const exercises = [
  {
    category: "HTML/CSS",
    name: "Tuần 1: Ngày 1 - Bài tập 1",
    links: {
      "Bài làm": "ex1/index.html",
      "Mã nguồn":
        "https://github.com/quocnva-09/quocnva-09.github.io/blob/main/ex1/index.html",
      "Hình tham chiếu":
        "https://github.com/quocnva-09/quocnva-09.github.io/blob/main/ex1/de_1.png",
    },
  }
];

const container = document.getElementById("exercise-list");

const grouped = exercises.reduce((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item);
  return acc;
}, {});

container.innerHTML = Object.entries(grouped)
  .map(
    ([categoryName, items]) => `
      <h2>${categoryName}</h2>
      ${items
        .map((item) => {
          const links = Object.entries(item.links)
            .map(
              ([label, url]) => `<a target="_blank" href="${url}">${label}</a>`,
            )
            .join(", ");
          return `<p>- ${item.name}: ${links}.</p>`;
        })
        .join("")}
    `,
  )
  .join("");