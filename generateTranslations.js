'use strict';
const excelToJson = require('convert-excel-to-json')
const fs = require('fs');

const result = excelToJson({
  sourceFile: 'test1.xlsx',
  columnToKey: {
    '*': '{{columnHeader}}'
  }
});

var ex = JSON.stringify(result);

var exx = ex.replace(/},{/g,'},\n{', );

fs.writeFileSync('test1.json', exx);
