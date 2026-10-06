const firstDuplicateTs = (numbers: number[]): number | undefined => {
 const seen = new Set<number>();
 for (const number of numbers) {
  if (seen.has(number)) {
    return number;
  }

  seen.add(number);
}

return undefined;
};

console.log(
  firstDuplicateTs([2, 1, 3, 5, 3, 2])
);
// 3

console.log(
  firstDuplicateTs([1, 2, 1, 2])
);
// 1

console.log(
  firstDuplicateTs([5, 5, 1, 2])
);
// 5