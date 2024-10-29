import { readFile } from 'fs/promises';

async function lireFichierJSON(cheminDuFichier) {
  try {
    // Lire le contenu du fichier
    const data = await readFile(cheminDuFichier, 'utf8');

    // Parser le contenu JSON en un objet JavaScript
    const jsonData = JSON.parse(data);

    // Accéder à la valeur de la clé "answer"
    const answerValue = jsonData.answer;

    console.log('La valeur de "answer" est :', answerValue);
  } catch (error) {
    console.error('Une erreur s\'est produite :', error);
  }
}

// Appelez la fonction avec le chemin vers votre fichier JSON
lireFichierJSON('.\guests\Aaisha_Mcculloch.json');
