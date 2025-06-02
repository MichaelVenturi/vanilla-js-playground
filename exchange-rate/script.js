const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swapButton = document.getElementById("swap");

const API_KEY = "bupkis";

const calculate = () => {
  const valueOne = currencyOne.value;
  const valueTwo = currencyTwo.value;

  fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${valueOne}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const rate = data.conversion_rates[valueTwo];
      rateEl.innerText = `1 ${valueOne} = ${rate} ${valueTwo}`;

      amountTwo.value = (amountOne.value * rate).toFixed(2);
    });
};

currencyOne.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
currencyTwo.addEventListener("change", calculate);
amountTwo.addEventListener("input", calculate);

swapButton.addEventListener("click", () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
});

calculate();
