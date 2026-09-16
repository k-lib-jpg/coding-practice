const countIncreasesTs = (numbers:number[]):number => {
  let count:number = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 1]) {
      count++;
    }
  }

  return count;
};

console.log(countIncreasesTs([10, 15, 12, 20, 20, 25]));
// 3
