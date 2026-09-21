//整数の配列numbersと整数targetを受け取り、配列の中から異なる2つの要素を足してtargetになる組み合わせが存在するかを判定する関数hasPairWithSumを作る
const hasPairWithSum = (numbers, target) => {
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
  hasPairWithSum([2, 7, 11, 15], 9)
);
// true

console.log(
  hasPairWithSum([1, 2, 3, 4], 10)
);
// false

console.log(
  hasPairWithSum([3, 5, 8, 2], 10)
);
// true

console.log(
  hasPairWithSum([5, 5], 10)
);
// true

console.log(
  hasPairWithSum([5], 10)
);
// false

console.log(
  hasPairWithSum([-3, 1, 4, 7], 4)
);
// true

console.log(
  hasPairWithSum([], 10)
);
// false