//数値の配列を受け取り、**「5以上の数だけを取り出して、それぞれ2倍した新しい配列」**を返す関数 doubleOverFive を作ってください。
// const doubleOverFive = (numbers) => {
//  let doubleNumbers = [];
//  for (let i=0; i<numbers.length; i++) {
//   if (numbers[i]>=5) {
//     numbers[i] = numbers[i]*2;
//     doubleNumbers.push(numbers[i]);
//   }
//  }
//  return doubleNumbers;
// };

// console.log(doubleOverFive([2, 5, 8, 3, 10]));
// // [10, 16, 20]

// console.log(doubleOverFive([1, 2, 3, 4]));
// // []

// console.log(doubleOverFive([5]));
// // [10]

// console.log(doubleOverFive([10, 20, 30]));
// // [20, 40, 60]

// console.log(doubleOverFive([]));
// // []

//模範解答（配列を書き換えないバージョン）
const doubleOverFive = (numbers) => {
  const doubleNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 5) {
      doubleNumbers.push(numbers[i] * 2);
    }
  }

  return doubleNumbers;
};