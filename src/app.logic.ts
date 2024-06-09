import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugins';

const { b: base, l: limit, s: showTable, d: destination, n: name } = yarg;
const outputPath = `outputs`;
let outputMessage = '';
const headerMessage = `
=========================
    Tabla del ${base}
=========================\n
`;

outputMessage = headerMessage + outputMessage;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${destination}/${name}-${base}.txt`, outputMessage);
console.log('File created!');
