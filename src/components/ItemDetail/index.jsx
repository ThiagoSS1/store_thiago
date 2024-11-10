import React from 'react';

function ItemDetail({ item }) {
  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Preço: R${item.price}</p>
    </div>
  );
}

export default ItemDetail;