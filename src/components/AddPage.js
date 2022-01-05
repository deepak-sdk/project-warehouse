import React, { useState } from "react";
import Button from "../UI/Button";
import "./AddPage.css";

export const AddPage = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [city, setCity] = useState("");
  const [space, setSpace] = useState("");
  const [type, setType] = useState("");
  const [cluster, setCluster] = useState("");

  const newWarehouseData = () => {
    const newData = {
      name: name,
      code: code,
      city: city,
      space_available: space,
      type: type,
      cluster: cluster,
    };
    console.log(newData);

    fetch("https://616d506937f997001745d992.mockapi.io/warehouse", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: { "Content-Type": "application/json" },
    }).then((data) => data.json());
  };
  return (
    <div className="addPage--container">
      <div className="addpage--heading">
        <h3>Add WareHouse</h3>
      </div>
      <div className="addpage--inputs">
        <input
          placeholder="Enter warehouse name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          placeholder="Enter warehouse code"
          onChange={(e) => setCode(e.target.value)}
          value={code}
        />
        <input
          placeholder="Enter warehouse located city"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <input
          placeholder="Enter warehouse space"
          onChange={(e) => setSpace(e.target.value)}
          value={space}
        />
        <input
          placeholder="Enter warehouse type"
          onChange={(e) => setType(e.target.value)}
          value={type}
        />
        <input
          placeholder="Enter warehouse cluster"
          onChange={(e) => setCluster(e.target.value)}
          value={cluster}
        />
        <div className="addpage-button">
          <Button onClick={newWarehouseData}>Add</Button>
        </div>
      </div>
    </div>
  );
};
