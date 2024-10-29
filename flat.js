function flat(arr,num){
if (!Array.isArray(arr) || num===0){
    return arr
}

if (num===undefined){
    num=1
}
return arr.reduce((acc, cur) => {
    return acc.concat(flat(cur, num - 1));
}, []);

}
