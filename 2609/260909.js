//次の関数をTypeScriptで作ってください。getRange([8, 3, 15, 2, 10]);配列の最大値 − 最小値を返します。
let getRange = (number) => {
 let max = number[0];
 for (let i=0; i<number.length; i++) {
  if (max<number[i]) {
    max = number[i]
  }
 }
 let min = max;
  for (let j=0; j<number.length; j++) {
  if (min>number[j]) {
    min = number[j]
  }
 }
 return max - min;
}

console.log(getRange([8, 3, 15, 2, 10])); // 13
console.log(getRange([10, 20, 30]));       // 20
console.log(getRange([-5, -2, -10]));      // 8

//模範解答1
// const getRange = (numbers) => {
//   let max = numbers[0];
//   let min = numbers[0];

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }

//     if (numbers[i] < min) {
//       min = numbers[i];
//     }
//   }

//   return max - min;
// };

// console.log(getRange([8, 3, 15, 2, 10])); // 13
// console.log(getRange([10, 20, 30]));       // 20
// console.log(getRange([-5, -2, -10]));      // 8