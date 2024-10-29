function indexOf(Array, Tosearch,start = 0){

    for (let i = start; i<Array.length;i++){
      if (Tosearch===Array[i]){
        return i
      }
    }
    return -1

}
function lastIndexOf(Array, Tosearch,end = Array.length){
    
    for (let i = end ; i>=0;i--){
        if (Tosearch===Array[i]){
          return i
        }
      }
      return -1
}
function includes(Array, Tosearch,start = 0){
    for (let i = start; i<Array.length;i++){
        if (Tosearch===Array[i]){
          return true
        }
      }
      return false
  
}

