function letterSpaceNumber(str){
    let ressult = str.match(/[a-z] [0-9](?![a-zA-Z0-9_])/gi)
  if (ressult===null){
    return []
    }

    return ressult
}
console.log(letterSpaceNumber('example ...............uy 1j .....; examplg 9iouyt'))
console.log(letterSpaceNumber('example 1, example 20'))
str ="The fat cat sat on the mat"
console.log(str.match(/The f(?![b])/gi))