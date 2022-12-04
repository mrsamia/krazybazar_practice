import React from 'react';

function Buton(props) {
    return (
          
            <button className={props.className}><img src={props.img}/>{props.name}</button>
     
    );
}

export default Buton;