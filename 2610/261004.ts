const twoSumTs = (numbers: number[], target: number): [number, number]| undefined => {
 const addNumber = new Map<number, number>();
 for (let i = 0; i < numbers.length; i++) {
  const needNumber = target - numbers[i];
  const oldIndex = addNumber.get(needNumber);
  if (oldIndex !== undefined) {
    return [oldIndex, i];
  }
  addNumber.set(numbers[i], i);
 }
 return undefined
};

console.log(
  twoSumTs([2, 7, 11, 15], 9)
);
// [0, 1]

console.log(
  twoSumTs([3, 2, 4], 6)
);
// [1, 2]