import fs from 'fs';
import { promisify } from 'util';

const filePath = process.argv[2];
const operation = process.argv[3];
let outputFileName = process.argv[4] || ''; // Use a let variable for outputFileName

if (!filePath || !operation) {
  console.error('Usage: node tell-it-cypher.mjs <file_path> <encode|decode> [<custom_file_name>]');
  process.exit(1);
}

async function encodeFileToBase64(inputFilePath, outputFilePath) {
  try {
    const data = await readFile(inputFilePath);
    const base64Data = data.toString('base64');
    await writeFile(outputFilePath, base64Data);
    //console.log('File encoded to base64 and saved as', outputFilePath);
  } catch (error) {
    console.error('Error encoding the file:', error);
  }
}

async function decodeBase64ToFile(inputFilePath, outputFilePath) {
  try {
    const base64Data = await readFile(inputFilePath, 'utf-8');
    const decodedData = Buffer.from(base64Data, 'base64');
    await writeFile(outputFilePath, decodedData);
   // console.log('Base64 decoded and saved as', outputFilePath);
  } catch (error) {
    console.error('Error decoding the base64 data:', error);
  }
}

function getFileExtension(filename) {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}

if (operation === 'encode') {
  if (!outputFileName) {
    outputFileName = 'cypher.txt'; // Use 'cypher.txt' as the default output file
  }

  encodeFileToBase64(filePath, outputFileName);
} else if (operation === 'decode') {
  if (!outputFileName) {
    outputFileName = 'clear.txt'; // Use 'clear.txt' as the default output file
  }

  decodeBase64ToFile(filePath, outputFileName);
}
