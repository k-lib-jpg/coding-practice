// 昇順に並んだ数値配列numbersを受け取り、重複した数字を取り除いた新しい配列を返すremoveDuplicatesSortedを作成してください。
const removeDuplicatesSorted = (numbers) => {
 if (numbers.length === 0) {
  return [];
 }
 let read = numbers[0];
 let write = [];
 write.push(numbers[0]);
 for (let i = 1; i < numbers.length; i++) {
  if (read !== numbers[i]) {
    write.push(numbers[i]);
    read = numbers[i];
  } 
 }
 return write;
};

console.log(removeDuplicatesSorted([1, 1, 2, 2, 3, 3, 4]));
// [1, 2, 3, 4]

console.log(removeDuplicatesSorted([1, 1, 1, 1]));
// [1]

console.log(removeDuplicatesSorted([1, 2, 3, 4]));
// [1, 2, 3, 4]

console.log(removeDuplicatesSorted([]));
// []

console.log(removeDuplicatesSorted([5]));
// [5]

console.log(removeDuplicatesSorted([-3, -3, -1, 0, 0, 2]));
// [-3, -1, 0, 2]

// const removeDuplicatesSorted = (numbers) => {
//   if (numbers.length === 0) {
//     return [];
//   }

//   const result = [numbers[0]];
//   let write = 0;

//   for (let read = 1; read < numbers.length; read++) {
//     if (numbers[read] !== result[write]) {
//       result.push(numbers[read]);
//       write++;
//     }
//   }

//   return result;
// };