'use strict';
const excelToJson = require('convert-excel-to-json')
const fs = require('fs');

const result = excelToJson({
  sourceFile: 'src/assets/translationsfile.xlsx',
  columnToKey: {
    '*': '{{columnHeader}}'
  }
});

console.log(result['Tabelle1']);

var ex = JSON.stringify(result['Tabelle1']);

var exx = ex.replace(/},{/g,'},\n{', );

fs.writeFileSync('src/assets/translationsfile.json', exx);
