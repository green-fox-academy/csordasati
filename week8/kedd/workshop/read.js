'use strict';

//fajl olvasasa (file system => olvasas, iras, stb)
var fs = require('fs');

var content = fs.readFileSync('alma.txt');

console.log(content.toString());