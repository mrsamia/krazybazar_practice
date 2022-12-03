import React, { useState } from 'react';
// import './accordion.css';

function Accordion(props) {
    const [value, setValue] = useState({
        title: "Section 1",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem."
    })
    const [active, setActive] = useState(true)
    function click() {
        setActive(!active)
    }
    return (
        <div className='pt-5 pb-5 Ac'>
            <div className='header' onClick={click}>
          
                <div>
                    <h4>{value.title}</h4>
                </div>
                <div>
                    <h4>{active ? "+" : "-"}</h4>
                </div>
            </div>
            <div>
                {!active && <p className='content'>{value.description}</p>}
            </div>
        </div>
    );
}

export default Accordion;