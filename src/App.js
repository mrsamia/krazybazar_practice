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
import Practice from "./Practice/Practice";
import MultistepForm from "./Practice/MultistepForm";
import MultistepFromTwo from "./Practice/MultistepFromTwo";
import Increment from "./Practice/Increment";
import Multiplication from "./Practice/Multiplication";
import MultiplicationBtn from "./Practice/MultiplicationBtn";
import InputForm from "./Practice/InputForm";
import MultiplicationTwo from "./Practice/MultiplicationTwo";
import Todo from "./Practice/Todo";
import TodoTwo from "./Practice/TodoTwo";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="card-section pt-5">
        <SectionHeader name="Special Offer" title="View All"/>
        <ProductCard/>
        {/* <ShoppingCart/> */}
        <Practice/>
        <MultistepForm/>
        <MultistepFromTwo/>
        <Increment/>
        <Multiplication/>
        <InputForm/>
        <MultiplicationBtn/>
        <MultiplicationTwo/>
        {/* <Todo/> */}
        <TodoTwo/>
     
      </div>
    </div>
  );
}

export default App;
