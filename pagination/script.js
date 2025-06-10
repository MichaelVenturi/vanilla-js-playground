const data = [
  {
    id: 1,
    text: "item 1",
  },
  {
    id: 2,
    text: "item 2",
  },
  {
    id: 3,
    text: "item 3",
  },
  {
    id: 4,
    text: "item 4",
  },
  {
    id: 5,
    text: "item 5",
  },
  {
    id: 6,
    text: "item 6",
  },
  {
    id: 7,
    text: "item 7",
  },
  {
    id: 8,
    text: "item 8",
  },
  {
    id: 9,
    text: "item 9",
  },
];

const dataSize = data.length;
const pageSize = 3;
const totalPages = Math.ceil(dataSize / 3);
let curPage = 1;

const paginationBox = document.querySelector(".pagination");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const pageCounter = document.getElementById("page-counter");

const init = () => {
  prevButton.disabled = true;
  if (totalPages === 1) {
    nextButton.disabled = true;
  }
  loadItems(0, Math.min(dataSize, pageSize));
};

const loadItems = (start, end) => {
  prevButton.disabled = curPage === 1;
  nextButton.disabled = curPage === totalPages;
  pageCounter.innerText = `${curPage} / ${totalPages}`;
  paginationBox.innerHTML = `
        ${data
          .slice(start, end)
          .map(
            (item) => `<p class="item" id="item-${item.id}">${item.text}</p>`
          )
          .join("")}
    `;
};

const prevPage = () => {
  if (curPage === 1) return;
  curPage--;
  const startIndex = (curPage - 1) * pageSize;
  loadItems(startIndex, startIndex + pageSize);
};
const nextPage = () => {
  if (curPage === totalPages) return;
  curPage++;
  const startIndex = (curPage - 1) * pageSize;
  loadItems(startIndex, startIndex + pageSize);
};

prevButton.addEventListener("click", prevPage);
nextButton.addEventListener("click", nextPage);

window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft") prevPage();
  if (e.key === "ArrowRight") nextPage();
});

init();
