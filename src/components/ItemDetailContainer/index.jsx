import ItemDetail from "../ItemDetail";

function ItemDetailContainer({ greeting, onAddToCart }) {

const item = {
    name: 'Produto Detalhe',
    description: 'Descrição do Produto Detalhe',
    price: 100,
    image: 'https://via.placeholder.com/150'
}



  const handleAddProduct = () => {
    const product = { name: 'Produto Detalhe', price: 100 };
    onAddToCart(product, 1); 
  };

  return (
    <div>
      <h1>{greeting}</h1>
      {/* <button onClick={handleAddProduct}>Adicionar Produto ao Carrinho</button> */}
      <ItemDetail />
    </div>
  );
}

export default ItemDetailContainer;