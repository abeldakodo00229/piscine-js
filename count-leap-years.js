function countLeapYears(date){
    let count = 0
let number =parseInt(date.getFullYear())
    for (let i=1;i<=number;i++){
        let a = 0
        if (i>0 && i<10){
            a="000"+i
        }else if ((i>9 && i<100)){
            a="00"+i
        }else if ((i>99 && i<1000)){
            a="0"+i
        }else{
            a=""+i
        }
    if (isLeapYear(a) && a !=="0004"){
        count += 1
    }
    }
return count
}

function isLeapYear(annee) {
    return (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);
  }
  

// let date =new Date('2028-02-29')

// console.log(countLeapYears(date))
// let dat =new Date('1664-08-09')

// console.log(countLeapYears(dat)) //403
// console.log(isLeapYear('0004'))