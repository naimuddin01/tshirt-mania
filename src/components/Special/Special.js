import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [ring, house, setHouse] = useContext(RingContext);
    const handleHouseDescrese = () => {
        const newHouseCount =  house -1;
        setHouse(newHouseCount);
    }
    return (
        <div>
            <h5>Special</h5>
            <p><small>House: {house}</small></p>
            <p><small>Gift: {ring}</small></p>
            {house > 5 && <button onClick={() => handleHouseDescrese()}>Sell a House</button>}
            
        </div>
    );
};

export default Special;