function defaultCurry(obj1){
   return function (obj2){
   let res = {}
for  (var key in obj1){
    res[key]=obj1[key]
   }
   for  (var key in obj2){
    res[key]=obj2[key]
   }
  return res
   }
}

function mapCurry(func){
    return function (obj) {
        let res = {};
        for (let key in obj) {
            res[func([key, obj[key]])[0]] = func([key, obj[key]])[1];
        }
        return res
    }
}


function reduceCurry(obj1) {
    return function (obj2, obj3) {
        let res = obj3;
        for (let key in obj2) {
            res = obj1(res, [key, obj2[key]]);
        }
        return res;
    };
}

function filterCurry(obj1) {
    return function (obj2) {
        let res = {};
        for (let key in obj2) {
            if (obj1([key, obj2[key]])) {
                res[key] = obj2[key];
            }
        }
        return res;
    };
}

console.log(defaultCurry({
    http: 403,
    connection: 'close',
    contentType: 'multipart/form-data',
  })({
    http: 200,
    connection: 'open',
    requestMethod: 'GET'
  }))

  console.log(mapCurry({
    http: 403,
    connection: 'close',
    contentType: 'multipart/form-data',
  }))