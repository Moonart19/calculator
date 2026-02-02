const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
}

const div = (a, b) => {
    if (b == 0) {
      return "Can't divide by Number, Click clear button";
    }
    return a / b;
};

let firstNumber = '';
let operator = '';
let secondNumber = '';

const operate =  (num1, num2, op) => {
  num1 = Number(num1);
  num2 = Number(num2);
  switch(op) {
    case '+':
      return add(num1, num2);
    case '-':
      return sub(num1, num2);
    case '*':
      return mul(num1, num2);
    case '/':
      return div(num1, num2);
    default:
      return "Invalid operator";
  }
};

const buttons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
let display = document.querySelector("#display");

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (operator == "") {
      firstNumber += button.textContent;
      display.textContent = firstNumber;
    } else {
      secondNumber += button.textContent;
      display.textContent = secondNumber;
    }
  });
});

operators.forEach(op => {
  op.addEventListener('click', () => {
    if (firstNumber !== "" && secondNumber !== "") {
      firstNumber = operate(firstNumber, secondNumber, operator);
      display.textContent = firstNumber;
      secondNumber = "";
    }
    operator = op.textContent;
    display.textContent += operator
  });
});

document.querySelector(".equals").addEventListener('click', () => {
  if (firstNumber && secondNumber && operator) {
    const result = operate(firstNumber, secondNumber, operator);
    display.textContent = result;
    firstNumber = result;
    secondNumber = "";
    operator = "";
  }
});

document.querySelector(".clear").addEventListener('click', () => {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  display.textContent = "0";
})
