const hasPairWithSumTs = (numbers:number[], target:number):boolean => {
 for (let i = 0; i<numbers.length; i++) {
  for (let j = i + 1; j<numbers.length; j++) {
    if (numbers[i] + numbers[j] === target) {
      return true;
    } 
   }
  }
 return false;
 };

console.log(
  hasPairWithSumTs([2, 7, 11, 15], 9)
);
// true