// 0以上の整数の配列numbersと正の整数targetを受け取り、合計がtarget以上になる最短の連続区間を返す関数findShortestSubarrayを作成してください。
const findShortestSubarray = (numbers, target) => {
  let shortest = null;
  let start = 0;
  let sum = 0;
  for (let end = 0; end < numbers.length; end++) {
    sum += numbers[end];
    while (sum >= target) {
      const length = end - start + 1;
      if (shortest === null || shortest.length > length ) {
        shortest = {start: start, end: end, sum: sum, length: length};
      }
      sum -= numbers[start];
      start += 1;
    }
  }
  return shortest;
};

console.log(
  findShortestSubarray([2, 3, 1, 2, 4, 3], 7)
);