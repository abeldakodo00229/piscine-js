import { log } from 'node:console';
import { opendir } from 'node:fs/promises';
if (process.argv[2]){
try {
    let invited = []
  const dir = await opendir(process.argv[2]);
  for await (const dirent of dir){
    invited.push(dirent.name.split(/[_.]/))
  }
 trierParDeuxiemeElement(invited)
 for (let i =0 ;i<invited.length;i++){
    console.log(`${i+1}. ${invited[i][1]} ${invited[i][0]}`)
 }
} catch (err) {
  console.error(err);
} 
}else{
    console.log("Verify your agrument");
}

function trierParDeuxiemeElement(tableau) {
    tableau.sort(function(a, b) {
      // Utilisez localeCompare pour trier de manière alphabétique
      return a[1].localeCompare(b[1]);
    });
  }

  
