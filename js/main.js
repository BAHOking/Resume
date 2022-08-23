let contactLastName = document.querySelector(".contact__last-name");
let arr = ["blue", "#222222"];
let index = 0;

setInterval(function () {
  contactLastName.style.color = `${arr[index]}`;
  index++;
  if (index >= arr.length) {
    index = 0;
  }
}, 1000);
