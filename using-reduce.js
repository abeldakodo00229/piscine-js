function adder(array,num=0){
   
    return array.reduce((accumulator, currentValue) => accumulator + currentValue,num);
    
}

function sumOrMul(array,num=0){
    
    return array.reduce((accumulator, currentValue) => {
        if (currentValue%2===0){
           return accumulator * currentValue
        }else{
            return accumulator + currentValue
        }
    },num);
    
}

function funcExec(func,num){
    return  func.reduce(function(accumulator, currentValue)  { return currentValue(accumulator); },num)
}

// console.log(sumOrMul([1, 2, 3, 5, 8], 5)) // (((((5 + 1) * 2) + 3) + 5) * 8) -> 160

// const array1 = [1, 2, 3, 4];

// console.log(adder(array1))
