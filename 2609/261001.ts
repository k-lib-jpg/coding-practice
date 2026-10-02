const containsDuplicateTs = (numbers: number[]): boolean => {
  const seen = new Set<number>();

  for (let i = 0; i < numbers.length; i++) {
    if (seen.has(numbers[i])) {
      return true;
    }

    seen.add(numbers[i]);
  }

  return false;
};

console.log(
  containsDuplicateTs([1, 2, 3, 1])
);
// true

console.log(
  containsDuplicateTs([1, 2, 3, 4])
);
// false