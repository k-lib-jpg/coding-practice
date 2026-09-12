//数値の配列を受け取り、2番目に大きい数を返す関数 secondLargest を作ってください。
const secondLargest = numbers => {
  for (let i = 0; i<numbers.length; i++) {
    for (let j = 0; j<numbers.length-i-1; j++)
    if (numbers[j]>numbers[j+1]) {
      [numbers[j], numbers[j+1]] = [numbers[j+1], numbers[j]];
    }
  }
  return numbers[numbers.length-2];
}

console.log(secondLargest([3, 8, 2, 10, 5])); // 8
console.log(secondLargest([10, 20, 30]));      // 20
console.log(secondLargest([-5, -2, -10]));     // -5
console.log(secondLargest([7, 3]));            // 3