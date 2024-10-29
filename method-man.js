function words(str){
   
    return str.split(" ")
    
}
function sentence(table){

return  table.join(' ')
}
function yell(str){
    return str.toUpperCase()
}
function whisper(str){
   
    return "*" + str.toLowerCase() + "*"
}

function capitalize(str){
    
    return str[0].toUpperCase() + str.substring(1, str.length).toLowerCase()
}

console.log(words("Abel est beau oui"));
console.log(sentence([ 'Abel', 'est', 'beau', 'oui' ]));
console.log(yell('howdy stranger ?'));
console.log(whisper("DÉJÀ VU"));
console.log(capitalize("bel est bBEAUu oui"));