//数値の配列を受け取り、「10以上かつ偶数」の要素が何個あるかを返す関数 countEvenOverTen を作る
const countEvenOverTen = (numbers) => {
  let count = 0;
  for (let i = 0; i<numbers.length; i++) {
    if (numbers[i] >= 10 && numbers[i] % 2 === 0) {
    count = count + 1;
    }
  }
  return count;
};

console.log(countEvenOverTen([3, 10, 12, 7, 20, 8])); // 3
console.log(countEvenOverTen([2, 4, 6, 8]));           // 0
console.log(countEvenOverTen([11, 13, 15]));           // 0
console.log(countEvenOverTen([10, 20, 30, 40]));       // 4
console.log(countEvenOverTen([]));                     // 0
