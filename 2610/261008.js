// 2つの数値配列 numbers1 と numbers2 を受け取り、両方の配列に存在する数字を、新しい配列にして返す intersectWithDuplicates を作ってください。
// ただし、今回は同じ数字が何回登場したかも考慮します。
const intersectWithDuplicates = (numbers1, numbers2) => {
 const dupArr = [];
 const counts = new Map();
 for (const number of numbers2) {
  const oldCounts = counts.get(number) ?? 0;
  const newCounts = oldCounts + 1;
  counts.set(number, newCounts);
 }
 for (const number of numbers1) {
  const remaining = counts.get(number) ?? 0;
  if (remaining > 0) {
    dupArr.push(number);
    const decreasing = remaining - 1;
    counts.set(number, decreasing);
  }
 }
 return dupArr;
};
console.log(
  intersectWithDuplicates([1, 2, 2, 3, 2], [2, 2, 4])
);
// [2, 2]

console.log(
  intersectWithDuplicates([4, 9, 4, 5], [4, 4, 4, 9])
);
// [4, 9, 4]

console.log(
  intersectWithDuplicates([1, 1, 2, 3], [1, 2, 2, 3])
);
// [1, 2, 3]

console.log(
  intersectWithDuplicates([1, 2, 3], [4, 5, 6])
);
// []

console.log(
  intersectWithDuplicates([], [1, 2, 3])
);
// []

console.log(
  intersectWithDuplicates([5, 5, 5], [5])
);
// [5]