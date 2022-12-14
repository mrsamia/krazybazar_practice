import React from "react";

function Multiplication(props) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="pt-5 pb-5">
      {/* for (let i = 1; i <= 10; i++) 
          {
        console.log(i + " * 5 = " + (i * 5))
} */}
      <div>
        {numbers.map((item) => (
          <p>
            {item} * 5 = {item * 5}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Multiplication;
