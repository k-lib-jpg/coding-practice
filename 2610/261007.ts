const firstThirdOccurrenceTS = (numbers: number[]): number | undefined => {
 const counts = new Map<number, number>();
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
  firstThirdOccurrenceTS([2, 1, 2, 3, 1, 2, 1])
);
// 2

console.log(
  firstThirdOccurrenceTS([5, 5, 1, 5, 1, 1])
);
// 5