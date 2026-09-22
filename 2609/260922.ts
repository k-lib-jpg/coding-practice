const isPalindromeTs = (text: string): boolean => {
 let lastNumber = text.length - 1;
 let centerNumber = Math.floor(text.length / 2);
  for (let i = 0; i < centerNumber; i++) {
   if (text[i] !== text[lastNumber - i]) {
    return false
  }
 } 
 return true;
};

console.log(isPalindromeTs("level"));
// true

console.log(isPalindromeTs("racecar"));
// true