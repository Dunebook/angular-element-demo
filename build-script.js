const concat = require('concat');
 
const files = [
	'./dist/testNG/runtime.js',
	'./dist/testNG/polyfills.js',
	'./dist/testNG/main.js'
];

const outputFile = './dist/final-bundle.js';

concat(files, outputFile);