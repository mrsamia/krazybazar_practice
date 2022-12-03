import React, { useState } from 'react';

function AddToCartButton(props) {
    return (
        <div>
            <div className='header'>
            <button className="cart-button"  onClick={props.onClick}>Add to Cart</button>    
            </div>
        </div>
    );
}

export default AddToCartButton;