const removeDuplicatesSortedTs = (numbers: number[]): number[] => {
  if (numbers.length === 0) {
    return [];
  }

  const result = [numbers[0]];
  let write = 0;

  for (let read = 1; read < numbers.length; read++) {
    if (numbers[read] !== result[write]) {
      result.push(numbers[read]);
      write++;
    }
  }

  return result;
};

console.log(removeDuplicatesSortedTs([1, 1, 2, 2, 3, 3, 4]));
// [1, 2, 3, 4]

console.log(removeDuplicatesSortedTs([1, 1, 1, 1]));
// [1]

console.log(removeDuplicatesSortedTs([1, 2, 3, 4]));
// [1, 2, 3, 4]