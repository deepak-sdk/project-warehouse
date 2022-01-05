import React from "react";
import "./AddPage.css";

export const AddPage = () => {
  return (
    <div className="addPage--container">
      <div className="addpage--heading">
        <h3>Add WareHouse</h3>
      </div>
      <div className="addpage--inputs">
        <input placeholder="Enter the warehouse name"/>
      </div>
    </div>
  );
};
