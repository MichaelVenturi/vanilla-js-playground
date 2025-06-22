const form = document.getElementById("date-form");
const dateDisplay = document.querySelector("date-display");

form.addEventListener("submit", (e) => {
  const date = new Date(e.target.elements[0].value).getTime();
  const curTime = Date.now();
  console.log(date, curTime);
  getDiff(date, curTime);
});

function getDiff(start, end) {
  const msDiff = end - start;
  const hoursDiff = Math.floor(msDiff / (1000 * 60 * 60));
  console.log(hoursDiff);
}
