import React, { useState, useEffect } from 'react';
import './styles.css';

const Modal = ({ products, stock, initial, onAdd, onClose }) => {
  const [quantities, setQuantities] = useState(products.map(() => initial));

  useEffect(() => {
    setQuantities(products.map(() => initial));
  }, [products, initial]);

  const handleQuantityChange = (index, e) => {
    const value = Math.max(1, Math.min(stock, Number(e.target.value)));
    const newQuantities = quantities.map((q, i) => (i === index ? value : q));
    onAdd(products[index], value - quantities[index]); // Atualiza o carrinho com a diferença na quantidade
    setQuantities(newQuantities);
  };

  const handleCheckout = () => {
    products.forEach((product, index) => {
      const quantity = quantities[index];
      console.log(`Finalizando compra de ${quantity} ${product.name}`);
      // Aqui você pode adicionar a lógica para finalizar a compra
    });
    onClose();
  };

  return (
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <div className="modal-content">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <div className="product-header">
              <h2>{product.name}</h2>
              <p>Valor: ${product.price}</p>
            </div>
            <div className="quantity">
              <label htmlFor={`quantity-${index}`}>Quantidade:</label>
              <input
                type="number"
                id={`quantity-${index}`}
                value={quantities[index] || 1}
                onChange={(e) => handleQuantityChange(index, e)}
                min="1"
                max={stock}
              />
            </div>
          </div>
        ))}
        <button onClick={handleCheckout}>Finalizar Compra</button>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Modal;