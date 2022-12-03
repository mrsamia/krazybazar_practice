import React from "react";

function SectionHeader(props) {
  return (
   <div className="container pt-5">
     <div className="row">
      <div className="col-6 d-flex justify-content-start">
        <p className="category-name">{props.name}</p>
      </div>
      <div className="col-6 d-flex justify-content-end">
        <p className="category-link">{props.title}</p>
      </div>
    </div>
   </div>
  );
}

export default SectionHeader;
