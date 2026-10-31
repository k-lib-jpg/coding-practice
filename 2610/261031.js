// ECサイトに商品データと注文データがあります。

// 注文を先頭から順番に処理し、以下の3種類の情報を返す関数processOrdersWithSummaryを作成してください。
// - acceptedOrders：受付できた注文
// - rejectedOrders：受付できなかった注文とその理由
// - remainingProducts：すべての注文処理後の商品在庫

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

const processOrdersWithSummary = (products, orders) => {
  // ① 受付できた注文を格納するacceptedOrdersを作成する
  const acceptedOrders = [];
  // ② 受付できなかった注文を格納するrejectedOrdersを作成する
  const rejectedOrders = [];
  // ③ productsをコピーしてremainingProductsを作成する
  const remainingProducts = products.map((product) => ({ ...product }));
  // ④ 外側のfor...ofでordersを1件ずつ取り出す
  for (const order of orders) {
    // ⑤ 商品が見つかったかを管理するproductFoundをfalseで初期化する
   
    // ⑥ 内側のfor...ofでremainingProductsを1件ずつ取り出す

    // ⑦ order.productIdとremainingProduct.productIdが一致するか確認する

    // ⑧ 一致した場合、productFoundをtrueに変更する

    // ⑨ 在庫数が注文数量以上か確認する

    // ⑩ 在庫が足りている場合、acceptedOrdersに追加する

    // ⑪ 受付した商品の在庫数から注文数量を減らす

    // ⑫ 在庫が不足している場合、rejectedOrdersに追加する
    //    reasonは"insufficient_stock"とする

    // ⑬ 商品IDが一致したら、内側のループを終了する

    // ⑭ 内側のループ終了後、productFoundがfalseなら
    //    rejectedOrdersに追加する
    //    reasonは"product_not_found"とする
  }
  // ⑮ すべての注文を確認したら、
  //    acceptedOrders、rejectedOrders、remainingProductsを
  //    まとめたオブジェクトをreturnする
};

    