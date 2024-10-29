function pick(obj,arrOrStr){
    var  newObj ={}
    for(var key in obj){
        if (obj.hasOwnProperty(key)) {
      if ((typeof arrOrStr==="string" && arrOrStr === key) || (Array.isArray(arrOrStr) && arrOrStr.includes(key))){
       
            newObj[key] = obj[key];
        
      }
        }
    }
    
    return newObj
}

function omit(obj,arrOrStr){
  var  newObj ={}
    for(var key in obj){
        if (obj.hasOwnProperty(key)) {
      if ((typeof arrOrStr==="string" && arrOrStr !== key) || (Array.isArray(arrOrStr) && !arrOrStr.includes(key))){
       
            newObj[key] = obj[key];
        
      }
        }
    }
    
    return newObj
}

// const ages ={ f : 5,  d : 6 } 
// const cars = ["a", "b", "c", "d"]
// console.log(pick(ages,cars));
// console.log(omit(ages,cars));

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cato'));
