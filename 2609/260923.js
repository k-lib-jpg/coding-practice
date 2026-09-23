//整数の配列numbersを受け取り、最も多く出現する数字を返すmostFrequent関数を作ってください。

const mostFrequent = (numbers) => {
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
  mostFrequent([1, 2, 2, 3, 3, 3, 4])
);
// 3

console.log(
  mostFrequent([5, 5, 2, 2, 5])
);
// 5

console.log(
  mostFrequent([2, 1, 1, 2])
);
// 2

console.log(
  mostFrequent([7])
);
// 7

console.log(
  mostFrequent([-1, -1, 2, 3, -1])
);
// -1