// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str){
  let hashtag = '#';
  let capitalize = true;
  for(let i = 0; i < str.length; i++){
    if(str[i] === ' '){
      capitalize = true;
    }else{
      if(capitalize){
        hashtag += str[i].toUpperCase();
        capitalize = false;
      }else{
        hashtag += str[i]
      }
    }
  } 
  if(hashtag.length === 1 || hashtag.length > 140){
    return false;
  }else{
    return hashtag;
  }
}

console.log(generateHashtag('Do We Have a hashtag'))