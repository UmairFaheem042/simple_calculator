let keys = document.querySelectorAll(".key");
let inputDisplay = document.querySelector(".display__input");
let outputDisplay = document.querySelector(".display__output");
let placeholderTxt = document.querySelector(".placeholder-txt");
let input = "";


// ? Checking if consecutive operators are not used eg. 5 +/ 6 
function validateInput(value){
    let lastInput = input.slice(-1);
    let operators = ['+', '-', '*', '/', '%'];

    if(value == '.' && lastInput == '.'){
        return false;
    }

    if(operators.includes(value)){
        if(operators.includes(lastInput)){
            return false;
        }
        else{
            return true;
        }
    }
    return true;
}

// ? Having around operator eg. 5 * 4
function cleanInput(input){  
    let inputArray = input.split("");
    let inputArrayLength = inputArray.length;

    for(let i = 0 ; i < inputArrayLength ; i++){
        if(inputArray[i] == '*'){
            inputArray[i] = ` <span>x</span> `;
        }
        
        else if(inputArray[i] == '/'){
            inputArray[i] = ` <span>÷</span> `;
        }
        
        else if(inputArray[i] == '+'){
            inputArray[i] = ` <span>+</span> `;
        }
        
        else if(inputArray[i] == '-'){
            inputArray[i] = ` <span> - </span> `;
        }
        
        else if(inputArray[i] == '^'){
            inputArray[i] = ` <span>^</span> `;
        }
        
    }
    return inputArray.join("");
}

function calculate() {
  Array.from(keys).forEach((key) => {
    const value = key.dataset.key;
    key.addEventListener("click", (e) => {
        placeholderTxt.innerHTML = '';
      if (value == "AC") {
          input = "";
          inputDisplay.innerHTML = "";
          outputDisplay.innerHTML = "";
          placeholderTxt.innerHTML = 'DISPLAY SCREEN';
      } else if (value == "C") {
        input = input.slice(0, -1);
        inputDisplay.innerHTML = cleanInput(input);
      } else if (value == "=") {
        input = eval(input);
        outputDisplay.innerHTML = +input.toFixed(2);
    } 
      else {
        if(validateInput(value)){
            input = input + value;
            inputDisplay.innerHTML = cleanInput(input);
        }
      }
    });
  });
  
}

calculate();