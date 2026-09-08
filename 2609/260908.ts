//number[] を受け取り、その中に含まれている偶数だけを合計して返す関数 sumEvenNumbers を作成してください。
//typescriptで書くこと
const sumEvenNumbersTs = (number: number[]): number => {
  let sum: number = 0;
  for (let i=0; i<number.length; i++) {
    if (number[i] % 2 === 0) {
      sum = sum + number[i]
    }
  }
  return sum;
}

console.log(sumEvenNumbersTs([3, 8, 2, 5, 10]));
console.log(sumEvenNumbersTs([2, 4, 6]));
console.log(sumEvenNumbersTs([])); 
