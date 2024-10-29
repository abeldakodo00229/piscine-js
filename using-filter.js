function filterShortStateName(array){

   return array.filter((word) => word.length < 7);

}
function filterStartVowel(array){
    let regex = /^[aeiouAEIOU]/
    return array.filter((word) => regex.test(word));
}
function filter5Vowels(array){
    let regex = /[aeiouAEIOU]/g

    return array.filter((word) => word.match(regex).length >= 5);
}

function filter1DistinctVowel(array) {
    return array.filter((word) => new Set(word.toLowerCase().match(/[aeiouAEIOU]/gi)).size === 1)
}

function multiFilter(array) {
    array = array.filter((word) => {
        let capital = word.capital.length >= 8;
        let name = !/^[aeiouAEIOU]/i.test(word.name);
        let tag = /[aeiouAEIOU]/i.test(word.tag);
        let region = word.region !== "South";
        return capital && name && tag && region;
    });
    return array;
}

// const words = ['spaaaaray', 'limit', 'elite', 'exuberanteu', 'destruction', 'present'];



// console.log(filterShortStateName(words));
// console.log(filterStartVowel(words));
// console.log(filter5Vowels(words));