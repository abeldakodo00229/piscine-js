import { opendir } from 'node:fs/promises';


  let directoryPath = process.argv[2];

  if (!directoryPath) {
    directoryPath = './';
  }

  try {
    let count = 0;
    const dir = await opendir(directoryPath);
    for await (const dirent of dir) {
      count++;
    }
    console.log(count);
  } catch (err) {
    console.error('Error');
  }



