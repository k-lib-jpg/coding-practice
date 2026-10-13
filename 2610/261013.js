// 正の整数で構成された配列numbersと、正の整数targetを受け取ります。
// 合計がtarget以上になる連続した部分配列のうち、最も短い長さを返すminSubarrayLengthを作成してください。
// 条件を満たす部分配列が存在しない場合は0を返します。
const minSubarrayLength = (numbers, target) => {
 let windowSum = 0;
 let minLength = Infinity;
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

console.log(minSubarrayLength([2, 3, 1, 2, 4, 3], 7));
// 2 → [4, 3]

console.log(minSubarrayLength([1, 4, 4], 4));
// 1 → [4]

console.log(minSubarrayLength([1, 1, 1, 1], 5));
// 0 → 条件を満たす部分配列なし

console.log(minSubarrayLength([1, 2, 3, 4, 5], 11));
// 3 → [3, 4, 5]

console.log(minSubarrayLength([5], 5));
// 1

console.log(minSubarrayLength([], 5));
// 0