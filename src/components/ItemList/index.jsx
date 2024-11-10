import React, { useEffect, useState } from 'react';
import Item from '../Item';
import './styles.css';

const ItemList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([
                        { name: 'Product 1', price: 100 },
                        { name: 'Product 2', price: 200 },
                        { name: 'Product 3', price: 300 },
                    ]);
                }, 2000);
            });
        };

        fetchProducts().then((data) => {
            setProducts(data);
        });
    }, []);

    return (
        <div className="item-list-container">
            <div className="item-list">
                {products.map((product, index) => (
                    <Item key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ItemList;