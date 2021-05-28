let initalValue = 0;
let buffer = '0';
let previousOperator;

const screen = document.querySelector(".screen");

function buttonClick(value) {
    if (isNaN(value)){
        handleSymbol(value); //this is a NOT number
    }else {
        handleNumber(value); //this is a number
    }
    screen.innerText = buffer;
}



function handleSymbol(symbol) {
switch(symbol){
case 'C':
    buffer = '0';
    initalValue = 0;
    break;
case '=':
    if (previousOperator === null) {
        // need two numbers to do math
        return;
      }
        flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = initalValue;
      initalValue = 0;
      break;
      case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;

        case '+':
        case '−':
        case '×':
        case '÷':


    handleMath(symbol);
    break;

}
    
}

function handleMath(symbol) {
console.log('handleMath'.symbol);
  if (buffer === '0') {
    // do nothing
    return;
  }



  const intBuffer = parseInt(buffer);


  if (initalValue === 0) {
    initalValue = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = symbol;

  buffer = '0';
}


function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    initalValue += intBuffer;
  } else if (previousOperator === "-") {
    initalValue -= intBuffer;
  } else if (previousOperator === "×") {
    initalValue *= intBuffer;
  } else {
    initalValue /= intBuffer;
  }
  
}

function handleNumber(numberString) {
    if(buffer === '0'){
        buffer = numberString;
    }else{
        buffer += numberString;
    }
   
}


function init() {
  document.querySelector(".buttons")
   .addEventListener('click', function(event) {
      buttonClick(event.target.innerText);
    })
}

init();