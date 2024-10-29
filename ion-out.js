function ionOut(str){
    let result = []
    let tab = str.split(" ")
    
    let strr =""
    for (let i=0;i<tab.length;i++){
      for (let j=0;j<tab[i].length;j++){
        if (tab[i][j]==="t" && tab[i][j+1]==="i" && tab[i][j+2]==="o" && tab[i][j+3]==="n"){
          for (let k=0;k<=j;k++){
            strr +=tab[i][k]
          }
          
        }
       
      
      }
      if (strr!==""){
        result.push(strr)
      }
      strr=""
      
    }
   
    if (result===null){
      return []
      }
  
      return result
}


