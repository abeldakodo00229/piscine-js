function longWords(array){
    return array.every(function(value){
        return value.length >= 5
    })
}
function oneLongWord(array){
    return array.some(function(value){
        return value.length >=10
    })
}
function noLongWords(array){
    return array.every(function(value){
        return value.length < 7
    })
}

// const words = ['spay', 'liit', 'elte', 'eanhhhhhteu', 'deion', 'prent'];


// console.log(longWords(words));
// console.log(oneLongWord(words));
// console.log(noLongWords(words));