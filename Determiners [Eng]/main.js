//! Package - For taking user input from the terminal 😭
const prompt = require('prompt-sync')();

const DETERMINERS = [
  'a', 'an', 'the', 'this', 'that', 'my',
  'our', 'your', 'his', 'her', 'its', 'their',
  'some', 'no', 'every', 'another', 'one',
  'these', 'any', 'each', 'both', 'enough',
  'much', 'many', 'those'
];

const userInput = prompt('Text: ');

// converting userInput into an [array]
const array = userInput.toLowerCase().split(' ');

//? Checks if there are determiners, [lists all the determiners];
const result = array.filter(val => DETERMINERS.includes(val));

//! Removes duplicate determiners
const removeDuplicates = (arr) => {
  return arr.filter((val, i) => arr.indexOf(val) === i);
}
console.log(removeDuplicates(result));