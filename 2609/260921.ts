const maxProfitTs = (numbers: number[]): number => {
 if (numbers.length === 0) {
  return 0;
 }
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
  maxProfitTs([7, 4, 5, 3, 6, 1])
);
// 3

console.log(
  maxProfit([])
);
// 0