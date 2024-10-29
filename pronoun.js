function pronoun(str){
    let Tab = str.toLowerCase().split(/[ \n,.;!?]+/)

    let pronouns =["i", "you", "he", "she", "it","they","we"]
    let result = {}
    let wordsCount = {}
    let counter = []
    let arr = []
    let arr0 = []
  
    
        for (let j = 0;j<Tab.length;j++){
            if (pronouns.includes(Tab[j])){
                if (!arr.includes(Tab[j]))
               arr.push(Tab[j])
            }
       }
       
       for (let i = 0;i<arr.length;i++){
                let n = 0
                for (let j = 0;j<Tab.length;j++){
                    if (arr[i] === Tab[j]){
                        n++
                    }

                }
               
                counter.push(n)   
       }

       for (let j = 0;j<Tab.length;j++){
        for (let i = 0;i<arr.length;i++){
                if (Tab[j]===arr[i]){
                    if (isPronnoun(Tab[j+1])){
                        arr0.push([])
                    }
                     
                }
        } 

}
for (let i = 0;i<arr.length;i++){
    
arr0.push(proontab(Tab,arr[i]))
}
       for (let i = 0;i<arr.length;i++){
        wordsCount["word"]=arr0[i]
        wordsCount["count"]=counter[i]
        result[arr[i]]=wordsCount
        wordsCount = {}
       }
       
    return  result
}

function isPronnoun(pronoun){
    let pronouns =["i", "you", "he", "she", "it","they","we"]
    return pronouns.includes(pronoun)
}
function proontab(words, pronoun) {
    const result = [];
    let prevWord = null; 
  
    for (let i = 0; i < words.length; i++) {
      if (words[i] === pronoun) {
       
        if (i + 1 < words.length && words[i + 1] !== pronoun) {
          
          result.push(words[i + 1]);
        }
      }
    }
  
    return result;
  }
  
//  const ex = "I buy,\ni to,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go"
// // //{ you: { word: [ 'can' ], count: 2 } }
// const e = 'If he you want to buy something you have to pay.'
// //console.log(pronoun(ex));
//  console.log(pronoun(e));
// // // {
// // //   he: { word: [], count: 1}
// // //   you: { word: [ 'want', 'have' ], count: 2 }
// // // }
