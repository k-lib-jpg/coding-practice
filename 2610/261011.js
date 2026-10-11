// 昇順（小さい順）に並んだ数値配列 numbers と目標値 target を受け取り、合計がtargetになる2つの数字を探すfindPairSortedを作ってください。
// 見つかった場合は、その2つの数字を配列で返します。見つからなければundefinedを返してください。
const findPairSorted = (numbers, target) => {
 let left = 0;
 let right = numbers.length - 1;
 while (right > left) {
  if (numbers[left] + numbers[right] === target) {
    return [numbers[left], numbers[right]];
  };
  if (numbers[left] + numbers[right] > target) {
   right--;
  } else if (numbers[left] + numbers[right] < target) {
   left++;
  };
 }
 return undefined;
};

console.log(findPairSorted([1, 2, 4, 6, 9], 10));
// [1, 9]

console.log(findPairSorted([1, 2, 4, 6, 9], 8));
// [2, 6]

console.log(findPairSorted([1, 3, 5, 7], 12));
// [5, 7]

console.log(findPairSorted([1, 2, 3, 4], 20));
// undefined

console.log(findPairSorted([3, 3], 6));
// [3, 3]

console.log(findPairSorted([5], 10));
// undefined

console.log(findPairSorted([], 10));
// undefined