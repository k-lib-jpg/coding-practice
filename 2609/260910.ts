const countEvenOverTentS = (numbers:number[]):number => {
  let count:number = 0;
  for (let i = 0; i<numbers.length; i++) {
    if (numbers[i] >= 10 && numbers[i] % 2 === 0) {
    count = count + 1;
    }
  }
  return count;
};

console.log(countEvenOverTentS([3, 10, 12, 7, 20, 8])); // 3
console.log(countEvenOverTentS([2, 4, 6, 8]));           // 0
console.log(countEvenOverTentS([11, 13, 15]));           // 0
console.log(countEvenOverTentS([10, 20, 30, 40]));       // 4
console.log(countEvenOverTentS([]));                     // 0