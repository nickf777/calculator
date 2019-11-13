const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const operate = (operator, num1, num2) => {
  if (operator === "+") {
    return add(num1, num2)
  } else if (operator === "-") {
    return subtract(num1, num2)
  } else if (operator === "x") {
    return multiply(num1, num2)
  } else if (operator === "/") {
    return divide(num1, num2)
  }
};



let interface = document.getElementById("interface");

// Clear functionality

const clearInput = () => {
  interface.textContent = ""
}

document.getElementById("clear").addEventListener("click", clearInput);
 
// Numbered button functionality
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let button4 = document.querySelector(".button4");
let button5 = document.querySelector(".button5");
let button6 = document.querySelector(".button6");
let button7 = document.querySelector(".button7");
let button8 = document.querySelector(".button8");
let button9 = document.querySelector(".button9");
let button0 = document.querySelector(".button0");

// Visual Button Input

let inputButtons = Array.from(document.querySelectorAll(".inputButton"));

const buttonInput = () => {
  inputButtons.forEach(button => {
    let buttonOutput = button.innerHTML;
    button.addEventListener("click", function() {
      interface.textContent += buttonOutput
    })
  })
}

buttonInput();



