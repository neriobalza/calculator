import { Display } from "./Display.js";

const app = new Display();
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const del = document.getElementById("action-del");
const c = document.getElementById("action-c");
const equal = document.getElementById("action-equal");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => app.addNumber(button.innerHTML));
});
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => app.addOperator(button.value));
});

del.addEventListener("click", () => app.backspack());
c.addEventListener("click", () => app.clearDisplay());
equal.addEventListener("click", () => app.makeCalc());
