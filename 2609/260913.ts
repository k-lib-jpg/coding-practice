const secondLargestTs = (numbers:number[]):number|undefined => {
  let largest:number = numbers[0];
  let second: number|undefined = undefined;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i]>largest) {
      second = largest
      largest = numbers[i] 
    } else if (numbers[i] !== largest && ( (second === undefined) || (numbers[i] > second))) {
      second = numbers[i]
    }
  }

  return second;
};
console.log(secondLargestTs([10, 4, 10])) // 4
console.log(secondLargestTs([3, 8, 2, 10, 5])); // 8
console.log(secondLargestTs([10, 20, 30]));      // 20
console.log(secondLargestTs([-5, -2, -10]));     // -5
console.log(secondLargestTs([7, 3]));            // 3