const findPairSortedTs = (numbers: number[], target: number): [number, number] | undefined => {
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

console.log(findPairSortedTs([1, 2, 4, 6, 9], 10));
// [1, 9]

console.log(findPairSortedTs([1, 2, 4, 6, 9], 8));
// [2, 6]

console.log(findPairSortedTs([1, 3, 5, 7], 12));
// [5, 7]