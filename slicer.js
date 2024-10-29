function slice(str,start=0,end =str.length){
    if (start < 0) {
        start = -start
        start = str.length - start
    }
    if (end < 0) {
        end = -end
        end = str.length - end
    }
    
    if (typeof str === 'object'){
        let Table = []

   for (let i = start;i<end;i++){
    Table.push(str[i])
   }
   return Table
  } else if (typeof str === 'string'){
    let Table = ""
    for (let i = start;i<end;i++){
        Table+=(str[i])
       }
       return Table
  }


}

