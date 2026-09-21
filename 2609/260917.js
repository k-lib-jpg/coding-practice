//数値の配列を受け取り、偶数が連続している部分のうち、最も長い連続回数を返すlongestEvenStreak関数を作ってください。
// const longestEvenStreak = (numbers) => {
//  let count = 0;
//  let countNumbers = [];
//  for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     count++;
//   } else {
//     countNumbers.push(count);
//     count = 0;
//   }
//  }
//  countNumbers.push(count);
//  let max = Math.max(...countNumbers);
//  return max;
// }
// console.log(
//   longestEvenStreak([1, 2, 4, 6, 3, 8, 10])
// );
// // 3
// console.log(
//   longestEvenStreak([2, 4, 6, 8])
// );
// // 4
// console.log(
//   longestEvenStreak([1, 3, 5, 7])
// );
// // 0
// console.log(
//   longestEvenStreak([2, 4, 3, 6, 8, 10, 5])
// );
// // 3
// console.log(
//   longestEvenStreak([2, 3, 4, 6])
// );
// // 2
// console.log(longestEvenStreak([]));
// // 0

//模範解答
const longestEvenStreak = (numbers) => {
 let count = 0;
 let max = 0;
 for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    count++;
      if (count > max) {
      max = count;
    } 
  } else {
      count = 0;
    } 
 }
 return max;
}