import React, { useState, useContext, useEffect } from "react";
import AppContext from "../context/app-context";
import { useParams, useHistory } from "react-router";
// import { API_URL } from "../MOCK_API";
import "./EditPage.css";
import Button from "../UI/Button";

export const EditPage = () => {
  const { id } = useParams();
  // console.log(id);
  var ctx = useContext(AppContext);
  // console.log(ctx.warehouse);
  const { warehouse } = ctx;

  const [updatedWarehouse, setUpdatedWarehouse] = useState(null);

  useEffect(() => {
    fetch(`https://616d506937f997001745d992.mockapi.io/warehouse/${id}`)
      .then((data) => data.json())
      .then((mv) => setUpdatedWarehouse(mv));
  }, [id]);

  // console.log(updatedWarehouse);
  return warehouse ? (
    <UpdateWarehouse
      updatedWarehouse={updatedWarehouse}
      setUpdatedWarehouse={setUpdatedWarehouse}
    />
  ) : (
    ""
  );
};

const UpdateWarehouse = ({ updatedWarehouse, setUpdatedWarehouse }) => {
  const history = useHistory();

  const { id } = useParams();
  var ctx = useContext(AppContext);
  // console.log(ctx.warehouse);
  const { warehouse } = ctx;

  const [name, setName] = useState(warehouse[id - 1]?.name);
  const [code, setCode] = useState(warehouse[id - 1]?.code);
  const [city, setCity] = useState(warehouse[id - 1]?.city);
  const [space, setSpace] = useState(warehouse[id - 1]?.space_available);
  const [type, setType] = useState(warehouse[id - 1]?.type);
  const [cluster, setCluster] = useState(warehouse[id - 1]?.cluster);

  // const [editWarehouseData, setEditWarehouseData] = useState(false);

  useEffect(() => {
    setName(warehouse[id - 1]?.name);
    setCode(warehouse[id - 1]?.code);
    setCity(warehouse[id - 1]?.city);
    setSpace(warehouse[id - 1]?.space_available);
    setType(warehouse[id - 1]?.type);
    setCluster(warehouse[id - 1]?.cluster);
  }, [id, warehouse]);

  const editWarehouse = (e) => {
    e.preventDefault();
    const updateWarehouse = {
      name: name,
      code: code,
      city: city,
      space_available: space,
      type: type,
      cluster: cluster,
    };

    console.log(updateWarehouse);
    console.log(updatedWarehouse.id);
      fetch(
        "https://616d506937f997001745d992.mockapi.io/warehouse/" +
          updatedWarehouse.id,
        {
          method: "PUT",
          body: JSON.stringify(updateWarehouse),
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((data) => data.json())
        .then((wh) => setUpdatedWarehouse(wh))
        .then(() => history.push("/"));

  };
  return (
    <div className="editpage--container">
      <div className="warehouse-data--heading">
        <h3>Edit Data</h3>
      </div>
      <div className="warehouse-data--details">
        <input
          value={name}
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={code}
          type="text"
          name="code"
          onChange={(e) => setCode(e.target.value)}
        />
        <input
          value={city}
          type="text"
          name="city"
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          value={space}
          type="text"
          name="space"
          onChange={(e) => setSpace(e.target.value)}
        />
        <input
          value={type}
          type="text"
          name="type"
          onChange={(e) => setType(e.target.value)}
        />
        <input
          value={cluster}
          type="text"
          name="cluster"
          onChange={(e) => setCluster(e.target.value)}
        />
      </div>
      <div className="warehouse-data--button">
        {" "}
        <Button onClick={editWarehouse}>Save</Button>
        <Button>Discard</Button>
      </div>
    </div>
  );
};
