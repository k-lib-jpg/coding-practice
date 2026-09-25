//2つの整数配列numbers1とnumbers2を受け取り、両方の配列に存在する数字を、重複なしで返すgetIntersection関数を作ってください。
const getIntersection = (number1, number2) => {
 let result = [];
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

//模範解答
// for (let i = 0; i < number1.length; i++) {
//   let isFound = false;

//   for (let k = 0; k < result.length; k++) {
//     if (number1[i] === result[k]) {
//       isFound = true;
//       break;
//     }
//   }

//   if (isFound) {
//     continue;
//   }

//   for (let j = 0; j < number2.length; j++) {
//     if (number1[i] === number2[j]) {
//       result.push(number1[i]);
//       break;
//     }
//   }
// }