function multiply(a,b){
let a1 = a
let b1 =b
    let result =0
    if (a<0){
        a=-a
    }
    if (b<0){
        b=-b
    }
    for (let i=0;i<b;i++){
     result+=a
    }
    if (a1<0 && b1>0 && result !==0){
        result =-result
    }else if (a1>0 && b1<0 && result !==0){
        result =-result
    }
    return result

}
function divide(a,b){
    
    let a1 = a
    let b1 =b
    let result =0
        if (a<0){
            a=-a
        }
        if (b<0){
            b=-b
        }
    let count = a
    for (let i=0;i<count;i++){
    a-=b
    if(a<0){
      break
    }
    result+=1

    }
    if (a1<0 && b1>0 ){
        result =-result
    }else if (a1>0 && b1<0){
        result =-result
    }
    return result
}
function modulo(a,b){
    
        let bool = false
        if (a < 0) {
            a = -a
            bool = true
        }
        if (b < 0) {
            b = -b
        }
        let result = a
        let c = b
        let count = 1
        while (b < result) {
            result = result - c
            count++
        }
        if (bool) {
            result = -result
        }
        return result
 
}


