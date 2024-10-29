function triangle(str,num){
    let result =""
    for (let i =0;i<num;i++){
        for (let j =0;j<i+1;j++){
            result+=str
        }
        if (i!==num-1){
            result+="\n"
        }
    }
    return result
}

