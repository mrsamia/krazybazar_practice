import "./App.css";
import Nav from "./Components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Components/Card";
import SectionHeader from "./Components/SectionHeader";
import Cartbtn from "./Components/Cartbtn";
import Accordion from "./Components/AddToCartButton";
import { useState } from "react";
import Increment from "./Components/Increment";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(item){
    setCart([...cart, item]);
  }
  console.log(cart)
  return (
    <div className="App">
      <Nav />
      <div className="card-section pt-5">
        <SectionHeader name="Special Offer" title="View All"/>
        <Card addToCart={addToCart}/>
        {cart.length > 0 && <Cartbtn items={cart}/>}
      </div>
    <Increment/>
   
    </div>
  );
}

export default App;
