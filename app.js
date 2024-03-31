const cardInputs = document.querySelectorAll(".card-input");
const dateInputs = document.querySelectorAll(".date");
const cvcInput = document.querySelector(".cvc-input");
const confirmBtn = document.querySelector(".confirm");
const errorSpans = document.querySelectorAll(".error-span");
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

  if (!isError) {
    thankYouWindow = true;
  }
});
