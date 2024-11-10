import React, { useState } from "react";
import ItemDetail from "../ItemDetail";
import ItemList from "../ItemList";

function ItemListContainer({ greeting, onAddToCart }) {
  const [selectedItem, setSelectedItem] = useState(null);


  const handleAddProduct = () => {
    const product = { name: 'Produto Teste', price: 50 };
    onAddToCart(product, 1); 
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  }

  return (
    <div>
      <h1>{greeting}</h1>
      {selectedItem ? (
        <ItemDetail item={selectedItem} />
      ) : (
        <ItemList onItemClick={handleSelectItem} />
      )}
    </div>
  );
}

export default ItemListContainer;