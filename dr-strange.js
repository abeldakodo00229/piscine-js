function addWeek(date){
    const daysOfWeek = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday","secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday","secondSunday"];
    let count =0
    
    let time = date.getTime() + 62135596800000;
    return daysOfWeek[(time / 86400000) % 14];
  
  
}


function timeTravel({date,hour,minute,second}){
    date.setHours(hour)
    date.setMinutes(minute)
    date.setSeconds(second)
    return date
 }

function extratDay(dateStr) {
    
    const dateObj = new Date(dateStr);
  
   
    const jour = String(dateObj.getDate()).padStart(2, '0'); 
  let n = parseInt(jour)+1

  if (n>31){
    return n-31
  }else{
    return n;
  }
    
  }
//  console.log(extratDay(new Date('0001-01-31')));
console.log(addWeek(new Date('2023-09-25')))
// console.log(addWeek(new Date('2023-09-25')))
// console.log(addWeek(new Date('0001-01-01'))) // Output: Monday
// console.log(addWeek(new Date('0001-01-02'))) // Output: Tuesday
// console.log(addWeek(new Date('0001-01-07'))) // Output: Sunday
// console.log(addWeek(new Date('0001-01-08'))) // Output: secondMonday
// console.log(addWeek(new Date('0001-01-09'))) // Output: secondTuesday
// console.log(addWeek(new Date('0001-02-30')))

// // timeTravel({ date, hour, minute, second })

// console.log(timeTravel({
//   date: new Date('2020-05-29 23:25:22'),
//   hour: 21,
//   minute: 22,
//   second: 22,
// }).toString())

// // Output: Fri May 29 2020 21:22:22 GMT+0100 (Western European Summer Time)