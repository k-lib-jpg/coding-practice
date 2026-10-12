// 数値配列numbersと整数kを受け取り、連続するk個の数字の合計のうち、最大値を返すmaxSubarraySumを作成してください。
const maxSubarraySum = (numbers, k) => {
 if (k > numbers.length) {
  return undefined;
 }
 let max;
 let window = 0;
 for (let i = 0; i < numbers.length; i++) {
  window += numbers[i];
  if (i > k - 1) {
   window -= numbers[i - k];
  } else if (i === k - 1) {
   max = window;
  }
  if (window > max) {
    max = window;
  }
 }
 return max;
};

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3));
// 9

console.log(maxSubarraySum([1, 2, 3, 4, 5], 2));
// 9

console.log(maxSubarraySum([5, 5, 5, 5], 3));
// 15

console.log(maxSubarraySum([-5, -2, -8, -1], 2));
// -7

console.log(maxSubarraySum([10], 1));
// 10

console.log(maxSubarraySum([1, 2], 3));
// undefined

console.log(maxSubarraySum([], 2));
// undefined

//模範解答
// const maxSubarraySum = (numbers, k) => {
//   if (k > numbers.length) {
//     return undefined;
//   }

//   let windowSum = 0;

//   // ① 最初のk個の合計を計算
//   for (let i = 0; i < k; i++) {
//     windowSum += numbers[i];
//   }

//   let maxSum = windowSum;

//   // ② ウィンドウを右に移動
//   for (let i = k; i < numbers.length; i++) {
//     windowSum += numbers[i];
//     windowSum -= numbers[i - k];

//     // ③ 最大値を更新
//     if (windowSum > maxSum) {
//       maxSum = windowSum;
//     }
//   }

//   return maxSum;
// };