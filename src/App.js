import "./App.css";
import Nav from "./Components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import SectionHeader from "./Components/SectionHeader";
// import Cartbtn from "./Components/ShoppingCart";
// import Accordion from "./Components/AddToCartButton";
// import { useState } from "react";
// import Increment from "./Components/Increment";
import ProductCard from "./Components/ProductCard";
import ShoppingCart from "./Components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="card-section pt-5">
        <SectionHeader name="Special Offer" title="View All"/>
        <ProductCard/>
        {/* <ShoppingCart/> */}
     
      </div>
    </div>
  );
}

export default App;
