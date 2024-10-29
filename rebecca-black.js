function isFriday(date){
    
    let day = date.getDay()
    if ((day)===5){
        return true
    }

    return false
}
function isWeekend(date){
    let day = date.getDay()
    if ((day)===6 || (day)===7  ){
        return true
    }

    return false
}
function isLeapYear(date){
    let dmy = new Date(date.getFullYear()+"-02-"+"29")
    if ((dmy.getDate())===29){
        return true
    }

   return false
}
function isLastDayOfMonth(date){
    let month = date.getMonth()
    let day = date.getDate()

    if (isLeapYear(date)){
     if ((date.getMonth()===1) && (date.getDate())===29 ){
            return true
        }
     }else{
        if ((date.getMonth()===1) && (date.getDate())===28 ){
            return true
        }  
     }
      if ((date.getMonth()===0 ) || ((date.getMonth()===2 ) || (date.getMonth()===4 ) || (date.getMonth()===6 )|| (date.getMonth()===7 )|| (date.getMonth()===9 ) || (date.getMonth()=== 11 )) && (date.getDate())===31){
        return true
     }else if ((date.getMonth()===3 ) || ((date.getMonth()===5 ) || (date.getMonth()===8 ) || (date.getMonth()===10 )) && (date.getDate())===30){
     return true
     }
     return false
    
}
// let date =new Date('2028-09-30')

// console.log(isFriday(date))
// console.log(isWeekend(date))
// console.log(isLeapYear(date))
// console.log(isLastDayOfMonth(date))