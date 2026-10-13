import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <section className="product-list">
      <h2>Produkte</h2>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          category={product.category}
          price={product.price}
          stock={product.stock}
          featured={product.featured}
        />
      ))}
    </section>
  );
}

export default ProductList;
