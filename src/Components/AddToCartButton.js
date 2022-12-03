import React, { useState } from 'react';
import Cartbtn from './Cartbtn';

function AddToCartButton(props) {
    const [active, setActive] = useState(true)
    function click() {
        setActive(!active)
    }
    return (
        <div>
            <div className='header'>
            <button className="cart-button"  onClick={click}>Add to Cart</button>    
            </div>
            <div>
               { !active && <Cartbtn/>}
            </div>
        </div>
    );
}

export default AddToCartButton;