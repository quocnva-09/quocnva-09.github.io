const exercises = [
{
    category: "HTML/CSS",
    name: "Tuần 1: Ngày 1 - Bài tập 1",
    links: {
      "Bài làm": "ex1/",
      "Mã nguồn":
        "https://github.com/quocnva-09/quocnva-09.github.io/tree/main/ex1",
      "Hình tham chiếu":
        "https://github.com/quocnva-09/quocnva-09.github.io/blob/main/ex1/de_1.jpg?raw=true",
    }
  },
  {
    category: "HTML/CSS",
    name: "Tuần 1: Ngày 2 - Bài tập 2",
    links: {
      "Bài làm": "ex2/",
      "Mã nguồn":
        "https://github.com/quocnva-09/quocnva-09.github.io/tree/main/ex2",
      "Hình tham chiếu":
        "https://github.com/quocnva-09/quocnva-09.github.io/blob/main/ex2/de_2.jpg?raw=true",
    }
  },
  {
    category: "HTML/CSS",
    name: "Tuần 1: Ngày 2 - Bài tập 3",
    links: {
      "Bài làm": "ex3/",
      "Mã nguồn":
        "https://github.com/quocnva-09/quocnva-09.github.io/tree/main/ex3",
      "Hình tham chiếu":
        "https://github.com/quocnva-09/quocnva-09.github.io/blob/main/ex3/de_3.jpg?raw=true",
    }
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