//整数配列numbersを受け取り、同じ数字が連続している部分を1つにまとめた配列を返すremoveConsecutiveDuplicates関数を作ってください。
const removeConsecutiveDuplicates = (numbers) => {
  //数字を格納するための空配列resultを用意する
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
  //隣の数字が異なる場合数字を格納する
    if (numbers[i] !== numbers[i + 1]) {
     result.push(numbers[i])
    }
  }
  //resultの最後の数字
  return result;
}

console.log(
  removeConsecutiveDuplicates(
    [1, 1, 2, 2, 2, 3, 1, 1]
  )
);
// [1, 2, 3, 1]

console.log(
  removeConsecutiveDuplicates(
    [5, 5, 5, 5]
  )
);
// [5]

console.log(
  removeConsecutiveDuplicates(
    [1, 2, 3, 4]
  )
);
// [1, 2, 3, 4]

console.log(
  removeConsecutiveDuplicates(
    [1, 1, 2, 1, 1]
  )
);
// [1, 2, 1]

console.log(
  removeConsecutiveDuplicates([])
);
// []

//模範解答
// const removeConsecutiveDuplicates = (numbers) => {
//   const result = [];
//   if (numbers.length === 0) {
//     return result;
//   }

//   result.push(numbers[0]);

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] !== numbers[i - 1]) {
//       result.push(numbers[i]);
//     }
//   }

//   return result;
// }