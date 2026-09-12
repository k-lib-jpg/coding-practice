const removeDuplicatesTs = (numbers: number[]): number[] => {
  let result: number[] = [];
  for (let i = 0; i < numbers.length; i++) { 
    let isFound: boolean = false;
    for (let j = 0; j < result.length; j++) { 
      if (numbers[i] === result[j]) {
        isFound = true;
        break
      }   
    }
    if (isFound === false) {
        result.push(numbers[i]);
    } 
  }
  return result;
}

console.log(removeDuplicatesTs([1, 2, 2, 3, 1, 4]));
// [1, 2, 3, 4]
console.log(removeDuplicatesTs([1, 1, 1]));
// [1]
console.log(removeDuplicatesTs([5, 3, 5, 2, 3]));
// [5, 3, 2]
console.log(removeDuplicatesTs([]));
// []