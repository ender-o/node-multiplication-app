import fs from "fs";
import { yarg } from "./config/plugins/yarg.plugin";


console.log(yarg);

const {b:base, l:limit, s:show} = yarg;



let outputMEssage: string = "";

const message = `

============================

Tabla del ${base}

============================\n
`

for (let i = 0; i <= limit; i++) {

    outputMEssage += ` ${base} X ${i} = ${base * i} \n`
}

outputMEssage = message + outputMEssage;

if (show) console.log(outputMEssage);

const outputPath = `./outputs`;
fs.mkdirSync(outputPath, { recursive: true });

fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMEssage);
console.log('file created');
