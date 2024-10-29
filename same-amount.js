function sameAmount(str,regex1,regex2){
    regex1 = new RegExp(regex1,"g")
    regex2 = new RegExp(regex2,"g")
    let a = str.match(regex1)
    let b =  str.match(regex2)
    if (a!==null && b!==null){
        if (a.length ===b.length){
            return true
        }
    }
       
        return false

}

const str = "acdbbcdcbsabaz"
let regex1 =/c/
let regex2 =/a/

console.log(sameAmount(str,regex1,regex2))
