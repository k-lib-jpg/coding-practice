export{};

type Product = {
  productId: string,
  name: string,
  stock: number
};

type Products = Product[];

type Order = {
  productId: string,
  quantity: number
};

type Orders = Order[];

type AcceptedOrder = {
  productId: string,
  name: string,
  quantity: number
}

type AcceptedOrders = AcceptedOrder[];

type RejectedOrder = {
  productId: string,
  quantity: number,
  reason: string
};

type RejectedOrders = RejectedOrder[];

type RemainingProduct = {
  productId: string,
  name: string,
  stock: number
};

type RemainingProducts = RemainingProduct[];


const products = [
  { productId: "P01", name: "Keyboard", stock: 10 },
  { productId: "P02", name: "Mouse", stock: 5 },
  { productId: "P03", name: "Monitor", stock: 3 }
];

type OrderSummary = {
  acceptedOrders: AcceptedOrders;
  rejectedOrders: RejectedOrders;
  remainingProducts: RemainingProducts;
};

const orders = [
  { productId: "P01", quantity: 4 },
  { productId: "P02", quantity: 3 },
  { productId: "P01", quantity: 5 },
  { productId: "P03", quantity: 4 },
  { productId: "P02", quantity: 3 },
  { productId: "P99", quantity: 2 },
  { productId: "P01", quantity: 2 }
];

const processOrdersWithSummary = (products: Products, orders: Orders): OrderSummary => {
  // ① 受付できた注文を格納するacceptedOrdersを作成する
  const acceptedOrders: AcceptedOrders = [];
  // ② 受付できなかった注文を格納するrejectedOrdersを作成する
  const rejectedOrders: RejectedOrders = [];
  // ③ productsをコピーしてremainingProductsを作成する
  const remainingProducts: RemainingProducts = products.map((product) => ({ ...product }));
  // ④ 外側のfor...ofでordersを1件ずつ取り出す
  for (const order of orders) {
    // ⑤ 商品が見つかったかを管理するproductFoundをfalseで初期化する
    let productFound = false;
    // ⑥ 内側のfor...ofでremainingProductsを1件ずつ取り出す
    for (const remainingProduct of remainingProducts) {
      // ⑦ order.productIdとremainingProduct.productIdが一致するか確認する
      if (order.productId === remainingProduct.productId) {
        // ⑧ 一致した場合、productFoundをtrueに変更する
        productFound = true;
        // ⑨ 在庫数が注文数量以上か確認する
        if (remainingProduct.stock >= order.quantity) {
          // ⑩ 在庫が足りている場合、acceptedOrdersに追加する
          acceptedOrders.push({productId: remainingProduct.productId, name: remainingProduct.name, quantity: order.quantity});
          // ⑪ 受付した商品の在庫数から注文数量を減らす
          remainingProduct.stock -= order.quantity;
        } else {
          // ⑫ 在庫が不足している場合、rejectedOrdersに追加する
          //    reasonは"insufficient_stock"とする
          rejectedOrders.push({productId: remainingProduct.productId, quantity: order.quantity, reason: "insufficient_stock"});
        }
        // ⑬ 商品IDが一致したら、内側のループを終了する
        break;
      }  
    }
    // ⑭ 内側のループ終了後、productFoundがfalseなら
    //    rejectedOrdersに追加する
    //    reasonは"product_not_found"とする
    if (productFound === false) {
      rejectedOrders.push({productId: order.productId, quantity: order.quantity, reason: "product_not_found"});
    }
  }
  // ⑮ すべての注文を確認したら、
  //    acceptedOrders、rejectedOrders、remainingProductsを
  //    まとめたオブジェクトをreturnする
  return {
    acceptedOrders,
    rejectedOrders,
    remainingProducts
  };
};

console.log(processOrdersWithSummary(products, orders));