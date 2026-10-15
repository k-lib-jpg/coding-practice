type Order = {
  productId: string;
  price: number;
  quantity: number;
  status: "completed" | "cancelled";
}

type ProductRanking = {
  productId: string;
  totalSales: number;
}

const getProductRankingTs = (orders: Order[]): ProductRanking[] => {
//  集計する
 const sales = new Map<string, number>();
 const result: ProductRanking[] = [];
 for (const order of orders) {
  if (order.status === "completed") {
    const oldTotal = order.price * order.quantity;
    const currentTotal = sales.get(order.productId) ?? 0;
    sales.set(order.productId, oldTotal + currentTotal);
  }
 }
//  配列に変化する
 for (const [productId, totalSales] of sales) {
  result.push({productId, totalSales});
 }
//  並び替える
 const productRanking = result.sort((a, b) => {
  if (a.totalSales === b.totalSales) {
    return a.productId.localeCompare(b.productId);
  }
  return b.totalSales - a.totalSales;
 });
 return productRanking;
};

console.log(getProductRankingTs([
  { productId: "A", price: 1000, quantity: 2, status: "completed" },
  { productId: "B", price: 2000, quantity: 1, status: "completed" },
  { productId: "A", price: 1000, quantity: 3, status: "completed" },
  { productId: "C", price: 500, quantity: 4, status: "cancelled" },
  { productId: "B", price: 2000, quantity: 2, status: "completed" },
  { productId: "C", price: 500, quantity: 5, status: "completed" }
]));
// [
//   { productId: "B", totalSales: 6000 },
//   { productId: "A", totalSales: 5000 },
//   { productId: "C", totalSales: 2500 }
// ]

console.log(getProductRankingTs([
  { productId: "B", price: 100, quantity: 2, status: "completed" },
  { productId: "A", price: 200, quantity: 1, status: "completed" }
]));
// [
//   { productId: "A", totalSales: 200 },
//   { productId: "B", totalSales: 200 }
// ]