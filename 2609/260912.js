//数値の配列を受け取り、重複している値を1つにまとめた新しい配列を返す関数 removeDuplicates を作ってください。
const removeDuplicates = (numbers) => {
  let result = [];
  for (let i = 0; i < numbers.length; i++) { 
    let isFound = false;
    for (let j = 0; j < result.length; j++) { 
      if (numbers[i] === result[j]) {
        isFound = true;
        braak
      }   
    }
    if (isFound === false) {
        result.push(numbers[i]);
    } 
  }
  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 1, 4]));
// [1, 2, 3, 4]
console.log(removeDuplicates([1, 1, 1]));
// [1]
console.log(removeDuplicates([5, 3, 5, 2, 3]));
// [5, 3, 2]
console.log(removeDuplicates([]));
// []