function reverseString(str) {
  let reversed = str.split('').reverse().join('');

  console.log(reversed)
}

//Input: Cat ; Output: taC
//Input: Cooper; repooC

//write a function that takes in a string of characters and reverses the string, returning a reversed string.
//create an array with each element being a letter of the str (.split)
//call .reverse on the array
//join the array together into a string

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;






