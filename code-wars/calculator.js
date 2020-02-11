// Create a simple calculator that given a string of operators (), +, -, *, / and numbers 
// separated by spaces returns the value of that expression

// Example:

// Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
// Remember about the order of operations! Multiplications and divisions have a higher 
// priority and should be performed left-to-right. Additions and subtractions have a 
// lower priority and should also be performed left-to-right.

const Calculator = function() {
  this.signs = {
    MULT: '*',
    DIV: '/',
    ADD: '+',
    SUB: '-'
  },

  this.evaluate = string => {
    let clean = string.trim().split(' ');
    if(clean.length === 1){
      return string;
    }
    // assuming all input strings are valid;
    // Iterate over operation string
    let priorityIndex = clean.length + 1;
    let secondaryIndex = clean.length + 1;
    for(let i = 0; i < clean.length; i++){
      switch(clean[i]){
        case this.signs.MULT:
          priorityIndex = (i < priorityIndex) ? i : priorityIndex;
          break;
        // multiply
        case this.signs.DIV:
          priorityIndex = (i < priorityIndex) ? i : priorityIndex;
          break;
        // divide
        case this.signs.ADD:
          secondaryIndex = (i < secondaryIndex) ? i : secondaryIndex;
          break;
          // add em up
        case this.signs.SUB:
          secondaryIndex = (i < secondaryIndex) ? i : secondaryIndex;
          break;
        // subtract
        default:
          // do some normal thing
      }
    }

    let operationResult;
    if(priorityIndex < clean.length){
      // there is a priority operation
      if(clean[priorityIndex] === this.signs.MULT){
        operationResult = clean[priorityIndex - 1] * clean[priorityIndex + 1]
      }else{
        operationResult = clean[priorityIndex - 1] / clean[priorityIndex + 1]
      }
      return this.evaluate(`${clean.slice(0, priorityIndex - 1).join(' ')} ${operationResult} ${clean.slice(priorityIndex + 2).join(' ')}`)
    }else{
      // there must only be add/sub left
      if(clean[secondaryIndex] === this.signs.ADD){
        operationResult = Number(clean[secondaryIndex - 1]) + Number(clean[secondaryIndex + 1])
      }else{
        operationResult = clean[secondaryIndex - 1] - clean[secondaryIndex + 1]
      }
      return this.evaluate(`${clean.slice(0, secondaryIndex - 1).join(' ')} ${operationResult} ${clean.slice(secondaryIndex + 2).join(' ')}`)
    }
  }
};


// console.log(new Calculator().evaluate("2 / 2 * 3 + 4 * 10"))
console.log(new Calculator().evaluate("3 * 6 - 9"))
// console.log(new Calculator().evaluate("1 * 3"))