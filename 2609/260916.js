//数値の配列を受け取り、1つ前の数値より大きくなった回数を返すcountIncreases関数を作ってください。
const countIncreases = (numbers) => {
  let count = 0;
 for (let i = 0; i<numbers.length-1; i++) {
  if (numbers[i]<numbers[i+1]) {
    count = count + 1;
  }
 }
 return count;
};

console.log(countIncreases([10, 15, 12, 20, 20, 25]));
// 3

console.log(countIncreases([1, 2, 3, 4, 5]));
// 4

console.log(countIncreases([5, 4, 3, 2, 1]));
// 0

console.log(countIncreases([3, 3, 3]));
// 0

console.log(countIncreases([10]));
// 0

console.log(countIncreases([]));
// 0

//
// const countIncreases = (numbers) => {
//   let count = 0;

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > numbers[i - 1]) {
//       count++;
//     }
//   }

//   return count;
// };