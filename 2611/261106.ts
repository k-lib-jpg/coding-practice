type ShortestNum = {
  start: number,
  end: number,
  sum: number,
  length: number
}

const findShortestSubarrayTs = (numbers:number[], target:number): ShortestNum | null => {
  let shortest: ShortestNum | null = null;
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
  findShortestSubarrayTs([2, 3, 1, 2, 4, 3], 7)
);