import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaStar } from 'react-icons/fa';
import './styles.css';
import logo from '../NavBar/nuuvem.svg';
import Cart from '../Cart';
import Modal from '../Modal';
import ItemListContainer from '../ItemListContainer';


const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const handleCartClick = () => {
    // Simulando um produto selecionado
    const product = { name: 'Produto Exemplo', price: 100 };
    setSelectedProducts([...selectedProducts, product]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (product, quantity) => {
    // Lógica para adicionar ao carrinho e ajustar o estoque
    console.log(`Adicionando ${quantity} ${product.name} ao carrinho`);
    setCartCount(prevCount => {
      const newCount = prevCount + quantity;
      console.log(`Novo contador do carrinho: ${newCount}`);
      return newCount;
    });

  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-links">
        <NavLink to="/highlights">
          <FaStar className="icon" />
          Highlights
        </NavLink>
        <NavLink to="/pc">PC</NavLink>
        <NavLink to="/consoles">Consoles</NavLink>
        <NavLink to="/mobile">Mobile</NavLink>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <FaSearch className="search-icon" />
      </div>
      <div className="cart-container" style={{ position: 'relative' }} onClick={handleCartClick}>
        <Cart count={cartCount} />
        {isModalOpen && (
          <Modal
            products={selectedProducts}
            stock={10} // Simulando um estoque de 10 produtos
            initial={1}
            onAdd={handleAddToCart}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

