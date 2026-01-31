const buttons = document.querySelectorAll(".number");
const opertors = document.querySelectorAll(".operator")
let display = document.querySelector("#display");


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
    return a / b;
};

let firstNumber = '';
let operator = '';
let secondNumber = '';
let displayValue = "";

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

function handleNumberClick(number) {
  if (operator == "") {
    firstNumber += number;
    display.textContent = firstNumber;
  } else {
    secondNumber += number;
    display.textContent = secondNumber;
  }
}

function handleOperatorClick(op) {
  if (firstNumber === "") return;

  if (secondNumber !== "") {
    let result = operate(firstNumber, secondNumber, operator);
    firstNumber = result.toString();
    display.textContent = firstNumber;
    secondNumber = "";
  }

  operator = op
  display.textContent = op
}


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    handleNumberClick(button.textContent);
  });
});

opertors.forEach((op) => {
  op.addEventListener('click', () => {
    handleOperatorClick(op.textContent)
  });
})

document.querySelector('.clear').addEventListener('click', () => {
  firstNumber = '';
  operator = '';
  secondNumber = '';
  display.textContent = "0";
})

document.querySelector('.equals').addEventListener('click', () => {
  
})

