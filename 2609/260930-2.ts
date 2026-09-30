const findMissingNumberTs = (numbers: number[]): number => {
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
  findMissingNumberTs([3, 0, 1])
);
// 2

console.log(
  findMissingNumberTs([0, 1])
);
// 2