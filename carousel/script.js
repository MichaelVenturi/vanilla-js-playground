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
let curIndex = 0;

const leftBox = document.getElementById("left");
const middleBox = document.getElementById("middle");
const rightBox = document.getElementById("right");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

const loadItems = () => {
  if (curIndex === -1) curIndex = dataSize - 1;
  if (curIndex === dataSize) curIndex = 0;
  const left = curIndex === 0 ? dataSize - 1 : curIndex - 1;
  const right = curIndex === dataSize - 1 ? 0 : curIndex + 1;
  leftBox.innerHTML = itemHTML(data[left]);
  middleBox.innerHTML = itemHTML(data[curIndex]);
  rightBox.innerHTML = itemHTML(data[right]);
};

const itemHTML = (item) => {
  return `<span id="${item.id}">${item.text}</span>`;
};

prevButton.addEventListener("click", () => {
  curIndex--;
  loadItems();
});
nextButton.addEventListener("click", () => {
  curIndex++;
  loadItems();
});

loadItems();
