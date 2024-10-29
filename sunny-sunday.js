function sunnySunday(date){
    const daysOfWeek = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    
    let time = date.getTime() + 62135596800000;
    return daysOfWeek[(time / 86400000) % 6];
  
}

// let date =new Date('0001-01-01')

//  console.log(typeof sunnySunday(date))