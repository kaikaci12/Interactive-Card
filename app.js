const cardInputs = document.querySelectorAll(".card-input");
const confirmBtn = document.querySelector(".confirm");
const errorSpans = document.querySelectorAll(".error-span");
const numberError = document.getElementById("number-error");
const cardNumberInput = document.querySelector("#card-num-input");
const newWindow = document.querySelector(".new-window");
const forms = document.querySelector(".forms-container");
const continueBtn = document.querySelector(".continue");
const cvcCode = document.querySelector(".cvc-code");
const cardNumCode = document.querySelector(".card-num-code");
const cardName = document.querySelector(".user-name");
const cardDate = document.querySelector(".user-date");
const cardHolderInput = document.getElementById("card-holder-name");
const cvcInput = document.querySelector(".cvc-input");
const monthInput = document.querySelector(".month-input");
const yearInput = document.querySelector(".year-input");

let thankYouWindow = false;

confirmBtn.addEventListener("click", () => {
  let isError = false;

  cardInputs.forEach((item, index) => {
    if (item.value === "") {
      item.classList.add("wrong-format");
      errorSpans[index].classList.add("active-span");
      isError = true;
    } else {
      item.classList.remove("wrong-format");
      errorSpans[index].classList.remove("active-span");
    }
  });
  if (isNaN(cardNumberInput.value)) {
    isError = true;
    numberError.classList.add("active-span");
  } else {
    numberError.classList.remove("active-span");
  }

  if (!isError) {
    forms.classList.add("form-active");
    newWindow.classList.add("active-window");
  } else {
    forms.classList.remove("form-active");
    newWindow.classList.remove("active-window");
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
continueBtn.addEventListener("click", () => {
  document.location.reload();
});
cardHolderInput.addEventListener("input", () => {
  cardName.innerHTML = cardHolderInput.value;
});
cardNumberInput.addEventListener("input", () => {
  cardNumCode.innerHTML = cardNumberInput.value;
});
cvcInput.addEventListener("input", () => {
  cvcCode.innerHTML = cvcInput.value;
});
monthInput.addEventListener("input", () => {
  cardDate.innerHTML = monthInput.value + "/00";
});
yearInput.addEventListener("input", () => {
  cardDate.innerHTML = "/" + yearInput.value;
});
