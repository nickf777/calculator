// Global Variables here
let interface = document.getElementById("interface");
let wholeEquation = document.getElementById("wholeEquationInterface");

// Basic functionality
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

// Calls the above functions and updates the display. Currently only works for one equations with a single operator. Now works with multiple digits because the operators have space before and after the character and our split method only splits at the spaces.


const operate = () => {
  let input = interface.textContent;
  let inputArray = input.split(" ");
  let num1 = Number(inputArray[0]);
  let operator = inputArray[1];
  let num2 = Number(inputArray[2]);

  // If the user tries to divide by 0
  if (num1 === 0 && operator === "/") {
    alert("Cannot divide by 0")
  };

  if (operator === "+") {
    let solution = add(num1, num2);
    interface.textContent = solution;
  } else if (operator === "-") {
    let solution = subtract(num1, num2)
    interface.textContent = solution;
  } else if (operator === "x") {
    let solution = multiply(num1, num2)
    interface.textContent = solution;
  } else if (operator === "/") {
    let solution = divide(num1, num2)
    interface.textContent = solution; 
  } 
};

// Clear functionality

const clearInput = () => {
  interface.textContent = "";
  wholeEquation.textContent = "";
}
document.getElementById("clear").addEventListener("click", clearInput);
 
// Visual Button Input

let inputButtons = Array.from(document.querySelectorAll(".inputButton"));

const buttonInput = () => {
  inputButtons.forEach(button => {
    let buttonOutput = button.innerHTML;
    button.addEventListener("click", function() {
      interface.textContent += buttonOutput;
      wholeEquation.textContent += buttonOutput;
    })
  })
}

buttonInput();

// Functionality to account for longer equations

const operators = Array.from(document.querySelectorAll(".operator"));
const operatorInput = () => {
  operators.forEach(operator => {
    operator.addEventListener("click", function() {
      let input = interface.textContent;
      let inputArray = input.split(" ")
      let buttonOutput = operator.innerHTML;
      if (inputArray.length > 3) {
        operate()
        interface.textContent += buttonOutput;
      }
    })
  })
}

operatorInput();





// Adding the event listener to the equal button

let equalButton = document.querySelector(".equalButton");
equalButton.addEventListener("click", operate);




