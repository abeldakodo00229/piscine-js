function invert(obj){
    var revobj = {};
    for(var key in obj){
        if (obj.hasOwnProperty(key)) {
      revobj[obj[key]] = key;
        }
    }
    return revobj;
}

// const ages ={ f : 5, __proto__ : { d : 6 } }

// console.log(invert(ages));