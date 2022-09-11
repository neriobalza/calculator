export class Calculator {
  calculate(operation) {
    const length = operation.length;
    const total = operation;

    for (let i = 1; i < length; i += 2) {
      if (
        total.findIndex((element) => element === "÷" || element === "*") !== -1
      ) {
        const operatorIndex = total.findIndex(
          (element) => element === "÷" || element === "*"
        );
        const operator = total[operatorIndex];
        const a = parseFloat(total[operatorIndex - 1]);
        const b = parseFloat(total[operatorIndex + 1]);

        if (operator === "*") {
          total.splice(operatorIndex - 1, 3, this.multiply(a, b));
        } else {
          total.splice(operatorIndex - 1, 3, this.divide(a, b));
        }
      } else {
        const operatorIndex = total.findIndex(
          (element) => element === "+" || element === "-"
        );
        const operator = total[operatorIndex];
        const a = parseFloat(total[operatorIndex - 1]);
        const b = parseFloat(total[operatorIndex + 1]);

        if (operator === "+") {
          total.splice(operatorIndex - 1, 3, this.add(a, b));
        } else {
          total.splice(operatorIndex - 1, 3, this.subtract(a, b));
        }
      }
    }

    return total[0];
  }

  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}
