const display = document.getElementById("display");
let currentInput = "";
let operacion = "";
let Result = null;

function añadirDisplay(value) {
  currentInput += value;
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = "";
  operacion = "";
  Result = null;
  display.textContent = "";
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  display.textContent = currentInput;
}

function realizarOperación() {
  let num1 = parseFloat(Result);
  let num2 = parseFloat(currentInput);
  if (isNaN(num2)) {
    display.textContent = "Invalid input";
    return;
  }
  switch (operacion) {
    case "+":
      Result = num1 + num2;
      break;
    case "-":
      Result = num1 - num2;
      break;
    case "*":
      Result = num1 * num2;
      break;
    case "/":
      Result = num1 / num2;
      break;
    default:
      Result = num2;
      break;
  }
  currentInput = "";
  operacion = "";
  display.textContent = Result;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    realizarOperación();
  } else if (event.key === "Escape") {
    clearDisplay();
  } else if (event.key === "Backspace") {
    backspace();
  } else if (!isNaN(event.key) || event.key === ".") {
    añadirDisplay(event.key);
  } else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
    operacion = event.key;
    if (Result === null) {
      Result = currentInput;
    } else {
      realizarOperación();
    }
    currentInput = "";
    display.textContent = operacion;
  }
});

document.querySelectorAll(".calculator button").forEach(function (button) {
  button.addEventListener("click", function (event) {
    const buttonValue = event.target.textContent;
    if (buttonValue === "C") {
      clearDisplay();
    } else if (buttonValue === "⌫") {
      backspace();
    } else if (buttonValue === "=") {
      realizarOperación();
    } else if (!isNaN(buttonValue) || buttonValue === ".") {
      añadirDisplay(buttonValue);
    } else {
      operacion = buttonValue;
      if (Result === null) {
        Result = currentInput;
      } else {
        realizarOperación();
      }
      currentInput = "";
      display.textContent = operacion;
    }
  });
});
