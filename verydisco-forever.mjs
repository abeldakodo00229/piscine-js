import { writeFile } from 'fs/promises';

const input = process.argv[2];
//console.log( (process.argv).length);

function makeWordVeryDisco(word) {
  const length = Math.ceil(word.length / 2);
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
   // console.log( makeInputVeryDisco(input))
    async function writeToFile() {
        try {
          await writeFile("verydisco-forever.txt", makeInputVeryDisco(input), { flag: 'w' });
         // console.log('Le fichier a été créé et écrit avec succès.');
        } catch (err) {
          console.error("Fille Error");
        }
      }
      
      writeToFile();
} else {
  console.log('Error');
}

//console.log("papa".slice(4));
