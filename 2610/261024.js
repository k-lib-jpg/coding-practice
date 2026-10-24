const orders = [
  { customerId: "C01", amount: 1000, status: "completed" },
  { customerId: "C02", amount: 2000, status: "completed" },
  { customerId: "C01", amount: 500, status: "cancelled" },
  { customerId: "C03", amount: 300, status: "completed" },
  { customerId: "C02", amount: 1000, status: "cancelled" },
  { customerId: "C01", amount: 1500, status: "completed" },
  { customerId: "C04", amount: 800, status: "cancelled" }
];

const calculateCompletedOrders = (orders) => {
 // ① 顧客IDごとに集計するMapを作成する
 const customerInfo = new Map();
 // ② for文でordersから注文を1件ずつ取り出す
 for (const order of orders) {
  // ③ statusがcompletedでなければ、その注文をスキップする
  if (order.status === "completed") {
  // 別解 
  // if (order.status !== "completed") {
  //  continue;
  // }
   // ④ Mapに顧客IDが存在しなければ、totalSpent: 0、orderCount: 0で初期登録する
   if (!customerInfo.has(order.customerId)) {
    customerInfo.set(order.customerId, {
      totalSpent: 0,
      orderCount: 0,
    })
   }
   // ⑤ Map.get(customerId)で顧客の集計データを取得する
   const customer = customerInfo.get(order.customerId);
   // ⑥ totalSpentに注文金額を加算し、orderCountを1増やす
   customer.totalSpent += order.amount;
   customer.orderCount += 1;
  }
 }
 // ⑦ Mapを配列に変換する
 const customerOrder = [];
 // ⑧ 配列をreturnする
 for (const [customerId, data] of customerInfo) {
  customerOrder.push({
    customerId,
    totalSpent: data.totalSpent,
    orderCount: data.orderCount,
   })
  }
 return customerOrder;
};

console.log(calculateCompletedOrders(orders));

// [
//   {
//     customerId: "C01",
//     totalSpent: 2500,
//     orderCount: 2
//   },
//   {
//     customerId: "C02",
//     totalSpent: 2000,
//     orderCount: 1
//   },
//   {
//     customerId: "C03",
//     totalSpent: 300,
//     orderCount: 1
//   }
// ]