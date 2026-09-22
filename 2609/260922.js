const isPalindrome = (text) => {
 let lastNumber = text.length - 1;
 let centerNumber = Math.floor(text.length / 2);
  for (let i = 0; i < centerNumber; i++) {
   if (text[i] !== text[lastNumber - i]) {
    return false
  }
 } 
 return true;
};

console.log(isPalindrome("level"));
// true

console.log(isPalindrome("racecar"));
// true

console.log(isPalindrome("hello"));
// false

console.log(isPalindrome("abba"));
// true

console.log(isPalindrome("abcba"));
// true

console.log(isPalindrome("abca"));
// false

console.log(isPalindrome("a"));
// true

console.log(isPalindrome(""));
// true