// 顧客ごとに次の2つを集計する関数calculateCustomerStatsを作成してください。
// - totalSpent：購入金額の合計
// - orderCount：注文回数

const orders = [
  { customerId: "C01", amount: 1000 },
  { customerId: "C02", amount: 2000 },
  { customerId: "C01", amount: 500 },
  { customerId: "C03", amount: 300 },
  { customerId: "C02", amount: 1000 }
];

const calculateCustomerStats = (orders) => {
  // Idごとにまとめる
  const orderInfo = new Map();
  const result = [];
  // for文でオブジェクトごとにまとめる
  for (const order of orders) {
    const newTotalSpent = order.amount;
    const oldTotalSpent = ;
    const newOrderCount = ;
    const oldOrderCount = ;
    orderInfo.set(customerId, {
      totalSpent: newTotalSpent + oldTotalSpent,
      orderCount: newOrderCount + oldOrderCount,
    })
  }
  // 数列に出力する
};

console.log(calculateCustomerStats(orders));