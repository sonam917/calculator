let currentExpression = '';
//  -----------------------------function for AC (All clear button)-----------------------------
function clearScreen() {
  currentExpression = '';
  document.getElementById('result').value = '';

}

// --------------------------------method for Del button-----------------------------------------------

function clearInterval(){
  currentExpression = currentExpression.toString().slice(0,-1);
  document.getElementById('result').value= currentExpression;
}

// --------------------------------------method for concat the number one by one--------------------------- 

function appendValue(value) {
  currentExpression += value;
  document.getElementById('result').value = currentExpression;
}

// ------------------------------------method for add operator between operands------------------------------
function appendOperator(operator) {
  if (currentExpression !== '' && !isNaN(currentExpression[currentExpression.length - 1])) {
    currentExpression += operator;
    document.getElementById('result').value = currentExpression;
  }
}

// ---------------------------------method for equal(=) button and calculate the Result-------------------------
function calculateResult() {
  if (currentExpression !== '') {
    let result;
    try {
      result = eval(currentExpression);
    } catch (error) {
      result = 'Error';
    }
    document.getElementById('result').value = result;
    currentExpression = '';
  }
}
