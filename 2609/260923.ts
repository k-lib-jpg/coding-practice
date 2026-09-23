const mostFrequentTs = (numbers: number[]): number | undefined => {
 if (numbers.length === 0) {
  return undefined
}
 let mostCount = 0;
 let mostFrequentNum = numbers[0];
 for (let i = 0; i < numbers.length; i++) {
  let count = 0;
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[i] === numbers[j]) {
      count = count + 1;
    }
  }
  if (count > mostCount) {
      mostCount = count;
      mostFrequentNum = numbers[i];
    }
 }
 return mostFrequentNum;
};
console.log(
  mostFrequentTs([1, 2, 2, 3, 3, 3, 4])
);
// 3

console.log(
  mostFrequentTs([5, 5, 2, 2, 5])
);
// 5