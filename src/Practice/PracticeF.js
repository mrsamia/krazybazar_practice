import React from 'react';
import Practice from "./Practice";
import MultistepForm from "./MultistepForm";
import MultistepFromTwo from "./MultistepFromTwo";
import Increment from "./Increment";
import Multiplication from "./Multiplication";
import MultiplicationBtn from "./MultiplicationBtn";
import InputForm from "./InputForm";
import MultiplicationTwo from "./MultiplicationTwo";
import Todo from "./Todo";
import TodoTwo from "./TodoTwo";
import InputFormTwo from "./InputFormTwo";
import InputCalculate from "./InputCalculate";
import TodoApp from "./TodoApp";
import EPform from "./EPform";

function PracticeF(props) {
    return (
        <div>
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
        <InputFormTwo/>
        <InputCalculate/>
        <TodoApp/>
        <EPform/>
        </div>
    );
}

export default PracticeF;