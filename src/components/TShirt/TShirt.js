import React from 'react';
import './TShirt.css'

const TShirt = ({handleAddToCart, tShirt}) => {
    //props na likhe amra direct jae maan gulo pabo sei gulo o lickte pari
    const {name, picture, price } = tShirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tShirt)}>Add to Cart</button>
        </div>
    );
};

export default TShirt;