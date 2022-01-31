function isPalindrome(word) {
  let reversed = word.split("").reverse().join("")
  return word = reversed
}
isPalindrome("abba")
isPalindrome("racecar")
isPalindrome("a")
isPalindrome("robot")
isPalindrome("ab")


/* 
// will take in an input "word" and turn it into an array
// it will reverse the array and then will compare the reversed and original array
// if it passes check return a true
// if not, return a false
*/

/*
  Add written explanation of your solution here = ^
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("anna"));

  console.log("");
}

module.exports = isPalindrome;
