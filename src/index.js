//once you make changes here you need to rebuild the main.js file in order to see the changes

const $ = require('jquery');

$('body').css('background-color', 'indianred'); //testing to see if jquery is active and functional

let sayHello = name => console.log(`Hello ${name}`);

sayHello('Graham');
sayHello('Tori');

const aNiceMessage = require('./say-hello.js');

console.log(aNiceMessage);