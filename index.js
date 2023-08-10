/*
// Only odds
// create array of numbers
const array = [1,2,3,4,5,6,7,8,9,10];
// if numbers are odd add to new array
const odds = [];
// output new array
array.forEach ((num) => {
    if ( num % 2 === 1) {
        odds.push(num);
    }
});
console.log (odds);
*/

/*
//Vowels for consonants

let vowel = 0;
let cons = 0;
const vowels = ['a','e','i','o','u'];
const string = ['hello'];

for (let index = 0; i < string.length; i++ ;) {
    //get each letter in string
    const currLetter = string[i];
    console.log(currLetter)
}
for (let index2 = 0; index2 < vowels.length; index2++) {
    const currvowels = vowels[index2]
    if (currLetter === currVowels) {
        isVowels = true;
    }

}
console.log(`${string} has ${noOfCons} consenants and ${noOfVowels} vowels`)
*/

// Reverse Array
// create an array that reverse your input
// create an array
const input = [1,2,3]
// need to go through input array values
const output = [];
const c = input[2]
output.unshift(c)
console.log(output)

const a = input[0];
output.push(a)
console.log(output)

const b = input[1];
output.splice(1,0, b)
console.log(output)

for(let i = array.length - 1; i >= 0; i--) {
  const valueAtIndex = array[i]
  
  reversedArray.push(valueAtIndex)
}

console.log(reversedArray)

for (let i = input.length -1; i>= 0; i--) {
    console.log(output)
    output.push(input[i]);
}

/*
// Fizz Buzz
// code an array that prints each number from 1-100
for ( let i = 1; i < 101; i++ ) {
    // for numbers that are multiples of both 3 and 5, print "fizzBuzz"
    if ( i % 15 == 0) console.log ('fizzBuzz');
    // for each multiple of 3, print "fizz"
    else if (i % 3 == 0) console.log ('fizz');
    // for each multiple of 5, print "buzz"
    else if (i % 5 == 0) console.log ('buzz');
    else console.log (i);
}
*/

 
