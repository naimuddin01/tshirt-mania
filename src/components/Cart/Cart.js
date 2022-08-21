import React from 'react';
import './Cart.css'
const Cart = ({cart, handleRemoveFromCart}) => {
    //conditional rendaring option
    //1. Element variable (command name e toyri korce)
    //2. ternary operator (condition ? true : false)
    //3. && operator
    //4. || operator
    let command ;
    if(cart.length === 0){
        // command = <p>Please Add a least one item!!</p>
        command = <div>
            <h5>ohh kipta, khoroch kor</h5>
            <p>Kinos na ken</p>
        </div>
    }
    else if(cart.length === 1) {
        command = <p>Please add more</p>
    }
    else{
        command = <p>Thanks for adding item</p>
    }
    
    return (
        <div>
            <h2>Item Selected : {cart.length}</h2>
            
            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                    </p> )
            }

            {/* Element variable */}
            {command}

            {/* ternary operator */}
            {cart.length !==4 ? <p>keep adding</p> : <button>Remove All</button>}

            {/* && operator */}
            {cart.length !==3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin jon ki gift dibi</p>    
            </div>}

            {/* || operator */}
            {cart.length === 0 || <button className='bule'> yay! you are buying</button>}
        </div>
    );
};

export default Cart;