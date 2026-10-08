const intersectWithDuplicatesTs = (numbers1: number[], numbers2: number[]): number[]  => {
 const dupArr = [];
 const counts = new Map<number, number>();
 for (const number of numbers2) {
  const oldCounts = counts.get(number) ?? 0;
  const newCounts = oldCounts + 1;
  counts.set(number, newCounts);
 }
 for (const number of numbers1) {
  const remaining = counts.get(number) ?? 0;
  if (remaining >= 1) {
    dupArr.push(number);
    const decreasing = remaining - 1;
    counts.set(number, decreasing);
  }
 }
 return dupArr;
};
console.log(
  intersectWithDuplicatesTs([1, 2, 2, 3, 2], [2, 2, 4])
);
// [2, 2]

console.log(
  intersectWithDuplicatesTs([4, 9, 4, 5], [4, 4, 4, 9])
);
// [4, 9, 4]