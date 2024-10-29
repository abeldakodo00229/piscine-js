const vowels = /[aeiouAEIOU]/g

function vowelDots(str){
    let vowel =str.match(/[aeiouAEIOU]/gi)
    let strvowel=[]
    if (vowel===null){
        return str 
    }
        for (let i=0;i<str.length;i++){
            for (let j=0;j<vowel.length;j++){
                if (str[i] === vowel[j]){
                    strvowel.push(str[i])
                }
            }
        }
    let Tab = str.split(/[aeiouAEIOU]/)
   
    let result = ""
    for (let i=0;i<Tab.length;i++){

        if (i!==Tab.length-1){
            result+=Tab[i]+strvowel[i]+"."
        }else{
            result+=Tab[i]
        }
        
        
    }
   
    return result
}


