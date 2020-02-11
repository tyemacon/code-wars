// Your task in order to complete this Kata is to write a function which formats 
// a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns
// "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. 
// In general, a positive integer and one of the valid units of time, separated by a space. 
// The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, 
// which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore,
// 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 
// seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0
// seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not 
// return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified
// by of a component must not be greater than any valid more significant unit of time.


function formatDuration(seconds){
  if(seconds === 0){
    return 'now';
  }
  const secondsToUnits = {
    year: 365 * 24 * 60 * 60,
    day: 24 * 60 * 60,
    hour: 60 * 60,
    minute: 60
  }
  let duration = '';
  let demarcated = [0, 0, 0, 0, 0]
  let years = 0, days = 1, hours = 2, minutes = 3, secs = 4;
  // Subtract years
  while(seconds >= secondsToUnits.year){
    demarcated[years]++;
    seconds -= secondsToUnits.year;
  }
  // Subtract days
  while(seconds >= secondsToUnits.day){
    demarcated[days]++;
    seconds -= secondsToUnits.day;
  }
  // Subtract hours
  while(seconds >= secondsToUnits.hour){
    demarcated[hours]++;
    seconds -= secondsToUnits.hour;
  }
  // Subtract minutes
  while(seconds >= secondsToUnits.minute){
    demarcated[minutes]++;
    seconds -= secondsToUnits.minute
  }
  // Save seconds
  demarcated[secs] = seconds;
  let uniqueUnits = demarcated.reduce((acc, num) => {
    return (num !== 0) ? (acc + 1) : acc; 
  }, 0)
  if(uniqueUnits === 1){
    demarcated.forEach((amount, i) => {
      if(amount !== 0){
        switch(i){
          case years:
            duration = `${amount} year${amount > 1 ? 's' : ''}`
            break;
          case days:
            duration = `${amount} day${amount > 1 ? 's' : ''}`
            break;
          case hours:
            duration = `${amount} hour${amount > 1 ? 's' : ''}`
            break;
          case minutes:
            duration = `${amount} minute${amount > 1 ? 's' : ''}`
            break;
          case secs:
            duration = `${amount} second${amount > 1 ? 's' : ''}`
            break;
          default:
            console.log('none found');
        }
      }
    })
  }else{
    let anded = false;
    // Loop backward over demarcation array and format output;
    for(let i = demarcated.length - 1; i >= 0; i--){
      if(demarcated[i] === 0){
        continue;
      }
      switch(i){
        case years:
          if(!anded){
            duration = ` and ${demarcated[i]} year${demarcated[i] > 1 ? 's' : ''}`
            anded = true;
          }else{
            duration = ` ${demarcated[i]} year${demarcated[i] > 1 ? 's' : ''},${duration}`
          }
          break;
        case days:
          if(!anded){
            duration = ` and ${demarcated[i]} day${demarcated[i] > 1 ? 's' : ''}`
            anded = true;
          }else{
            duration = ` ${demarcated[i]} day${demarcated[i] > 1 ? 's' : ''},${duration}`
          }
          break;
        case hours:
          if(!anded){
            duration = ` and ${demarcated[i]} hour${demarcated[i] > 1 ? 's' : ''}`
            anded = true;
          }else{
            duration = ` ${demarcated[i]} hour${demarcated[i] > 1 ? 's' : ''},${duration}`
          }
          break;
        case minutes:
          if(!anded){
            duration = ` and ${demarcated[i]} minute${demarcated[i] > 1 ? 's' : ''}`
            anded = true;
          }else{
            duration = ` ${demarcated[i]} minute${demarcated[i] > 1 ? 's' : ''},${duration}`
          }
          break;
        case secs:
          if(!anded){
            duration = ` and ${demarcated[i]} second${demarcated[i] > 1 ? 's' : ''}`
            anded = true;
          }else{
            duration = ` ${demarcated[i]} second${demarcated[i] > 1 ? 's' : ''},${duration}`
          }
          break;
        default:
          console.log('And I say, HEEEYYAAAAAYEAAAAHAHAYYAYAAA')
      }
    }
  }
  return duration;
}

console.log(formatDuration(3662));