const getIntersectionTs = (number1: number[], number2: number[]): number[] => {
 const result: number[] = [];
 for (let i = 0; i < number1.length; i++) {
  let isFound = false;
  for (let k = 0; k < result.length; k++) {
      if (number1[i] === result[k]) {
      isFound = true;
      break;
      }
    }
  for (let j = 0; j < number2.length; j++) {
    if (isFound === false && number1[i] === number2[j]) {
    result.push(number1[i])
    break
    }
  }
 }
 return result;
};

console.log(
  getIntersectionTs(
    [1, 2, 2, 3, 4],
    [2, 2, 4, 5]
  )
);
// [2, 4]

console.log(
  getIntersectionTs(
    [1, 1, 1],
    [1, 1]
  )
);
// [1]