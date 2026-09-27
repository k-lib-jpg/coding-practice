const removeConsecutiveDuplicatesTs = (numbers: number[]): number[] => {
  const result: number[] = [];
  if (numbers.length === 0) {
    return result;
  }

  result.push(numbers[0]);

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i - 1]) {
      result.push(numbers[i]);
    }
  }

  return result;
}

console.log(
  removeConsecutiveDuplicatesTs(
    [1, 1, 2, 1, 1]
  )
);
// [1, 2, 1]

console.log(
  removeConsecutiveDuplicatesTs([])
);
// []