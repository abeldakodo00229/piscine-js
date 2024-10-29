function cutFirst(str){
    let result =""
    
    for (let i =2;i<str.length;i++){
       
        result += str[i]
        if (str.length<2){
            break
        }
        
    }
return result
}
function cutLast(str){
    let result =""

    for (let i =0;i<str.length -2;i++){
        result += str[i]
        if (str.length<2){
            break
        }
    }
return result
}
function cutFirstLast(str){
    let result =""

    for (let i =2;i<str.length-2;i++){
        result += str[i]
        if (str.length<2){
            break
        }
    }
return result
}
function keepFirst(str){
    let result =""

    for (let i =0;i<2;i++){
        result += str[i]
        if (str.length<2){
            break
        }
    }
return result
}

function keepLast(str){
    let result =""
    if (str.length<2){
        result =str
    }
    for (let i =str.length-2;i<str.length;i++){
        if (str.length<2){
            break
        }
        result += str[i]
       
    }
return result
}
function keepFirstLast(str){
    let result = ""
    if (str.length<=3){
        result =str
    }else{
        result=keepFirst(str)+keepLast(str)
    }
  
   
return result
}

