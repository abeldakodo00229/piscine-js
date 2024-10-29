import { readFile } from 'fs/promises';
const arg = process.argv[2];
const filecontent = async (filename)=>{
    const content = await readFile(filename,'utf8')
    return content
}
let input = await filecontent(arg)


function makeWordVeryDisco(word) {
    const length = Math.floor(word.length / 2);
    let firstHalf = word.slice(0, length);
    let secondHalf = word.slice(length);
    
   
    return secondHalf + firstHalf;
  }
  
  
  function makeInputVeryDisco(input) {
    const words = input.split(' ');
    const discoWords = words.map(makeWordVeryDisco);
    return discoWords.join(' ');
  }
  
  
  if (input) {
      console.log( makeInputVeryDisco(input))
  } else {
    console.log('Error');
  }
  
  //console.log("papano".slice(3));
  
