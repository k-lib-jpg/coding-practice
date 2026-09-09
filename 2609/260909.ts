const getRangeTs = (numbers:number[]):number => {
  let max:number = numbers[0];
  let min:number = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }

    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return max - min;
};

console.log(getRangeTs([8, 3, 15, 2, 10])); // 13
console.log(getRangeTs([10, 20, 30]));       // 20
console.log(getRangeTs([-5, -2, -10]));      // 8