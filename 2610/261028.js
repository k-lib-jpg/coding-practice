// ECサイトに商品データと注文データがあります。
// 注文を先頭から順番に処理し、在庫が足りている注文だけを受け付ける関数processOrdersを作成してください。
// 注文を受け付けた場合は、その商品の在庫数から注文数量を減らします。

const products = [
  { productId: "P01", name: "Keyboard", stock: 10 },
  { productId: "P02", name: "Mouse", stock: 5 },
  { productId: "P03", name: "Monitor", stock: 3 }
];

const orders = [
  { productId: "P01", quantity: 4 },
  { productId: "P02", quantity: 3 },
  { productId: "P01", quantity: 5 },
  { productId: "P03", quantity: 4 },
  { productId: "P02", quantity: 3 },
  { productId: "P99", quantity: 2 },
  { productId: "P01", quantity: 2 }
];