// 商品の在庫を表す配列 stocks と、注文された商品IDの配列 orders を受け取り、在庫がある注文だけを受け付ける processOrders を作ってください。
// 在庫がない商品の注文は無視します。
const processOrders = (stocks, orders) => {
 const currentStocks = new Map();
 for (const [key, value] in Object.entries(stocks)) {
  currentStocks.set(key, value)
 };
 for (let i = 0; i < orders.length; i++) {
  const remaining = currentStocks.get(orders[i]) ?? 0;
  const decreasing = remaining - 1;
  currentStocks.set(key, decreasing);
 }
};

console.log(
  processOrders(
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
  processOrders(
    [
      { id: "X", quantity: 1 },
      { id: "Y", quantity: 2 }
    ],
    ["Y", "X", "Y", "Y"]
  )
);
// ["Y", "X", "Y"]

console.log(
  processOrders(
    [{ id: "A", quantity: 1 }],
    ["B", "A", "B"]
  )
);
// ["A"]

console.log(
  processOrders([], ["A", "B"])
);
// []

console.log(
  processOrders(
    [{ id: "A", quantity: 3 }],
    []
  )
);
// []