function ProductCard({ name, category, price, stock, featured }) {
  const stockClass =
    stock === 0 ? "sold-out" : stock > 2 ? "in-stock" : "low-stock";
  return (
    <article className={`product-card ${stockClass}`}>
      <h3>{name}</h3>
      <p>Kategorie: {category}</p>
      <p>Preis: {price} €</p>
      <p>
        {stock === 0
          ? "Ausverkauft"
          : stock > 2
            ? `Noch ${stock} verfügbar im Stock`
            : "Nur noch wenige verfügbar"}
      </p>

      {featured && <p className="product-card-featured">Empfehlung</p>}
    </article>
  );
}

export default ProductCard;
