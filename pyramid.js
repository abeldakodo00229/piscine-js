function pyramid(str,num) {
    let res =""
    for (let i = 1; i <= num; i++) {
       let space =""
       for (let k = 0; k <str.length; k++) {
            space+= ' '
       }
      let spaces = space.repeat(num - i);
      let stars = str.repeat(2 * i - 1);
      if (i!==num){
        res += spaces + stars+'\n'
      }else{
        res += spaces + stars
      }
      
    }
    return res
  }

  