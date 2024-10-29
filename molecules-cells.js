function RNA(str){
    let result = ""
   
   let code ={
        G  :  'C',
        C  :  'G',
        T  :  'A',
        A  :  'U',
    }
   
for (let i=0;i<str.length;i++ ){
  
   result+=eval("code." + str[i])
}
return result
}

function DNA(str){
    let result = ""
   
   let code ={
        C  :  'G',
        G  :  'C',
        A  :  'T',
        U  :  'A',
    }
   
for (let i=0;i<str.length;i++ ){
  
   result+=eval("code." + str[i])
}
return result
}

// console.log(RNA('TAGC'))