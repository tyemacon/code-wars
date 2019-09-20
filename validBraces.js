function validBraces(braces){
  const openBraces = '{[(';
  const openings = [];
  const matchers = {
    '}': '{',
    ']': '[',
    ')': '(' 
  }
  let lastOpener = '';
  let openCount = 0;
  let closedCount = 0;
  for(var i = 0; i < braces.length; i++){
    let b = braces[i];
    match = matchers[b];
    if(openBraces.includes(b)){
      openings.push(b);
      openCount++
      lastOpener = b;
    } else if(matchers[b] === lastOpener){
      closedCount++
      openings.pop();
      lastOpener = openings[openings.length-1]
    } else{
      return false;
    }
  }
  if(closedCount !== openCount){ return false; }
  return true;
}

console.log(validBraces('(){}[]()((({{{[[[]]]}}})))'))