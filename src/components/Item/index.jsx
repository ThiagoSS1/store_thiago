import React from 'react';
import './styles.css';

const Item = ({ product }) => {
    return (
        <div className="item-card">
            <div className="section-1">
                <h2>{product.name}</h2>
            </div>
            <div className="section-2">
                <p>Price: ${product.price}</p>
            </div>
            <div className="section-3">
                {/* adicionar infos do card */}
            </div>
        </div>
    )
}

export default Item;

