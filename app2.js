var fs = require('fs');

var readable = fs.createReadStream('./info.txt');
var writable = fs.createWriteStream('./info2.txt'); 

readable.pipe(writable);
