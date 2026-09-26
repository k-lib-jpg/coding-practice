const removeConsecutiveDuplicates = (numbers) => {
  //数字を格納するための空配列nuNumを用意する
  let nuNum = [];
  for (let i = 0; i < numbers.length; i++) {
  //隣の数字が異なる場合数字を格納する
    if (numbers[i] !== numbers[i + 1]) {
     nuNum.push(numbers[i])
    }
  }
  //nuNumの最後の数字
  return nuNum;
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