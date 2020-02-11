function persistence(num) {
  let totalPersistence = 0;
  let shave = function(number){
    totalPersistence++;
    let digits  = [];
     while(number % 10 !== number){
       let digit = number % 10;
       digits.push(digit)
       number -= digit;
       number /= 10;
     }
     digits.push(number)
     let newNumber = digits.reduce((prod, value) => prod * value);
     if(newNumber % 10 === newNumber){
        return newNumber
     }else{
       return shave(newNumber)
     }
   }
  shave(num)
  return totalPersistence
}

console.log(persistence(3122))