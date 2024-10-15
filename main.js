let btn1 = document.getElementById("button-one");
let btn2 = document.getElementById("button-two");
let btn3 = document.getElementById("button-three");

btn1.onclick = function () {
  this.parentElement.nextElementSibling.classList.toggle("adding");
};

btn2.onclick = function () {
  this.parentElement.nextElementSibling.classList.toggle("adding");
};

btn3.onclick = function () {
  this.parentElement.nextElementSibling.classList.toggle("adding");
};
