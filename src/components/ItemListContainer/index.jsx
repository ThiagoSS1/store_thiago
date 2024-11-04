function ItemListContainer({ greeting, onAddToCart }) {
  const handleAddProduct = () => {
    const product = { name: 'Produto Teste', price: 50 };
    onAddToCart(product, 1); // Adiciona 1 unidade do produto ao carrinho
  };

  return (
    <div>
      <h1>{greeting}</h1>
      <button onClick={handleAddProduct}>Adicionar Produto ao Carrinho</button>
    </div>
  );
}

export default ItemListContainer;