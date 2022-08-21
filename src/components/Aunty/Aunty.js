import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [ring, house, setHouse] =useContext(RingContext)

    return (
        <div>
           <h3>Aunty</h3>
           <p>house: {house}</p>
           <p><small>Ring: {ring}</small></p>
           <button onClick={() => setHouse(house + 1)}>Buy a House</button>
        </div>
    );
};

export default Aunty;