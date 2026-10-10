type Stock = {
  id: string,
  quantity: number,
}

const processOrdersTs = (stocks: Stock[], orders: string[]): string[]  => {
 //注文する商品を格納する配列を宣言する
 const acceptedOrders: string[] = [];
 //在庫を記録する
 const currentStocks = new Map<string, number>();
 for (const stock of stocks) {
  currentStocks.set(stock.id, stock.quantity)
 };
 //在庫のある商品をproductsに格納する
 for (const order of orders) {
  const remaining = currentStocks.get(order) ?? 0;
  if (remaining >= 1) {
  acceptedOrders.push(order);
  const decreasing = remaining - 1;
  currentStocks.set(order, decreasing);
  }
}
 return acceptedOrders;
};

console.log(
  processOrdersTs(
    [
      { id: "A", quantity: 2 },
      { id: "B", quantity: 1 },
      { id: "C", quantity: 0 }
    ],
    ["A", "B", "A", "A", "C"]
  )
);
// ["A", "B", "A"]

console.log(
  processOrdersTs(
    [
      { id: "X", quantity: 1 },
      { id: "Y", quantity: 2 }
    ],
    ["Y", "X", "Y", "Y"]
  )
);
// ["Y", "X", "Y"]