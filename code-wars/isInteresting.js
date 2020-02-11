// Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, 
// and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that 
// lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

// It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the
// mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an 
// interesting number occurs within the next two miles, or a 0 if the number is not interesting.

// Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.

// "Interesting" Numbers
// Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

// Any digit followed by all zeros: 100, 90000
// Every digit is the same number: 1111
// The digits are sequential, incementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array
// † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
// ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

function isInteresting(number , awesomePhrases){
  // not interesting if less than 3 digits
  const superInteresante = function(num){
    if(num < 100){ return false; }
    // check phrases array
    if(awesomePhrases.indexOf(num) !== -1){
      return true;
    }
    // Split up the number into an array of digits
    const digitArray = num.toString().split('');
    digitArray.forEach((num, i) => {
      digitArray[i] = parseInt(num);
    })
    // check trailing zeroes
    if(digitArray.slice(1).every((digit) => digit === 0)){
      return true;
    }
    // check all same digit
    if(digitArray.every((digit) => digit === num % 10)){
      return true;
    }
    // check sequential incrementing
    for(let i = 1; i < digitArray.length; i++){
      if(digitArray[i] === 0 && (digitArray[i - 1] !== 9)){
        break;
      }else if(digitArray[i] !== 0 && digitArray[i] !== (digitArray[i-1] + 1)){
        break;
      }
      if(i === digitArray.length - 1){
        return true;
      }
    }
    // check sequential decrementing
    for(let i = 1; i < digitArray.length; i++){
      if(digitArray[i] === 0 && (digitArray[i - 1] !== 1)){
        break;
      }else if(digitArray[i] !== 0 && digitArray[i] !== (digitArray[i-1] - 1)){
        break;
      }
      if(i === digitArray.length - 1){
        return true;
      }
    }
    // check palindromic
    let midPoint = Math.floor(digitArray.length / 2);
    let firstHalf = digitArray.slice(0, midPoint);
    let secondHalf = (digitArray.length % 2 == 0) ? digitArray.slice(midPoint) : digitArray.slice(midPoint + 1);
    console.log(firstHalf, secondHalf)
    if(firstHalf.join('') === secondHalf.reverse().join('')){
      return true;
    }
    return false;
  }
  if(superInteresante(number)){
    return 2;
  }else if(superInteresante(number + 1) || superInteresante(number + 2)){
    return 1;
  }else{
    return 0;
  }
}

console.log(isInteresting(7540, [1337, 256]));