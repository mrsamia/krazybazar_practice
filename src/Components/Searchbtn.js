import React from "react";
import { HiSearch } from "react-icons/hi";

function Searchbtn(props) {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control shadow-none border-0 "
        placeholder="I'm shopping for..."
      />

      <div className="input-group-append d-flex align-items-center">
        <button className="btn hiSearch " type="button">
          <HiSearch />
        </button>
      </div>
    </div>
  );
}

export default Searchbtn;
