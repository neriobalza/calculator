import { Calculator } from "./Calculator.js";

export class Display {
  constructor() {
    this.problemArray = [];
    this.calculator = new Calculator();
    this.list = document.getElementById("list");
    this.display = document.getElementById("display");
    this.input = document.getElementById("input");
  }

  backspack() {
    const last = this.problemArray[this.problemArray.length - 1] || "0";
    if (last.length === 1) {
      this.problemArray.pop();
    } else {
      this.problemArray[this.problemArray.length - 1] = last.slice(0, -1);
    }
    this.displayCalc();
  }

  clearDisplay() {
    const operations = document.querySelectorAll(".operation-container");
    operations.forEach((element) => {
      element.remove();
    });

    this.problemArray = [];
    this.displayCalc();
  }

  displayCalc() {
    this.input.innerText = this.problemArray.join(" ");
  }

  addNumber(number) {
    const last = this.problemArray[this.problemArray.length - 1];
    const operators = "+-*÷";

    if (this.problemArray.length === 0 || operators.includes(last)) {
      if (number === ".") {
        this.problemArray.push("0.");
      } else {
        this.problemArray.push(number);
      }
    } else {
      if (last.length <= 7) {
        if (number === ".") {
          if (!last.includes(".")) {
            const newNumber = last + number;
            this.problemArray[this.problemArray.length - 1] = newNumber;
          }
        } else {
          const newNumber = last + number;
          this.problemArray[this.problemArray.length - 1] = newNumber;
        }
      }
    }
    this.displayCalc();
  }

  addOperator(operator) {
    const last = this.problemArray[this.problemArray.length - 1];
    const operators = "+-*÷";

    if (this.problemArray.length > 0) {
      if (operators.includes(last)) {
        this.problemArray[this.problemArray.length - 1] = operator;
      } else {
        this.problemArray.push(operator);
      }
      this.displayCalc();
    }
  }

  makeCalc() {
    const last = this.problemArray[this.problemArray.length - 1];
    const operators = "+-*÷";
    const container = document.createElement("div");
    container.classList.add("operation-container");

    if (this.problemArray.length > 0) {
      if (operators.includes(last)) {
        this.problemArray.pop();
      }

      container.innerHTML = `<p>${this.problemArray.join(" ")}</p>`;
      const total = this.calculator.calculate(this.problemArray);
      container.innerHTML += `<p class=total>= ${total}</p>`;
      this.list.appendChild(container);
      this.problemArray = [];
      this.display.scrollTo(0, this.display.scrollHeight);
      this.displayCalc();
    }
  }
}
