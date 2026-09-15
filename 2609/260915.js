//在庫あり（inStock === true）の商品だけを対象に、price × quantity の合計金額を求める関数 calculateSales を作成する

const calculateSales = (productsContents) => {
  let amount = 0;
  for (let k = 0; k<productsContents.length; k++) {
    if (productsContents[k].inStock === true) {
      amount = amount + productsContents[k].price*productsContents[k].quantity;
    }
  }
  return amount;
};

console.log(
  calculateSales([
    { name: "Keyboard", price: 5000, quantity: 2, inStock: true },
    { name: "Mouse", price: 3000, quantity: 3, inStock: true },
    { name: "Monitor", price: 20000, quantity: 1, inStock: false },
    { name: "USB Cable", price: 1000, quantity: 5, inStock: true }
  ])
);
// 24000

console.log(
  calculateSales([
    { name: "A", price: 1000, quantity: 3, inStock: false },
    { name: "B", price: 2000, quantity: 2, inStock: false }
  ])
);
// 0

console.log(
  calculateSales([
    { name: "A", price: 500, quantity: 10, inStock: true }
  ])
);
// 5000

console.log(calculateSales([]));
// 0

//模範解答
// const calculateSales = (products) => {
//   let amount = 0;

//   for (const product of products) {
//     if (product.inStock === true) {
//       amount += product.price * product.quantity;
//     }
//   }

//   return amount;
// };