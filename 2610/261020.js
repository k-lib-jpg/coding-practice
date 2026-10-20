// ECサイトの注文データから、顧客ごとの購入金額の合計を計算する関数calculateCustomerSalesを作成してください。

const orders = [
  { customerId: "C01", amount: 1000 },
  { customerId: "C02", amount: 2000 },
  { customerId: "C01", amount: 500 },
  { customerId: "C03", amount: 300 },
  { customerId: "C02", amount: 1000 }
];

const calculateCustomerSales = (orders) => {
  // idごとにまとめる
  const orderInfo = new Map();
  const orderAmount = [];
  for(const order of orders) {
    // for文にてamountをidごとに合計していき、orderInfoに入れる
    const newAmount = order.amount;
    const oldAmount = orderInfo.get(order.customerId) ?? 0;
    orderInfo.set(order.customerId, newAmount + oldAmount);
  }  
  // 列として出力する
  for (const [customerId, totalSpent] of orderInfo) {
    orderAmount.push({customerId, totalSpent});
  }
  return orderAmount
};

console.log(calculateCustomerSales(orders));