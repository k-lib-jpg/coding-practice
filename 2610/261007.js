//数値配列 numbers を左から順番に確認して、最初に「3回目の登場」が確認された数字を返す firstThirdOccurrence を作ってください。
const firstThirdOccurrence = (numbers) => {
 const counts = new Map();
 for (const number of numbers) {
  const oldCounts = counts.get(number) ?? 0;
  const newCounts = oldCounts + 1;
  counts.set(number, newCounts);
  if (newCounts === 3) {
    return number;
  }
 }
 return undefined;
};

console.log(
  firstThirdOccurrence([2, 1, 2, 3, 1, 2, 1])
);
// 2

console.log(
  firstThirdOccurrence([5, 5, 1, 5, 1, 1])
);
// 5

console.log(
  firstThirdOccurrence([1, 2, 3, 1, 2, 3, 1])
);
// 1

console.log(
  firstThirdOccurrence([4, 4, 4])
);
// 4

console.log(
  firstThirdOccurrence([1, 1, 2, 2])
);
// undefined

console.log(
  firstThirdOccurrence([])
);
// undefined