const ratingText = document.querySelector(".rating-text");
const stars = document.querySelectorAll(".star-box");

function updateText(index) {
  let text = "stars";
  if (index === 4) text = "star";
  ratingText.innerText = `${4 - index + 1} ${text}`;
}

stars.forEach((star, index) => {
  star.addEventListener("change", () => updateText(index));
});
