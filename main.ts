import fs from 'fs';

const readmeFile = fs.readFileSync('./README.md');

const readme = readmeFile.toString();

console.log(readme);

fs.writeFileSync('./README.copy.md', 'Copia from README.md\n\n' + readme);