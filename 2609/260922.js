const isPalindrome = (text) => {
 let center = text.length / 2;
 let text1 = '';
 let text2 = '';
  for (let i = 0; i < center; i++) {
   text1 = text1 + text[i]
  }
  for (let j = text.length - 1; j > center; j--) {
   text2 = text2 + text[j]
  }
  if (text1 === text2) {
    return true
  } else { 
    return false
  }
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