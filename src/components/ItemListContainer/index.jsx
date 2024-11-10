import ItemList from "../ItemList";

function ItemListContainer({ greeting, onAddToCart }) {
  const handleAddProduct = () => {
    const product = { name: 'Produto Teste', price: 50 };
    onAddToCart(product, 1); 
  };

  return (
    <div>
      <h1>{greeting}</h1>
      {/* <button onClick={handleAddProduct}>Adicionar Produto ao Carrinho</button> */}
      <ItemList />
    </div>
  );
}

export default ItemListContainer;