const cardInputs = document.querySelectorAll(".card-input");
const dateInputs = document.querySelectorAll(".date");
const cvcInput = document.querySelector(".cvc-input");
const confirmBtn = document.querySelector(".confirm");
const errorSpans = document.querySelectorAll(".error-span");
const numberError = document.getElementById("number-error");
const cardNumberInput = document.querySelector("#card-num-input");
let thankYouWindow = false;

confirmBtn.addEventListener("click", () => {
  let isError = false;
  cardInputs.forEach((item, index) => {
    if (item.value === "") {
      item.classList.add("wrong-format");
      errorSpans[index].classList.add("active-span");
      numberError.classList.remove("active-span");

      isError = true;
    } else {
      item.classList.remove("wrong-format");
      errorSpans[index].classList.remove("active-span");
    }
  });

  if (isNaN(cardNumberInput.value)) {
    thankYouWindow = false;
    numberError.classList.add("active-span");
  } else {
    numberError.classList.remove("active-span");
    thankYouWindow = true;
  }
  if (!isError) {
    thankYouWindow = true;
  }
});

cardInputs.forEach((item, index) => {
  item.addEventListener("change", () => {
    if (item.value === "") {
      item.classList.add("wrong-format");
      errorSpans[index].classList.add("active-span");
      numberError.classList.remove("active-span");
    } else {
      item.classList.remove("wrong-format");
      errorSpans[index].classList.remove("active-span");
    }
  });

  if (isNaN(cardNumberInput.value)) {
    numberError.classList.add("active-span");
  } else {
    numberError.classList.remove("active-span");
  }
});
