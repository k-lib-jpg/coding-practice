// ECサイトの購入履歴を表す配列ordersを受け取り、ユーザーごとの購入金額の合計を計算するcalculateUserTotalsを作ってください。
// ただし、キャンセルされた注文は集計しません。
const calculateUserTotals = (orders) => {
 const orderInfo = new Map();
 for (const order of orders) {
  if (orders.status === "canceled") {
    
  }
 }
};

console.log(
  calculateUserTotals([
    { userId: "A", price: 1000, quantity: 2, status: "completed" },
    { userId: "B", price: 500, quantity: 3, status: "completed" },
    { userId: "A", price: 2000, quantity: 1, status: "cancelled" },
    { userId: "A", price: 300, quantity: 4, status: "completed" }
  ])
);
// [{ userId: "A", total: 3200 }, { userId: "B", total: 1500 }]

console.log(
  calculateUserTotals([
    { userId: "C", price: 100, quantity: 2, status: "cancelled" },
    { userId: "B", price: 200, quantity: 2, status: "completed" },
    { userId: "A", price: 300, quantity: 1, status: "completed" },
    { userId: "B", price: 100, quantity: 3, status: "completed" }
  ])
);
// [{ userId: "B", total: 700 }, { userId: "A", total: 300 }]

console.log(
  calculateUserTotals([
    { userId: "A", price: 100, quantity: 1, status: "cancelled" }
  ])
);
// []

console.log(calculateUserTotals([]));
// []