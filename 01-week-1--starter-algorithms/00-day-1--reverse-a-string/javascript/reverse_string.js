function reverseString(str) {
  let reversed = str.split('').reverse().join('');

  console.log(reversed)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

//write a function that takes in a string and reverses the string
//create array with each element being letter of string
//loop backwards through array
//add data to a new array, join data back to a string

//Input: Cat ; Output: taC
//Input: Cooper; repooC

