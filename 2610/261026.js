// ECサイトに商品の在庫データと注文データがあります。
// 注文された商品について、在庫数が注文数量以上あるかを確認し、注文可能な商品だけを配列にして返す関数getAvailableOrdersを作成してください。

const products = [
  { productId: "P01", name: "Keyboard", stock: 10 },
  { productId: "P02", name: "Mouse", stock: 3 },
  { productId: "P03", name: "Monitor", stock: 5 },
  { productId: "P04", name: "USB Cable", stock: 0 }
];

const orders = [
  { productId: "P01", quantity: 2 },
  { productId: "P02", quantity: 5 },
  { productId: "P03", quantity: 5 },
  { productId: "P04", quantity: 1 },
  { productId: "P99", quantity: 2 }
];

const getAvailableOrders = (products, orders) => {
  // ① 結果を格納する空の配列を作成する
  const availableOrders = [];
  // ② 外側のfor...ofでordersを1件ずつ取り出す
  for (const order of orders) {
    // ③ 内側のfor...ofでproductsを1件ずつ取り出す
    for (const product of products) {
      // ④ order.productIdとproduct.productIdが一致するか確認する
      if (order.productId === product.productId) {
        // ⑤ 一致した商品の在庫数が注文数量以上か確認する
        // ⑥ 条件を満たす場合のみ、productId、name、quantityを結果の配列に追加する
        if (order.quantity <= product.stock) {
          availableOrders.push({productId: product.productId, name: product.name, quantity:order.quantity});
        } 
        // ⑦ 一致する商品を確認できたら、内側のループを終了する
        break;
      }
    }
  }
  // ⑧ すべての注文を確認したら、結果の配列をreturnする
  return availableOrders;
};

console.log(getAvailableOrders(products, orders));

// [
//   {
//     productId: "P01",
//     name: "Keyboard",
//     quantity: 2
//   },
//   {
//     productId: "P03",
//     name: "Monitor",
//     quantity: 5
//   }
// ]