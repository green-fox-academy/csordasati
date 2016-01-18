'use strict';

var vmi = new XMLHttpRequest();

// httprequest objektum kiiratasa
console.log(vmi);

var url = 'http://www.greenfoxacademy.com/';

//get keres elkuldese a greenfoxra
vmi.open('GET', url);
vmi.send();

