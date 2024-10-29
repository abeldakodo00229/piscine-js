function dayOfTheYear(date){
    let month = date.getMonth()
    let day = date.getDate()
    let count = 0

        for (let i=0;i<=parseInt(month);i++){

            if (i !== parseInt(month)){
                if (i===0 || i===2 || i===4 || i===6 || i===7 || i===9 || i===11 ){
                    count += 31
                }else if(i===1){
                    if (isLeapYear(date.getFullYear())){
                        count += 29
                    }else{
                        count += 28
                    }
                }else if (i===3 || i===5 || i===8 || i===10 ){
                    count += 30
                }
            }else{
                    count += parseInt(day)
            }
        }
       
   
    return count
}

function isLeapYear(annee) {
    return (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);
  }

// let date =new Date('2023-03-29')

// console.log(dayOfTheYear(date))
