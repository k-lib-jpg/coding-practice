const minSubarrayLengthTs = (numbers: number[], target: number): number => {
 let windowSum = 0;
 let minLength: number = Infinity;
 let left = 0;
 for (let i = 0; i < numbers.length; i++) {
  windowSum += numbers[i];
  while (windowSum >= target) {
  const currentLength = i - left + 1;
  if (currentLength < minLength) {
    minLength = currentLength;
  }
  windowSum -= numbers[left];
  left++;
 }
 }
 if (minLength === Infinity) {
  return 0;
 }
 return minLength;
};

console.log(minSubarrayLengthTs([2, 3, 1, 2, 4, 3], 7));
// 2 → [4, 3]

console.log(minSubarrayLengthTs([1, 4, 4], 4));
// 1 → [4]