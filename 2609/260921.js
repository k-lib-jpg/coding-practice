//株を1回だけ売買したときの最大利益
const maxProfit = (numbers) => {
 let minPrice = numbers[0];
 let profit = 0;
 let maxProfit = 0; 
 for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < minPrice) {
    minPrice = numbers[i];
  }
  profit = numbers[i] - minPrice;
  if (profit > maxProfit) {
    maxProfit = profit;
  }
 }
 return maxProfit;
};

console.log(
  maxProfit([7, 4, 5, 3, 6, 1])
);
// 3

console.log(
  maxProfit([7, 6, 4, 3, 1])
);
// 0

console.log(
  maxProfit([2, 4, 1, 8])
);
// 7
// 1で買って8で売る

console.log(
  maxProfit([3, 3, 3, 3])
);
// 0

console.log(
  maxProfit([5])
);
// 0

console.log(
  maxProfit([])
);
// 0

console.log(
  maxProfit([1, 5, 3])
);
// 4