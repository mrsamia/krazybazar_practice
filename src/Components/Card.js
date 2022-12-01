import React from "react";
import data from "./CardData";

import CardItems from "./CardItems";
function Card(props) {
  return (
    <div className="container">
    <div className="row">
      {data.map((e) => {
        return(
            <div className="col-3">
            <CardItems title={e.title} amount={e.amount} stock={e.stock}  price={e.price}/>
          </div>  
        )
       
      })}
    </div>
    </div>
  );
}

export default Card;