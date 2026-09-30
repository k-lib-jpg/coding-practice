///numbersには、0からnまでの整数のうち、1つだけ欠けた数字が入っています。欠けている数字を返すfindMissingNumberを作ってください。
const findMissingNumber = (numbers) => {
 //numbersの長さに応じた配列の合計値の計算を行う
 let expectedSum = 0;
 for (let i = 0; i <= numbers.length; i++) {
  expectedSum += i;
 };
 //numbers内の数値を合計する
 let actualSum = 0;
 for (let j = 0; j < numbers.length; j++) {
 actualSum += numbers[j];
 }
 //numbersSumとsumを引き算し、出た値を返す
 return expectedSum - actualSum;
};

console.log(
  findMissingNumber([3, 0, 1])
);
// 2

console.log(
  findMissingNumber([0, 1])
);
// 2

console.log(
  findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])
);
// 8

console.log(
  findMissingNumber([1])
);
// 0

console.log(
  findMissingNumber([0])
);
// 1