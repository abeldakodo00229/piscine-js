function reverse(str){
    if (typeof str ==="object"){
      let Tab = []
      for (let i=str.length -1;i>=0;i--){
        Tab.push(str[i])
      }
      return Tab
      }else if (typeof str ==="string"){
        let Tab = ""
        for (let i=str.length -1;i>=0;i--){
          Tab+=str[i]
  
        }
        return Tab
    }
    }

   // console.log(reverse([1, 2, 3]))
    // console.log("[ 3 ,  2 ,  4 ,  1 ,  5 ]".reverse())