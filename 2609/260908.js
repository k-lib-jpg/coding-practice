//number[] を受け取り、その中に含まれている偶数だけを合計して返す関数 sumEvenNumbers を作成してください。
let number = [3, 8, 2, 5, 10];
const sumEvenNumbers = () => {
  let evenNumber = [];
  for (let i=0; i<5; i++) {
    if (number[i] % 2 === 0) {
      evenNumber.push(number[i])
    }
  }
  let sum =0;
  for (let j=0; j<evenNumber.length; j++) {
    sum=sum+evenNumber[j]
  }
  return sum;
}

console.log(sumEvenNumbers());

//模範解答1
// const sumEvenNumbers = (number) => {
//   let sum = 0;
//   for (let i=0; i<number.length; i++) {
//     if (number[i] % 2 === 0) {
//       sum = sum + number[i]
//     }
//   }
//   return sum;
// }

// console.log(sumEvenNumbers([3, 8, 2, 5, 10]));
