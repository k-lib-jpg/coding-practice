//2つの整数配列numbers1とnumbers2を受け取り、両方の配列に存在する数字を、重複なしで返すgetIntersection関数を作ってください。
// const getIntersection = (number1, number2) => {
//  let result = [];
//  let isFound = false;
//  for (let i = 0; i < number1.length; i++) {
//   for (let j = 0; j < number2.length; j++) {
//     if (number1[i] === number2[j] && isFound === false) {
//      result.push(number1[i])
//      isFound = true;
//     }
//     for (let k = 0; k < result.length; k++) {
//       if (j === number2.length - 1 && number1[i] !== number1[i + 1]) {
//         isFound = false;
//       } 
//     }
//   }
//  }
//  return result;
// };

const getIntersection = (number1, number2) => {
 let result = [];
 let isFound = false;
 for (let i = 0; i < number1.length; i++) {
  for (let j = 0; j < result.length; j++) {
    if (number1[i] === result[j]) {

    }
    if (number1[i] === number2)
  }
 }
 return result;
};

console.log(
  getIntersection(
    [1, 2, 2, 3, 4],
    [2, 2, 4, 5]
  )
);
// [2, 4]

console.log(
  getIntersection(
    [1, 1, 1],
    [1, 1]
  )
);
// [1]

console.log(
  getIntersection(
    [1, 2, 3],
    [4, 5, 6]
  )
);
// []

console.log(
  getIntersection(
    [-1, 0, 2, 3],
    [3, -1, 5]
  )
);
// [-1, 3]

console.log(
  getIntersection(
    [],
    [1, 2, 3]
  )
);
// []