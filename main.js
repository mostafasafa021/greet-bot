let p = document.querySelector("div p");

let promptMsg;
setTimeout(function () {
  promptMsg = prompt("Enter your name");
}, 3000);

setTimeout(function () {
  let confirm = window.confirm("Are Your sure you want a greet?");
  if (!confirm) {
    p.classList.add("show");
    clearTimeout(greet);
    p.textContent = "No Greet For you";
  }
}, 6000);

let greet = setTimeout(function () {
  p.classList.add("show");
  let textNode = document.createTextNode(`Hello Dear ${promptMsg}`);
  p.append(textNode);
}, 13000);
