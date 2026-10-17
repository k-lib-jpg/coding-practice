// ECサイトの商品一覧から、指定された条件に一致する商品だけを抽出し、価格の安い順に並べる関数を作成してください。
const products = [
  { id: "P01", name: "Wireless Mouse", category: "electronics", price: 2500, inStock: true },
  { id: "P02", name: "USB Cable", category: "electronics", price: 800, inStock: true },
  { id: "P03", name: "Notebook", category: "stationery", price: 500, inStock: true },
  { id: "P04", name: "Keyboard", category: "electronics", price: 4500, inStock: false },
  { id: "P05", name: "Mouse Pad", category: "electronics", price: 1200, inStock: true },
  { id: "P06", name: "Ballpoint Pen", category: "stationery", price: 200, inStock: false }
];

const searchProducts = (products, conditions) => {
 const result = [];
 for (const product of products) {
  // ① カテゴリが一致しなければスキップ
  if (conditions.category !== undefined && product.category !== conditions.category) {
    continue;
  }
  if (conditions.minPrice !== undefined && product.price < conditions.minPrice) {
    continue;
  }
  // 最高価格が指定されていて、それより高い場合は除外
  if (conditions.maxPrice !== undefined && product.price > conditions.maxPrice) {
    continue;
  }
  // ④ 在庫条件を満たさなければスキップ
  if (conditions.inStockOnly && !product.inStock) {
    continue;
  }
  // ⑤ すべての条件を満たした商品を追加
  result.push(product);
    }
 //価格順に並び替える
 const productCost = result.sort((a, b) => {
  if (a.price === b.price) {
    return a.id.localeCompare(b.id);
  }
  return a.price - b.price;
 })
 return productCost;
};

console.log(searchProducts(products, {
  category: "electronics",
  minPrice: 1000,
  maxPrice: 3000,
  inStockOnly: true
}));
// P05, P01 の順

console.log(searchProducts(products, {
  category: "stationery",
  inStockOnly: false
}));
// P06, P03 の順

console.log(searchProducts(products, {
  minPrice: 2000,
  inStockOnly: true
}));
// P01 のみ

console.log(searchProducts(products, {
  category: "food",
  inStockOnly: false
}));
// []

console.log(searchProducts([], {
  inStockOnly: false
}));
// []