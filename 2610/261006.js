// 数値配列numbersを受け取り、左から順番に見て、最初に「2回目の登場」が確認された数字を返すfirstDuplicateを作ってください。
const firstDuplicate = (numbers) => {
 const seen = new Set();
 for (let i = 0; i < numbers.length; i++) {
  let duplicateNum = seen.has(numbers[i]);
  seen.add(numbers[i]);
  if (duplicateNum === true) {
    return numbers[i];
  }
 }
 return undefined;
};

console.log(
  firstDuplicate([2, 1, 3, 5, 3, 2])
);
// 3

console.log(
  firstDuplicate([1, 2, 1, 2])
);
// 1

console.log(
  firstDuplicate([5, 5, 1, 2])
);
// 5

console.log(
  firstDuplicate([1, 2, 3, 4])
);
// undefined

console.log(
  firstDuplicate([7])
);
// undefined

console.log(
  firstDuplicate([])
);
// undefined

console.log(
  firstDuplicate([1, 2, 3, 2, 1])
);
// 2

// const firstDuplicate = (numbers) => {
//  const seen = new Set();
//  for (const number of numbers) {
//   if (seen.has(number)) {
//     return number;
//   }

//   seen.add(number);
// }

// return undefined;
// };