//数値の配列を受け取り、2番目に大きい数を返す関数 secondLargest を作ってください。
const secondLargest = (numbers) => {
  let largest = numbers[0];
  let second = undefined;
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
console.log(secondLargest([10, 4, 10])) // 4
console.log(secondLargest([3, 8, 2, 10, 5])); // 8
console.log(secondLargest([10, 20, 30]));      // 20
console.log(secondLargest([-5, -2, -10]));     // -5
console.log(secondLargest([7, 3]));            // 3